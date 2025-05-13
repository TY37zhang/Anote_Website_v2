"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

const testimonials = [
    {
        quote: "Anote's events connected me with AI professionals that led to my current role at a leading tech company. The community has been instrumental in my career growth.",
        name: "Sarah Johnson",
        title: "ML Engineer",
        avatar: "https://picsum.photos/seed/sarah/200/200",
    },
    {
        quote: "The learning ecosystem helped me transition from a beginner to building real AI projects in just 3 months. The structured learning paths were exactly what I needed.",
        name: "Michael Chen",
        title: "AI Developer",
        avatar: "https://picsum.photos/seed/michael/200/200",
    },
    {
        quote: "I found my co-founder through Anote's opportunity hub. Now we're building our own AI startup with the support of the community we met through the events.",
        name: "Priya Patel",
        title: "Startup Founder",
        avatar: "https://picsum.photos/seed/priya/200/200",
    },
];

export default function TestimonialSection() {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const next = () => {
        setCurrent((current + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
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
            className={`max-w-3xl mx-auto ${
                isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            } transition-all duration-1000 ease-out`}
        >
            <div className="relative overflow-hidden">
                <div className="mb-12">
                    <p className="text-xl text-black/80 font-light leading-relaxed text-center italic">
                        "{testimonials[current].quote}"
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
                        <Image
                            src={testimonials[current].avatar}
                            alt={testimonials[current].name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <h4 className="font-serif">
                            {testimonials[current].name}
                        </h4>
                        <p className="text-sm text-black/60 font-light">
                            {testimonials[current].title}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-[1px] transition-all ${
                            index === current
                                ? "bg-black w-12"
                                : "bg-black/30 w-6"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
