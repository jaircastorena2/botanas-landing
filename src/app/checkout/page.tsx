"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

interface ShippingForm {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    notes: string;
}

export default function CheckoutPage() {
    const { items, getTotal, clearCart, isHydrated } = useCartStore();
    const [mounted, setMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<ShippingForm>>({});

    const [form, setForm] = useState<ShippingForm>({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "Jalisco",
        zipCode: "",
        notes: "",
    });

    useEffect(() => setMounted(true), []);

    if (!mounted || !isHydrated) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-gray-400">Cargando...</div>
            </div>
        );
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof ShippingForm]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<ShippingForm> = {};

        if (!form.name.trim()) newErrors.name = "Nombre requerido";
        if (!form.phone.trim()) newErrors.phone = "Teléfono requerido";
        if (form.phone && !/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Ingresa 10 dígitos";
        }
        if (!form.address.trim()) newErrors.address = "Dirección requerida";
        if (!form.city.trim()) newErrors.city = "Ciudad requerida";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const generateWhatsAppMessage = () => {
        const itemsList = items
            .map(
                (item) =>
                    `• ${item.quantity}x ${item.product.name} (${item.selectedFlavor}, ${item.selectedPack.label}) - $${item.selectedPack.price * item.quantity}`
            )
            .join("\n");

        const message = `
🛒 *NUEVO PEDIDO - Botanas Blofis*

*📦 Productos:*
${itemsList}

*💰 Total: $${getTotal().toLocaleString()} MXN*

*📍 Datos de envío:*
Nombre: ${form.name}
Teléfono: ${form.phone}
${form.email ? `Email: ${form.email}` : ""}
Dirección: ${form.address}
Ciudad: ${form.city}, ${form.state}
${form.zipCode ? `C.P.: ${form.zipCode}` : ""}
${form.notes ? `Notas: ${form.notes}` : ""}
        `.trim();

        return encodeURIComponent(message);
    };

    const handleSubmit = () => {
        if (!validateForm()) return;
        if (items.length === 0) return;

        setIsSubmitting(true);
        const message = generateWhatsAppMessage();
        const whatsappUrl = `https://wa.me/5213328286378?text=${message}`;
        window.open(whatsappUrl, "_blank");

        setTimeout(() => {
            clearCart();
            setIsSubmitting(false);
        }, 1000);
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-6">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <h1 className="font-serif text-2xl text-gray-900 mb-3">Tu carrito está vacío</h1>
                    <p className="text-gray-500 mb-6">Agrega productos antes de proceder al pago.</p>
                    <Link href="/#productos" className="btn-solid">Ver Productos</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-100">
                <div className="container-luxury py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo-blofis.png" alt="Blofis" width={40} height={40} className="w-10 h-10 object-contain" />
                        <span className="font-serif text-xl text-gray-900">Blofis</span>
                    </Link>
                    <Link href="/#productos" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Seguir comprando
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="container-luxury py-8 md:py-12">
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-3xl text-gray-900 mb-8 text-center"
                >
                    Finalizar Compra
                </motion.h1>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Shipping Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                            <h2 className="font-serif text-xl text-gray-900 mb-6">Datos de Envío</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-900`}
                                        placeholder="Tu nombre"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-900`}
                                            placeholder="10 dígitos"
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                            placeholder="opcional"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={form.address}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.address ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-900`}
                                        placeholder="Calle, número, colonia"
                                    />
                                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={form.city}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.city ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-900`}
                                            placeholder="Ciudad"
                                        />
                                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                                        <select
                                            name="state"
                                            value={form.state}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white"
                                        >
                                            <option>Jalisco</option>
                                            <option>CDMX</option>
                                            <option>Nuevo León</option>
                                            <option>Guanajuato</option>
                                            <option>Otro</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">C.P.</label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            value={form.zipCode}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                            placeholder="00000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Notas adicionales</label>
                                    <textarea
                                        name="notes"
                                        value={form.notes}
                                        onChange={handleInputChange}
                                        rows={2}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                                        placeholder="Instrucciones especiales..."
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm sticky top-28">
                            <h2 className="font-serif text-xl text-gray-900 mb-6">Resumen del Pedido</h2>

                            <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                                {items.map((item) => (
                                    <div key={item.uniqueId} className="flex gap-3 bg-gray-50 rounded-lg p-3">
                                        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white flex-shrink-0">
                                            <Image src={item.product.image} alt={item.product.name} fill className="object-contain p-1" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-gray-900 truncate">{item.product.name}</h4>
                                            <p className="text-xs text-gray-500">{item.selectedFlavor} • {item.selectedPack.label}</p>
                                            <p className="text-xs text-gray-500">{item.quantity} × ${item.selectedPack.price}</p>
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            ${item.selectedPack.price * item.quantity}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Envío</span>
                                    <span className="text-green-600">Por cotizar</span>
                                </div>
                                <div className="flex justify-between text-lg font-medium pt-2 border-t border-gray-100">
                                    <span className="text-gray-900">Total</span>
                                    <span className="text-gray-900">${getTotal().toLocaleString()} MXN</span>
                                </div>
                            </div>

                            <motion.button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full mt-6 btn-solid flex items-center justify-center gap-2"
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Procesando...
                                    </span>
                                ) : (
                                    <>
                                        <span>Pagar por WhatsApp</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </>
                                )}
                            </motion.button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                Serás redirigido a WhatsApp para confirmar tu pedido
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
