"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const productImages = [
    { src: "/productos/maicitos-sabores.png", alt: "Maicitos Inflados" },
    { src: "/productos/obleas-colores.png", alt: "Obleas de Amaranto" },
    { src: "/productos/chips-vegetales.jpg", alt: "Chips de Vegetales" },
    { src: "/productos/chicharron-garbanzo.png", alt: "Chicharrón de Garbanzo" },
    { src: "/productos/paquete-mix.png", alt: "Paquete Mix" },
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % productImages.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-yellow-50/50">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/40 to-yellow-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-100/30 to-emerald-100/30 rounded-full blur-3xl" />
            </div>

            <div className="container-luxury relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm font-medium text-orange-600 uppercase tracking-[0.2em] mb-4">
                            Snacks Premium Saludables
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                            El peso del sabor,{" "}
                            <span className="italic text-orange-600">sin la gravedad.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                            Descubre una nueva dimensión de snacks saludables.
                            Crujientes, ligeros y libres de culpa. Inflados al vapor, sin freír.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="/productos"
                                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                            >
                                Comprar Ahora
                            </Link>
                            <Link
                                href="#categorias"
                                className="inline-flex items-center gap-2 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
                            >
                                Conoce más
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 md:gap-12">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">0g</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Grasas Trans</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">105</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Kcal/porción</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">100%</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Natural</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Rotating Product Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Rotating product images */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                        y: [0, -15, 0]
                                    }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                    transition={{
                                        duration: 0.6,
                                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={productImages[currentIndex].src}
                                        alt={productImages[currentIndex].alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Product indicator dots */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                                {productImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                                ? "bg-orange-500 w-6"
                                                : "bg-gray-300 hover:bg-gray-400"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-gray-400"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
