"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const formats = [
    {
        id: "sin-etiqueta",
        title: "Sin Etiqueta",
        description: "Bolsa transparente con lote y fecha de caducidad impresa.",
        icon: "📦",
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: "blofis",
        title: "Marca Blofis",
        description: "Marca reconocida en el mercado nacional. Cumplimiento de la NOM-051.",
        icon: "🏷️",
        color: "from-orange-500 to-yellow-400",
    },
    {
        id: "marca-propia",
        title: "Tu Propia Marca",
        description: "Línea de botanas diseñada especialmente para ti.",
        icon: "🎨",
        color: "from-purple-500 to-pink-400",
    },
];

export default function SalesFormatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="formatos" ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-slate-700 to-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238BC34A' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container-luxury relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-[#8BC34A]/20 text-[#8BC34A] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Formatos de Venta
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                        Elige tu <span className="text-[#8BC34A]">Formato</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Ofrecemos diferentes formatos de venta para adaptarnos a tus necesidades comerciales.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative aspect-[9/16] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl mx-auto">
                            <Image
                                src="/formatos-venta.png"
                                alt="Formatos de Venta Blofis"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="space-y-6">
                            {formats.map((format, index) => (
                                <motion.div
                                    key={format.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#8BC34A]/50 transition-all hover:transform hover:scale-[1.02]"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-4xl">{format.icon}</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">{format.title}</h3>
                                            <p className="text-gray-400">{format.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mt-8"
                        >
                            <Link
                                href="#contacto"
                                className="inline-flex items-center gap-2 bg-[#8BC34A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#7CB342] transition-colors"
                            >
                                Solicitar Cotización
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
