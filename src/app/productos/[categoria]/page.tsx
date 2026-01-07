"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

const categoryInfo: Record<string, { title: string; description: string; bgColor: string; accentColor: string }> = {
    maicitos: {
        title: "Maicitos Inflados",
        description: "Maíz inflado al vapor, sin freír. Crujientes, ligeros y deliciosos. Autorizados por la SEP.",
        bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
        accentColor: "text-orange-600",
    },
    obleas: {
        title: "Obleas de Amaranto",
        description: "El superalimento ancestral en formato crujiente. Libres de azúcar añadida.",
        bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
        accentColor: "text-purple-600",
    },
    chips: {
        title: "Chips de Vegetales",
        description: "Mezcla colorida de vegetales deshidratados. 100% naturales y deliciosos.",
        bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
        accentColor: "text-green-600",
    },
    chicharron: {
        title: "Chicharrón de Garbanzo",
        description: "Alto en proteína. La alternativa innovadora y saludable al chicharrón tradicional.",
        bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
        accentColor: "text-amber-600",
    },
    granel: {
        title: "Maicitos Granel 500g",
        description: "Bolsa grande para compartir, fiestas o reventa. Ideal para negocio propio.",
        bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
        accentColor: "text-blue-600",
    },
};

export default function CategoriaPage() {
    const params = useParams();
    const categoria = params.categoria as string;

    const [selectedFlavor, setSelectedFlavor] = useState("");
    const [selectedPackIndex, setSelectedPackIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    const [mounted, setMounted] = useState(false);

    const { addToCart, openCart, isHydrated } = useCartStore();

    // Find the product for this category
    const product = products.find((p) => p.category === categoria || p.id === categoria);
    const info = categoryInfo[categoria] || categoryInfo.maicitos;

    useEffect(() => {
        setMounted(true);
        if (product && product.flavors.length > 0) {
            setSelectedFlavor(product.flavors[0]);
        }
    }, [product]);

    if (!product) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-serif text-gray-900 mb-4">Producto no encontrado</h1>
                        <Link href="/productos" className="text-orange-600 hover:underline">
                            ← Volver a productos
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const selectedPack = product.packs[selectedPackIndex];
    const totalPrice = selectedPack.price * quantity;

    const handleAddToCart = () => {
        if (!mounted || !isHydrated) return;

        addToCart(product, quantity, selectedFlavor, selectedPack);
        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
            openCart();
        }, 800);
    };

    return (
        <>
            <Navbar />
            <main className={`min-h-screen ${info.bgColor} pt-24`}>
                {/* Breadcrumb */}
                <div className="container-luxury py-4">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-gray-900">Inicio</Link>
                        <span>/</span>
                        <Link href="/productos" className="hover:text-gray-900">Productos</Link>
                        <span>/</span>
                        <span className="text-gray-900">{info.title}</span>
                    </nav>
                </div>

                {/* Product Section */}
                <section className="container-luxury pb-20">
                    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            {/* Product Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="relative aspect-square lg:aspect-auto bg-gray-50 p-8 lg:p-16 flex items-center justify-center"
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative w-full max-w-md aspect-square"
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>

                                {/* Net Content Badge */}
                                <div className="absolute top-6 left-6 bg-white shadow-md rounded-full px-4 py-2">
                                    <span className="font-bold text-gray-900">{product.netContent}</span>
                                </div>
                            </motion.div>

                            {/* Product Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="p-8 lg:p-12 flex flex-col"
                            >
                                <div className="flex-1">
                                    <h1 className="font-serif text-3xl lg:text-4xl text-gray-900 mb-4">
                                        {product.name}
                                    </h1>
                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-8">
                                        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                                            Características
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {product.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full"
                                                >
                                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Flavor Selector */}
                                    {product.flavors.length > 1 && (
                                        <div className="mb-6">
                                            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                                                Sabor
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {product.flavors.map((flavor) => (
                                                    <button
                                                        key={flavor}
                                                        onClick={() => setSelectedFlavor(flavor)}
                                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedFlavor === flavor
                                                            ? "bg-gray-900 text-white"
                                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                            }`}
                                                    >
                                                        {flavor}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Pack Size Selector */}
                                    <div className="mb-6">
                                        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                                            Tamaño del Paquete
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {product.packs.map((pack, i) => (
                                                <button
                                                    key={pack.label}
                                                    onClick={() => setSelectedPackIndex(i)}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedPackIndex === i
                                                        ? "bg-gray-900 text-white"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                        }`}
                                                >
                                                    {pack.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quantity */}
                                    <div className="mb-8">
                                        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                                            Cantidad
                                        </h3>
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                                            >
                                                −
                                            </button>
                                            <span className="text-xl font-medium w-12 text-center">{quantity}</span>
                                            <button
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Price & CTA */}
                                <div className="border-t border-gray-100 pt-6">
                                    <div className="flex items-baseline gap-3 mb-6">
                                        <span className="text-3xl font-bold text-gray-900">
                                            ${totalPrice.toLocaleString()}
                                        </span>
                                        <span className="text-gray-500">MXN</span>
                                        {quantity > 1 && (
                                            <span className="text-sm text-gray-400">
                                                (${selectedPack.price} × {quantity})
                                            </span>
                                        )}
                                    </div>

                                    <motion.button
                                        onClick={handleAddToCart}
                                        disabled={isAdded || !mounted}
                                        className={`w-full py-4 rounded-full text-lg font-medium transition-all ${isAdded
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-900 text-white hover:bg-gray-800"
                                            }`}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isAdded ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Agregado al Carrito
                                            </span>
                                        ) : (
                                            "Agregar al Carrito"
                                        )}
                                    </motion.button>

                                    {/* WhatsApp Alternative */}
                                    <a
                                        href={`https://wa.me/5213328286378?text=Hola! Me interesa ${product.name} - ${selectedFlavor} - ${selectedPack.label}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full mt-3 py-4 rounded-full text-center border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                                    >
                                        Comprar por WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Nutritional Info */}
                {product.nutrition && (
                    <section className="container-luxury pb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-3xl shadow-sm p-8"
                        >
                            <h2 className="font-serif text-2xl text-gray-900 mb-6 flex items-center gap-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Información Nutricional
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Nutrition Facts Table */}
                                <div>
                                    <p className="text-sm text-gray-500 mb-4">Tamaño de porción: {product.nutrition.servingSize}</p>

                                    <div className="space-y-3">
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="font-medium text-gray-900">Calorías</span>
                                            <span className="font-bold text-gray-900">{product.nutrition.calories} kcal</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Proteínas</span>
                                            <span className="text-gray-900">{product.nutrition.protein}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Grasas Totales</span>
                                            <span className="text-gray-900">{product.nutrition.totalFat}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100 pl-4">
                                            <span className="text-gray-500 text-sm">Grasas Saturadas</span>
                                            <span className="text-gray-700 text-sm">{product.nutrition.saturatedFat}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100 pl-4">
                                            <span className="text-gray-500 text-sm font-medium">Grasas Trans</span>
                                            <span className="text-green-600 font-medium text-sm">{product.nutrition.transFat}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Carbohidratos</span>
                                            <span className="text-gray-900">{product.nutrition.carbs}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100 pl-4">
                                            <span className="text-gray-500 text-sm">Azúcares</span>
                                            <span className="text-gray-700 text-sm">{product.nutrition.sugar}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100 pl-4">
                                            <span className="text-gray-500 text-sm font-medium">Azúcares Añadidos</span>
                                            <span className="text-green-600 font-medium text-sm">{product.nutrition.addedSugar}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Fibra Dietética</span>
                                            <span className="text-gray-900">{product.nutrition.fiber}</span>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span className="text-gray-600">Sodio</span>
                                            <span className="text-gray-900">{product.nutrition.sodium}</span>
                                        </div>
                                    </div>

                                    {/* Ingredients */}
                                    <div className="mt-6">
                                        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                                            Ingredientes
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {product.nutrition.ingredients}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    <div className="mt-6 flex gap-4">
                                        <div className="flex-1 bg-green-50 rounded-xl p-4 text-center">
                                            <p className="text-2xl font-bold text-green-600">0g</p>
                                            <p className="text-xs text-green-700">Grasas Trans</p>
                                        </div>
                                        <div className="flex-1 bg-green-50 rounded-xl p-4 text-center">
                                            <p className="text-2xl font-bold text-green-600">{product.nutrition.addedSugar}</p>
                                            <p className="text-xs text-green-700">Azúcar Añadida</p>
                                        </div>
                                        <div className="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                                            <p className="text-2xl font-bold text-orange-600">{product.nutrition.calories}</p>
                                            <p className="text-xs text-orange-700">Kcal/porción</p>
                                        </div>
                                    </div>

                                    <p className="text-xs text-gray-400 mt-4">
                                        Información acorde a la Norma Oficial Mexicana (NOM) 051-SCFI/SSA1-2010
                                    </p>
                                </div>

                                {/* Nutrition Label Image */}
                                {product.nutrition.image && (
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
                                            <Image
                                                src={product.nutrition.image}
                                                alt={`Tabla nutricional de ${product.name}`}
                                                width={400}
                                                height={600}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </section>
                )}

                {/* Back to Products */}
                <section className="container-luxury pb-20">
                    <Link
                        href="/productos"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Ver todos los productos
                    </Link>
                </section>
            </main>
            <Footer />
        </>
    );
}
