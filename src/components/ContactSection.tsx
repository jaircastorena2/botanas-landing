"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    const subjects = [
        { value: "general", label: "Consulta General" },
        { value: "mayoreo", label: "Compras de Mayoreo" },
        { value: "etiquetado", label: "Etiquetado Personalizado" },
        { value: "distribucion", label: "Distribución" },
        { value: "otro", label: "Otro" },
    ];

    return (
        <section id="contacto-form" className="py-20 md:py-28 bg-white">
            <div className="container-luxury">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
                            Contáctanos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                            ¿Tienes Preguntas?<br />
                            <span className="text-gray-500">Estamos para ayudarte</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            Ya sea que busques información sobre nuestros productos,
                            quieras hacer un pedido de mayoreo, o tengas interés en
                            distribución, nos encantaría escucharte.
                        </p>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <a
                                href="https://wa.me/5213328286378"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors group"
                            >
                                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                    <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">WhatsApp</p>
                                    <p className="text-gray-500">33 2828 6378</p>
                                </div>
                                <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Email</p>
                                    <p className="text-gray-500">contacto@blofis.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Ubicación</p>
                                    <p className="text-gray-500">Guadalajara, Jalisco, México</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">
                                    ¡Mensaje Enviado!
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setFormData({ name: "", email: "", phone: "", subject: "general", message: "" });
                                    }}
                                    className="text-green-600 font-medium hover:underline"
                                >
                                    Enviar otro mensaje
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 md:p-10">
                                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                                    Envíanos un mensaje
                                </h3>

                                <div className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nombre completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all bg-white"
                                            placeholder="Juan Pérez"
                                        />
                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all bg-white"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all bg-white"
                                                placeholder="33 1234 5678"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Asunto *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all bg-white appearance-none cursor-pointer"
                                        >
                                            {subjects.map((subject) => (
                                                <option key={subject.value} value={subject.value}>
                                                    {subject.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all bg-white resize-none"
                                            placeholder="¿En qué podemos ayudarte?"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Mensaje
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
