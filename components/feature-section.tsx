"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

interface FeatureSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

export default function FeatureSection({
    title,
    description,
    imageSrc,
    imageAlt,
    reverse = false,
}: FeatureSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <div
            ref={ref}
            className={`grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center mb-32 ${
                isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            } transition-all duration-1000 ease-out`}
        >
            <div className={reverse ? "lg:order-2" : ""}>
                <h3 className="font-serif text-2xl mb-6">{title}</h3>
                <p className="text-black/70 font-light leading-relaxed">
                    {description}
                </p>
            </div>
            <div className={reverse ? "lg:order-1" : ""}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
