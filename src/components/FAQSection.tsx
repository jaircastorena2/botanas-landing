"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "¿Cuál es el pedido mínimo para mayoreo?",
        answer: "Para pedidos de mayoreo, el mínimo es de $2,000 MXN. Esto te permite acceder a precios preferenciales y envío gratis a cualquier parte de México. Para pedidos mayores a $10,000 MXN ofrecemos descuentos adicionales.",
        category: "mayoreo",
    },
    {
        question: "¿Los productos son aptos para diabéticos?",
        answer: "Sí, nuestros productos son ideales para personas con diabetes. No contienen azúcares añadidos, son bajos en carbohidratos y tienen un índice glucémico bajo. Las Obleas de Amaranto y el Chicharrón de Garbanzo son especialmente recomendados.",
        category: "producto",
    },
    {
        question: "¿Cuánto tiempo tardan los envíos?",
        answer: "Los envíos dentro de Guadalajara son de 1-2 días hábiles. Para el resto de México, el tiempo estimado es de 3-5 días hábiles. Trabajamos con paqueterías de confianza y todos los pedidos incluyen número de rastreo.",
        category: "envios",
    },
    {
        question: "¿Puedo vender sus productos con mi propia marca?",
        answer: "¡Por supuesto! Ofrecemos servicio de etiquetado personalizado (marca blanca). Podemos incluir tu logo y diseño en los empaques. El pedido mínimo para etiquetado personalizado es de 100 unidades por presentación.",
        category: "mayoreo",
    },
    {
        question: "¿Los snacks contienen gluten?",
        answer: "No, todos nuestros productos son libres de gluten. Esto incluye los Maicitos Inflados, Obleas de Amaranto, Chips de Vegetales y Chicharrón de Garbanzo. Son aptos para personas con enfermedad celíaca o sensibilidad al gluten.",
        category: "producto",
    },
    {
        question: "¿Cuál es la vida de anaquel de los productos?",
        answer: "Nuestros productos tienen una vida de anaquel de 6 meses a partir de la fecha de elaboración. Recomendamos almacenarlos en un lugar fresco y seco, alejados de la luz solar directa para mantener su frescura.",
        category: "producto",
    },
    {
        question: "¿Hacen envíos internacionales?",
        answer: "Actualmente realizamos envíos solo dentro de México. Estamos trabajando para expandir nuestras operaciones a Estados Unidos próximamente. Si estás interesado, contáctanos para agregarte a nuestra lista de espera.",
        category: "envios",
    },
    {
        question: "¿Cómo se fabrican los productos?",
        answer: "Nuestros snacks son inflados al vapor, un proceso que no utiliza aceites ni frituras. Esto resulta en productos más saludables, con menos calorías y cero grasas trans. Todo el proceso se realiza en instalaciones certificadas.",
        category: "producto",
    },
];

const categories = [
    { id: "todos", label: "Todos" },
    { id: "producto", label: "Productos" },
    { id: "mayoreo", label: "Mayoreo" },
    { id: "envios", label: "Envíos" },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState("todos");

    const filteredFaqs = activeCategory === "todos"
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    return (
        <section className="py-20 md:py-28 bg-gray-50">
            <div className="container-luxury">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium mb-4 shadow-sm">
                        Preguntas Frecuentes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                        ¿Tienes Dudas?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveCategory(category.id);
                                setActiveIndex(null);
                            }}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                                ? "bg-gray-900 text-white"
                                : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {filteredFaqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-medium text-gray-900 pr-4">
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex-shrink-0"
                                        >
                                            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
                        ¿No encontraste lo que buscabas?
                    </p>
                    <a
                        href="#contacto-form"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        Contáctanos directamente
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
