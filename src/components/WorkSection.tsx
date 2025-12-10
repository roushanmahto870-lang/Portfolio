"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Project Alpha",
        category: "Design & Development",
        year: "2024",
        image: "/placeholder-1.jpg",
    },
    {
        id: 2,
        title: "Studio Beta",
        category: "Branding",
        year: "2023",
        image: "/placeholder-2.jpg",
    },
    {
        id: 3,
        title: "Gamma App",
        category: "Mobile App",
        year: "2023",
        image: "/placeholder-3.jpg",
    },
    {
        id: 4,
        title: "Delta Web",
        category: "Web Design",
        year: "2022",
        image: "/placeholder-4.jpg",
    },
];

export default function WorkSection() {
    return (
        <section id="work" className="py-20 md:py-32 bg-neutral-900/50 backdrop-blur-xl border-y border-white/10 rounded-[3rem] md:rounded-[5rem] relative z-20 shadow-2xl">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SELECTED WORK</h2>
                    <span className="hidden md:block text-secondary text-lg">(04)</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={`/work/${project.id}`}
                                className="group block"
                            >
                                <div className="aspect-[4/3] bg-surface rounded-lg overflow-hidden mb-6 relative">
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-500 ease-out" />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                        <p className="text-secondary">{project.category}</p>
                                    </div>
                                    <span className="text-secondary">{project.year}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
