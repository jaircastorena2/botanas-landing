"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductShowcase() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-16 md:py-24 bg-[#2a3439] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container-luxury relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/botanas-collage.jpg"
                                alt="Colección de Botanas Blofis"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 bg-[#8BC34A] text-white px-6 py-4 rounded-2xl shadow-xl"
                        >
                            <p className="text-sm font-medium">Aprobado SEP</p>
                            <p className="text-2xl font-bold">100% Natural</p>
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white"
                    >
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                            Variedad de <span className="text-[#8BC34A]">Sabores</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Descubre nuestra amplia gama de botanas saludables. Desde maicitos inflados
                            al vapor hasta chips de vegetales 100% naturales.
                        </p>

                        {/* Product list */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                                <span className="text-2xl">🌽</span>
                                <div>
                                    <h4 className="font-medium text-white">Maicitos Inflados al Vapor</h4>
                                    <p className="text-sm text-gray-400">6 sabores disponibles</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                                <span className="text-2xl">🍪</span>
                                <div>
                                    <h4 className="font-medium text-white">Obleas de Amaranto</h4>
                                    <p className="text-sm text-gray-400">Sin azúcar, con stevia</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                                <span className="text-2xl">🥕</span>
                                <div>
                                    <h4 className="font-medium text-white">Chips de Vegetales</h4>
                                    <p className="text-sm text-gray-400">Camote y jícama, alto en fibra</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                                <span className="text-2xl">🥜</span>
                                <div>
                                    <h4 className="font-medium text-white">Chicharrón de Garbanzo</h4>
                                    <p className="text-sm text-gray-400">Alto en proteína, horneado</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/productos"
                            className="inline-flex items-center gap-2 bg-[#8BC34A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#7CB342] transition-colors"
                        >
                            Ver Catálogo Completo
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
