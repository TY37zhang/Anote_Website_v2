"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";

const successStories = [
    {
        name: "Alex Rivera",
        role: "AI Researcher",
        company: "TechLabs",
        image: "https://picsum.photos/seed/alex/800/600",
        story: "After joining Anote's AI community, I connected with researchers who helped me refine my computer vision algorithm. This collaboration led to a breakthrough that's now being implemented in autonomous vehicles.",
        achievement: "Published in top AI journal",
    },
    {
        name: "Priya Sharma",
        role: "Startup Founder",
        company: "NeuralWorks",
        image: "https://picsum.photos/seed/priya/800/600",
        story: "I met my co-founder at an Anote event in San Francisco. Six months later, we secured $2.5M in seed funding for our AI-powered healthcare solution that's now helping thousands of patients.",
        achievement: "Raised $2.5M in funding",
    },
    {
        name: "Marcus Johnson",
        role: "Career Switcher",
        company: "DataSphere",
        image: "https://picsum.photos/seed/marcus/800/600",
        story: "With no technical background, I was intimidated by AI. Anote's learning paths gave me the structure I needed. Within 8 months, I transitioned from marketing to a machine learning role, doubling my salary.",
        achievement: "Doubled salary in new career",
    },
];

export default function SuccessStoriesCarousel() {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const next = () => {
        setCurrent((current + 1) % successStories.length);
    };

    const prev = () => {
        setCurrent(
            (current - 1 + successStories.length) % successStories.length
        );
    };

    // Auto-advance the slider
    useEffect(() => {
        const timer = setTimeout(() => {
            next();
        }, 8000);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <div
            ref={ref}
            className={`${
                isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            } transition-all duration-1000 ease-out`}
        >
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-full min-h-[300px] bg-slate-100">
                        <Image
                            src={
                                successStories[current].image ||
                                "/placeholder.svg"
                            }
                            alt={successStories[current].name}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                            <div className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm mb-2">
                                {successStories[current].achievement}
                            </div>
                            <h3 className="font-serif text-xl">
                                {successStories[current].name}
                            </h3>
                            <p className="text-sm font-light">
                                {successStories[current].role} at{" "}
                                {successStories[current].company}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                        <div>
                            <h2 className="font-serif text-2xl mb-4">
                                Success Story
                            </h2>
                            <p className="text-black/70 font-light leading-relaxed mb-6">
                                "{successStories[current].story}"
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                {successStories.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrent(index)}
                                        className={`h-[2px] transition-all ${
                                            index === current
                                                ? "bg-black w-8"
                                                : "bg-black/30 w-4"
                                        }`}
                                        aria-label={`Go to success story ${
                                            index + 1
                                        }`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 rounded-full"
                                    onClick={prev}
                                    aria-label="Previous story"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 rounded-full"
                                    onClick={next}
                                    aria-label="Next story"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
