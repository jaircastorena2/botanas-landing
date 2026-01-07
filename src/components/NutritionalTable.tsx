"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Datos nutricionales reales de Maicitos Ranchero (de la imagen)
const nutritionalData = [
    { label: "Contenido Energético", per100g: "211.5 kcal", perPortion: "105.7 kcal", vd: "—" },
    { label: "Proteínas", per100g: "7.7 g", perPortion: "3.8 g", vd: "8%" },
    { label: "Grasas Totales", per100g: "11.6 g", perPortion: "5.8 g", vd: "9%" },
    { label: "Grasas Saturadas", per100g: "1.7 g", perPortion: "0.8 g", vd: "4%" },
    { label: "Grasas Trans", per100g: "0.0 mg", perPortion: "0.0 mg", vd: "0%" },
    { label: "Hidratos de Carbono", per100g: "72.1 g", perPortion: "36.0 g", vd: "12%" },
    { label: "Azúcares", per100g: "1.7 g", perPortion: "0.8 g", vd: "—" },
    { label: "Azúcares Añadidos", per100g: "1.6 g", perPortion: "0.8 g", vd: "2%" },
    { label: "Fibra Dietética", per100g: "5.2 g", perPortion: "2.6 g", vd: "10%" },
    { label: "Sodio", per100g: "151.0 mg", perPortion: "75.5 mg", vd: "3%" },
];

export default function NutritionalTable() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="nutricion" ref={ref} className="py-24 md:py-32 bg-white">
            <div className="container-luxury">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-4">
                        Transparencia Total
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900">
                        Información Nutricional
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Nada que esconder. Conoce exactamente qué estás consumiendo.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Nutritional Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="font-serif text-2xl text-gray-900 mb-6">
                            Maicitos Inflados al Vapor
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Información nutricional basada en la NOM-051-SCFI/SSA1-2010.
                            Porciones por envase: 0.5 (Contenido neto 50g).
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { value: "0g", label: "Grasas Trans", icon: "✓" },
                                { value: "105 kcal", label: "Por Porción", icon: "⚡" },
                                { value: "3.8g", label: "Proteína", icon: "💪" },
                                { value: "2.6g", label: "Fibra", icon: "🌾" },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="bg-gray-50 rounded-xl p-6 text-center"
                                >
                                    <p className="text-2xl mb-1">{item.icon}</p>
                                    <p className="font-serif text-2xl text-gray-900">
                                        {item.value}
                                    </p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Nutrition Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/productos/nada-esconder.png"
                                alt="Nada que esconder - Maicitos Blofis"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Nutritional Table */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                            <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">
                                Declaración Nutrimental
                            </h4>
                            <p className="text-xs text-gray-500 mb-6">
                                Contenido Energético por envase: 211.5 kcal (891.7 kJ)
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Nutriente
                                            </th>
                                            <th className="text-right py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                100g
                                            </th>
                                            <th className="text-right py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Porción (50g)
                                            </th>
                                            <th className="text-right py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                                % VD*
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {nutritionalData.map((row, index) => (
                                            <motion.tr
                                                key={row.label}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.5 + index * 0.05,
                                                }}
                                                className="border-b border-gray-100 last:border-0"
                                            >
                                                <td className="py-3 text-sm font-medium text-gray-900">
                                                    {row.label}
                                                </td>
                                                <td className="py-3 text-sm text-right text-gray-600">
                                                    {row.per100g}
                                                </td>
                                                <td className="py-3 text-sm text-right text-gray-600">
                                                    {row.perPortion}
                                                </td>
                                                <td className="py-3 text-sm text-right text-gray-400 hidden sm:table-cell">
                                                    {row.vd}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-xs text-gray-400 mt-6">
                                * % Valor Diario basado en una dieta de 2,000 kcal.
                                Información acorde a la NOM-051-SCFI/SSA1-2010
                            </p>
                        </div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="mt-8 flex flex-wrap justify-center gap-6"
                        >
                            {[
                                "Sin Freír",
                                "Libre de Gluten",
                                "Inflado al Vapor",
                                "Sin Grasas Trans",
                            ].map((cert) => (
                                <span
                                    key={cert}
                                    className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    {cert}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
