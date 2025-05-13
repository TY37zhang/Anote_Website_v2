"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";

const testimonials = [
    {
        quote: "Anote's events connected me with AI professionals that led to my current role at a leading tech company. The community has been instrumental in my career growth.",
        name: "Sarah Johnson",
        title: "ML Engineer",
        avatar: "/avatars/avatar-1.svg",
    },
    {
        quote: "The learning ecosystem helped me transition from a beginner to building real AI projects in just 3 months. The structured learning paths were exactly what I needed.",
        name: "Michael Chen",
        title: "AI Developer",
        avatar: "/avatars/avatar-2.svg",
    },
    {
        quote: "I found my co-founder through Anote's opportunity hub. Now we're building our own AI startup with the support of the community we met through the events.",
        name: "Priya Patel",
        title: "Startup Founder",
        avatar: "/avatars/avatar-3.svg",
    },
];

export default function TestimonialSlider() {
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
            <div className="relative overflow-hidden rounded-lg bg-white p-8 md:p-12 shadow-sm border border-slate-100">
                <div className="absolute top-6 left-6 text-slate-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                </div>

                <div className="relative z-10">
                    <div className="mb-8">
                        <p className="text-lg text-slate-600 font-light leading-relaxed">
                            {testimonials[current].quote}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-slate-50">
                            <Image
                                src={
                                    testimonials[current].avatar ||
                                    "/placeholder.svg"
                                }
                                alt={testimonials[current].name}
                                width={48}
                                height={48}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-medium">
                                {testimonials[current].name}
                            </h4>
                            <p className="text-sm text-slate-500 font-light">
                                {testimonials[current].title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 w-2 rounded-full transition-all ${
                            index === current
                                ? "bg-slate-800 w-6"
                                : "bg-slate-300"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>

            <div className="mt-6 flex justify-center gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={prev}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={next}
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
