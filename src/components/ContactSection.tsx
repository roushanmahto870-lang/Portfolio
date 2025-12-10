"use client";

import { useState } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-neutral-900/50 animate-pulse" />,
});

export default function ContactSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] mt-10 gpu-accelerated">
            {/* Spline Background */}
            <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto isolate-render">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full"
                >
                    <Spline
                        // Placeholder Spline scene. The original URL (https://prod.spline.design/tHrSJyDmWdy1DcjRGBGerTB3/scene.splinecode) caused a runtime error.
                        // Please replace with a valid .splinecode URL when available.
                        scene="https://prod.spline.design/iF5Nclg4hihiUiUn/scene.splinecode"
                        className="w-full h-full"
                        onLoad={() => setIsLoaded(true)}
                    />
                </motion.div>
            </div>

            <div className="container text-center relative z-10 pointer-events-none">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-[10vw] font-bold tracking-tighter leading-none mb-8 mix-blend-difference"
                >
                    LET&apos;S TALK
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="pointer-events-auto"
                >
                    <Link
                        href="mailto:hello@example.com"
                        className="inline-block text-2xl md:text-4xl border-b border-white/20 pb-2 hover:text-secondary hover:border-secondary transition-colors mix-blend-difference"
                    >
                        hello@example.com
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
