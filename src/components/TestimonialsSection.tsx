"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "María González",
        role: "Dueña de tienda naturista",
        location: "Guadalajara, Jalisco",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "Los Maicitos Blofis son los favoritos de mis clientes. Desde que los tengo en mi tienda, se han convertido en el producto más vendido. ¡La calidad es inigualable!",
        productHighlight: "Maicitos Inflados",
    },
    {
        id: 2,
        name: "Carlos Ramírez",
        role: "Coach de nutrición",
        location: "CDMX, México",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "Recomiendo Blofis a todos mis clientes que buscan snacks saludables. Sin aceites, sin freír y con un sabor increíble. ¡Son perfectos para cualquier plan alimenticio!",
        productHighlight: "Obleas de Amaranto",
    },
    {
        id: 3,
        name: "Ana Martínez",
        role: "Mamá de 3 hijos",
        location: "Monterrey, NL",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "Por fin encontré snacks que puedo darle a mis hijos sin culpa. Les encantan los Chips de Vegetales y yo estoy tranquila sabiendo que son 100% naturales.",
        productHighlight: "Chips de Vegetales",
    },
    {
        id: 4,
        name: "Roberto Sánchez",
        role: "Atleta fitness",
        location: "Querétaro, Qro",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "El Chicharrón de Garbanzo es mi snack post-entrenamiento. Alto en proteína, sin grasa saturada y delicioso. ¡Lo mejor que he probado!",
        productHighlight: "Chicharrón de Garbanzo",
    },
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-amber-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

export default function TestimonialsSection() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container-luxury">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-4">
                        Lo que dicen nuestros clientes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                        Miles de Familias Felices
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Descubre por qué somos la marca preferida de snacks saludables en México
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {[
                        { value: "10,000+", label: "Clientes Satisfechos" },
                        { value: "4.9/5", label: "Calificación Promedio" },
                        { value: "500+", label: "Reseñas Positivas" },
                        { value: "98%", label: "Volverían a Comprar" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-1">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Quote Icon */}
                            <svg className="w-10 h-10 text-amber-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            {/* Rating */}
                            <StarRating rating={testimonial.rating} />

                            {/* Text */}
                            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Product Highlight */}
                            <div className="mt-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                                {testimonial.productHighlight}
                            </div>

                            {/* Author */}
                            <div className="mt-6 flex items-center gap-4 pt-6 border-t border-gray-100">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-6">
                        ¿Ya probaste nuestros productos? Comparte tu experiencia
                    </p>
                    <a
                        href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        Dejar una Reseña
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
