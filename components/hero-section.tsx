"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroWords = [
    "Community",
    "Network",
    "Collaboration",
    "Innovation",
    "Discovery",
];

const subtitle =
    "Join Anote's innovative AI ecosystem connecting professionals, learners, and opportunities across 14 cities.";

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % heroWords.length);
        }, 3000);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <section className="flex flex-col justify-center min-h-[65vh] py-40">
            <div className="container max-w-screen-md">
                <div className="mx-auto text-center">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6 leading-tight">
                        The Future of AI{" "}
                        <span className="inline-block relative min-w-[180px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={heroWords[current]}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-primary"
                                >
                                    {heroWords[current]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>
                    <p className="mx-auto max-w-xl text-lg text-black/70 mb-8 font-light leading-relaxed">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
                        <a
                            href="#features"
                            className="inline-block text-base font-light text-black text-center border-0 bg-transparent p-0 m-0 relative"
                            style={{ width: "fit-content", margin: "0 auto" }}
                        >
                            <span className="relative z-10 block">
                                Explore Features
                                <span
                                    className="block"
                                    style={{
                                        height: "1px",
                                        width: "100%",
                                        background: "#bbb",
                                        borderRadius: "1px",
                                        marginTop: "12px",
                                    }}
                                />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
