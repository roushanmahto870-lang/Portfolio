"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { useLenis } from "lenis/react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const lenis = useLenis();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href === "/") {
            lenis?.scrollTo(0);
        } else {
            const target = document.querySelector(href) as HTMLElement;
            if (target) {
                lenis?.scrollTo(target);
            }
        }
        if (isOpen) setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 py-6 pointer-events-none">
            <div className="container flex justify-between items-center relative z-50">
                <Link
                    href="/"
                    onClick={(e) => handleLinkClick(e, "/")}
                    className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity mix-blend-difference text-white pointer-events-auto"
                >
                    SETH LUKIN
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 shadow-lg pointer-events-auto">
                    <Link href="#work" onClick={(e) => handleLinkClick(e, "#work")} className="hover:text-secondary transition-colors text-white">
                        WORK
                    </Link>
                    <Link href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-secondary transition-colors text-white">
                        ABOUT
                    </Link>
                    <Link href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-secondary transition-colors text-white">
                        CONTACT
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden pointer-events-auto text-white mix-blend-difference p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-neutral-950 text-white flex flex-col justify-center items-center pointer-events-auto md:hidden"
                    >
                        <nav className="flex flex-col gap-8 text-4xl font-bold tracking-tighter text-center">
                            <Link href="#work" onClick={(e) => handleLinkClick(e, "#work")} className="hover:text-secondary transition-colors">
                                WORK
                            </Link>
                            <Link href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-secondary transition-colors">
                                ABOUT
                            </Link>
                            <Link href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-secondary transition-colors">
                                CONTACT
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
}
