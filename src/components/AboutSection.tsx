"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="pt-10 pb-20 md:pt-20 md:pb-32 bg-neutral-900/50 backdrop-blur-xl border-y border-white/10 text-white rounded-[3rem] md:rounded-[5rem] relative z-30 mt-10 shadow-2xl">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter"
                        >
                            ABOUT
                        </motion.h2>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-8 text-lg md:text-xl leading-relaxed text-secondary">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="mb-8">
                                I am a multidisciplinary designer and developer based in San Francisco.
                                With a background in traditional graphic design and a passion for code,
                                I bridge the gap between design and engineering.
                            </p>
                            <p>
                                My work is driven by a desire to create meaningful interactions and
                                memorable digital experiences. I believe in the power of simplicity
                                and the importance of detail.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <h3 className="text-white font-bold mb-4">SERVICES</h3>
                            <ul className="grid grid-cols-2 gap-4 text-base">
                                <li>Art Direction</li>
                                <li>Web Design</li>
                                <li>Frontend Development</li>
                                <li>Brand Identity</li>
                                <li>Motion Design</li>
                                <li>Prototyping</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
