import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/data/products";

export interface CartItem {
    product: Product;
    quantity: number;
    selectedFlavor: string;
    selectedPack: {
        quantity: number;
        label: string;
        price: number;
    };
    uniqueId: string; // To differentiate same product with different options
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    isHydrated: boolean;

    // Actions
    addToCart: (
        product: Product,
        quantity: number,
        selectedFlavor: string,
        selectedPack: { quantity: number; label: string; price: number }
    ) => void;
    removeFromCart: (uniqueId: string) => void;
    updateQuantity: (uniqueId: string, quantity: number) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    setHydrated: () => void;

    // Computed
    getSubtotal: () => number;
    getTotal: () => number;
    getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            isHydrated: false,

            addToCart: (product, quantity, selectedFlavor, selectedPack) => {
                const uniqueId = `${product.id}-${selectedFlavor}-${selectedPack.label}`;

                set((state) => {
                    const existingItem = state.items.find(
                        (item) => item.uniqueId === uniqueId
                    );

                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.uniqueId === uniqueId
                                    ? { ...item, quantity: item.quantity + quantity }
                                    : item
                            ),
                        };
                    }

                    return {
                        items: [
                            ...state.items,
                            {
                                product,
                                quantity,
                                selectedFlavor,
                                selectedPack,
                                uniqueId,
                            },
                        ],
                    };
                });
            },

            removeFromCart: (uniqueId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.uniqueId !== uniqueId),
                }));
            },

            updateQuantity: (uniqueId, quantity) => {
                if (quantity <= 0) {
                    get().removeFromCart(uniqueId);
                    return;
                }

                set((state) => ({
                    items: state.items.map((item) =>
                        item.uniqueId === uniqueId
                            ? { ...item, quantity }
                            : item
                    ),
                }));
            },

            clearCart: () => {
                set({ items: [] });
            },

            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            setHydrated: () => set({ isHydrated: true }),

            getSubtotal: () => {
                return get().items.reduce(
                    (total, item) => total + item.selectedPack.price * item.quantity,
                    0
                );
            },

            getTotal: () => {
                return get().getSubtotal();
            },

            getItemCount: () => {
                return get().items.reduce((count, item) => count + item.quantity, 0);
            },
        }),
        {
            name: "blofis-cart-v2",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ items: state.items }),
            onRehydrateStorage: () => (state) => {
                state?.setHydrated();
            },
        }
    )
);
