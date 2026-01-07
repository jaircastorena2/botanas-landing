"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const categories = [
    { id: "maicitos", name: "Maicitos", bgColor: "bg-orange-50", textColor: "text-orange-600" },
    { id: "obleas", name: "Obleas", bgColor: "bg-purple-50", textColor: "text-purple-600" },
    { id: "chips", name: "Chips", bgColor: "bg-green-50", textColor: "text-green-600" },
    { id: "chicharron", name: "Chicharrón", bgColor: "bg-amber-50", textColor: "text-amber-600" },
    { id: "granel", name: "Granel", bgColor: "bg-blue-50", textColor: "text-blue-600" },
];

export default function ProductosPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 pt-24">
                {/* Header */}
                <section className="bg-white border-b border-gray-100">
                    <div className="container-luxury py-12 md:py-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <p className="text-sm font-medium text-orange-600 uppercase tracking-[0.2em] mb-3">
                                Tienda Online
                            </p>
                            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                                Nuestros Productos
                            </h1>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Snacks saludables autorizados por la SEP.
                                Elige tu categoría favorita y descubre todos los sabores.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-12 md:py-16">
                    <div className="container-luxury">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product, index) => {
                                const category = categories.find(c => c.id === product.category);

                                return (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={`/productos/${product.category}`}
                                            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                                        >
                                            {/* Product Image */}
                                            <div className={`relative aspect-square ${category?.bgColor || 'bg-gray-50'}`}>
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                                />

                                                {/* Category Badge */}
                                                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm ${category?.textColor} text-xs font-medium`}>
                                                    {category?.name}
                                                </div>
                                            </div>

                                            {/* Product Info */}
                                            <div className="p-6">
                                                <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                                    {product.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                                                    {product.description}
                                                </p>

                                                {/* Features */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {product.features.slice(0, 2).map((feature) => (
                                                        <span
                                                            key={feature}
                                                            className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Price Range */}
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="text-lg font-semibold text-gray-900">
                                                            Desde ${product.packs[0].price}
                                                        </span>
                                                        <span className="text-sm text-gray-400 ml-1">MXN</span>
                                                    </div>
                                                    <span className="text-orange-600 font-medium text-sm flex items-center gap-1">
                                                        Ver más
                                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Mayoreo CTA */}
                <section className="py-12 md:py-16 bg-white">
                    <div className="container-luxury">
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                                ¿Buscas mayoreo o marca propia?
                            </h2>
                            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                                Precios especiales para distribuidores. Fabricamos con tu marca.
                            </p>
                            <a
                                href="https://wa.me/5213328286378?text=Hola, me interesa información sobre mayoreo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Contactar por WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
