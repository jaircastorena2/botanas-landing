"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";

export default function CartDrawer() {
    const {
        items,
        isOpen,
        closeCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        getItemCount,
        isHydrated,
    } = useCartStore();

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted || !isHydrated) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/50 z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="font-serif text-xl text-gray-900">
                                Tu Carrito ({getItemCount()})
                            </h2>
                            <button
                                onClick={closeCart}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Cerrar carrito"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                        <svg
                                            className="w-10 h-10 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                                    <button
                                        onClick={closeCart}
                                        className="btn-outline text-sm"
                                    >
                                        Explorar productos
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div
                                            key={item.uniqueId}
                                            className="bg-gray-50 rounded-xl p-4"
                                        >
                                            <div className="flex gap-4">
                                                {/* Product Image */}
                                                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0">
                                                    <Image
                                                        src={item.product.image}
                                                        alt={item.product.name}
                                                        fill
                                                        className="object-contain p-2"
                                                    />
                                                </div>

                                                {/* Product Info */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-medium text-gray-900 text-sm">
                                                        {item.product.name}
                                                    </h3>
                                                    <p className="text-xs text-gray-500 mt-0.5">
                                                        {item.selectedFlavor} • {item.selectedPack.label}
                                                    </p>
                                                    <p className="text-sm font-medium text-gray-900 mt-1">
                                                        ${item.selectedPack.price} MXN
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Quantity Controls & Remove */}
                                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.uniqueId, item.quantity - 1)
                                                        }
                                                        className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="text-sm font-medium w-6 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.uniqueId, item.quantity + 1)
                                                        }
                                                        className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.uniqueId)}
                                                    className="text-xs text-red-500 hover:text-red-700"
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-gray-100 p-6 space-y-4 bg-gray-50">
                                {/* Total */}
                                <div className="flex justify-between text-lg font-medium">
                                    <span className="text-gray-900">Total</span>
                                    <span className="text-gray-900">
                                        ${getTotal().toLocaleString()} MXN
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <Link
                                    href="/checkout"
                                    onClick={closeCart}
                                    className="btn-solid w-full text-center block"
                                >
                                    Proceder al Pago
                                </Link>

                                {/* Continue Shopping */}
                                <button
                                    onClick={closeCart}
                                    className="w-full text-center text-sm text-gray-500 hover:text-gray-900"
                                >
                                    Continuar comprando
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
