"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

const navLinks = [
    { href: "/", label: "Inicio", isAnchor: false },
    { href: "/productos", label: "Productos", isAnchor: false },
    { href: "categorias", label: "Categorías", isAnchor: true },
    { href: "contacto", label: "Contacto", isAnchor: true },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const { openCart, getItemCount, isHydrated } = useCartStore();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
        if (link.isAnchor) {
            e.preventDefault();
            // Si no estamos en la página principal, navegar primero
            if (pathname !== "/") {
                router.push("/");
                // Esperar a que cargue la página y luego hacer scroll
                setTimeout(() => {
                    const element = document.getElementById(link.href);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 300);
            } else {
                // Ya estamos en la página principal, solo hacer scroll
                const element = document.getElementById(link.href);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    };

    const itemCount = mounted && isHydrated ? getItemCount() : 0;

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
                    : "bg-transparent"
                    }`}
            >
                <nav className="container-luxury">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/logo-blofis.png"
                                alt="Blofis Logo"
                                width={48}
                                height={48}
                                className="w-12 h-12 object-contain"
                            />
                            <span className="font-serif text-2xl font-medium tracking-tight text-gray-900">
                                Blofis
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-10">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                >
                                    <Link
                                        href={link.isAnchor ? "/" : link.href}
                                        onClick={(e) => handleNavClick(e, link)}
                                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 tracking-wide uppercase"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Cart & CTA */}
                        <div className="flex items-center gap-4">
                            {/* Cart Icon */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                onClick={openCart}
                                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Abrir carrito"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                                {/* Cart Counter Badge */}
                                {itemCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1 -right-1 w-5 h-5 bg-gray-900 text-white text-xs font-medium rounded-full flex items-center justify-center"
                                    >
                                        {itemCount > 99 ? "99+" : itemCount}
                                    </motion.span>
                                )}
                            </motion.button>

                            {/* CTA Button - Desktop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className="hidden md:block"
                            >
                                <Link href="/productos" className="btn-outline text-xs">
                                    Comprar
                                </Link>
                            </motion.div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2"
                                aria-label="Toggle menu"
                            >
                                <div className="w-6 h-5 relative flex flex-col justify-between">
                                    <span
                                        className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                            }`}
                                    />
                                    <span
                                        className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                            }`}
                                    />
                                    <span
                                        className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white pt-24 md:hidden"
                    >
                        <nav className="container-luxury">
                            <ul className="flex flex-col gap-6">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.05 * index }}
                                    >
                                        <Link
                                            href={link.isAnchor ? "/" : link.href}
                                            onClick={(e) => {
                                                setIsMobileMenuOpen(false);
                                                handleNavClick(e, link);
                                            }}
                                            className="text-2xl font-serif text-gray-900"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-10 space-y-4"
                            >
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        openCart();
                                    }}
                                    className="btn-outline w-full text-center flex items-center justify-center gap-2"
                                >
                                    <span>Ver Carrito</span>
                                    {itemCount > 0 && (
                                        <span className="bg-gray-900 text-white text-xs px-2 py-0.5 rounded-full">
                                            {itemCount}
                                        </span>
                                    )}
                                </button>
                                <Link
                                    href="/productos"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-solid w-full text-center block"
                                >
                                    Comprar Ahora
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
