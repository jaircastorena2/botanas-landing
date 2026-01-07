"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function IngredientsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="ingredientes"
            ref={ref}
            className="py-24 md:py-32 bg-white"
        >
            <div className="container-luxury">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-6"
                        >
                            Ingredientes Selectos
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-8"
                        >
                            Del campo mexicano,
                            <br />
                            <span className="italic text-gray-600">a tu paladar.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6 text-gray-600 font-light leading-relaxed"
                        >
                            <p>
                                Seleccionamos cuidadosamente cada grano de maíz de agricultores
                                locales que comparten nuestra visión de calidad y sustentabilidad.
                            </p>
                            <p>
                                Nuestro proceso de inflado al vapor preserva los nutrientes
                                naturales, creando un snack ligero y crujiente sin necesidad de
                                freír.
                            </p>
                        </motion.div>

                        {/* Key Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-10 grid grid-cols-2 gap-6"
                        >
                            {[
                                { label: "Sin Freír", icon: "🍃" },
                                { label: "Sin Gluten", icon: "🌾" },
                                { label: "Sin Grasas Trans", icon: "💯" },
                                { label: "Sin Azúcar Añadida", icon: "🚫" },
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                                >
                                    <span className="text-xl">{feature.icon}</span>
                                    <span className="text-sm font-medium text-gray-700">
                                        {feature.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Macro Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square relative rounded-2xl overflow-hidden">
                            <Image
                                src="/productos/chips-vegetales.jpg"
                                alt="Chips de Vegetales - Textura crujiente"
                                fill
                                className="object-cover"
                            />

                            {/* Overlay text */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                                <p className="text-white font-serif text-xl">
                                    Textura crujiente perfecta
                                </p>
                                <p className="text-white/80 text-sm mt-1">
                                    Inflado al vapor • Sin aceite
                                </p>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border border-gray-200 rounded-2xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gray-100 rounded-2xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
