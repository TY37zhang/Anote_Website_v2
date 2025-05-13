import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FeatureDetailProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    features: string[];
    ctaText: string;
    ctaLink: string;
    icon: ReactNode;
}

export default function FeatureDetailSection({
    title,
    description,
    imageSrc,
    imageAlt,
    features,
    ctaText,
    ctaLink,
    icon,
}: FeatureDetailProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-64 w-full">
                <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm mb-3">
                            {icon}
                        </div>
                        <h3 className="font-serif text-2xl mb-2">{title}</h3>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <p className="text-black/70 font-light mb-6">{description}</p>
                <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-black/40 mb-3">
                        Key Features
                    </h4>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-2 mt-1 text-black/30">
                                    •
                                </span>
                                <span className="text-sm text-black/70 font-light">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button asChild className="w-full">
                    <Link href={ctaLink}>{ctaText}</Link>
                </Button>
            </div>
        </div>
    );
}
