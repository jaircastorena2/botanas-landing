"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        id: "maicitos",
        name: "Maicitos",
        description: "Inflados al vapor",
        image: "/productos/maicitos-bowl.png",
        color: "from-orange-400 to-yellow-400",
        bgColor: "bg-orange-50",
    },
    {
        id: "obleas",
        name: "Obleas de Amaranto",
        description: "Sin azúcar añadida",
        image: "/productos/obleas-colores.png",
        color: "from-purple-400 to-pink-400",
        bgColor: "bg-purple-50",
    },
    {
        id: "chips",
        name: "Chips de Vegetales",
        description: "100% naturales",
        image: "/productos/chips-vegetales.jpg",
        color: "from-green-400 to-emerald-400",
        bgColor: "bg-green-50",
    },
    {
        id: "chicharron",
        name: "Chicharrón de Garbanzo",
        description: "Alto en proteína",
        image: "/productos/chicharron-garbanzo.png",
        color: "from-amber-400 to-orange-400",
        bgColor: "bg-amber-50",
    },
];

export default function CategoriesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="categorias" ref={ref} className="py-20 md:py-28 bg-white">
            <div className="container-luxury">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm font-medium text-orange-600 uppercase tracking-[0.2em] mb-3">
                        Nuestra Colección
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                        Snacks Saludables ⚡
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Explora nuestras líneas de productos. Todos autorizados por la SEP para venta en escuelas.
                    </p>
                </motion.div>

                {/* Category Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/productos/${category.id}`}
                                className="group block"
                            >
                                <div
                                    className={`relative aspect-square rounded-3xl overflow-hidden ${category.bgColor} transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]`}
                                >
                                    {/* Product Image */}
                                    <div className="absolute inset-0 flex items-center justify-center p-6">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 3 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                            className="relative w-full h-full"
                                        >
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Gradient Overlay on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                                </div>

                                {/* Category Info */}
                                <div className="mt-4 text-center">
                                    <h3 className="font-serif text-lg md:text-xl text-gray-900 group-hover:text-orange-600 transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                                        {category.description}
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/productos"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        Ver Todos los Productos
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
