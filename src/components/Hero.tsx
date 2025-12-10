"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-neutral-900/50 animate-pulse" />,
});

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <section className="min-h-screen relative flex flex-col justify-center pt-20 overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] gpu-accelerated">
            {/* Spline Background */}
            <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto isolate-render">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full"
                >
                    <Spline
                        scene="https://prod.spline.design/iF5Nclg4hihiUiUn/scene.splinecode"
                        className="w-full h-full"
                        onLoad={() => setIsLoaded(true)}
                    />
                </motion.div>
            </div>

            {/* Content Overlay */}
            <div className="container relative z-10 pointer-events-none">
                <h1 className="text-[12vw] leading-[0.9] font-bold tracking-tighter mix-blend-difference">
                    DESIGNER <br />
                    <span className="text-secondary">&</span> DEVELOPER
                </h1>
                <div className="mt-12 flex flex-col md:flex-row gap-8 text-lg md:text-xl font-medium max-w-2xl pointer-events-auto">
                    <p className="mix-blend-difference">
                        I craft digital experiences with a focus on motion, interaction, and minimal aesthetics.
                    </p>
                </div>
            </div>
        </section>
    );
}
