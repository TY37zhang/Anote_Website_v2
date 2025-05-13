"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cities = [
    { name: "New York", image: "/cities/new-york.svg", members: 120 },
    { name: "San Francisco", image: "/cities/san-francisco.svg", members: 150 },
    { name: "Austin", image: "/cities/austin.svg", members: 95 },
    { name: "Seattle", image: "/cities/seattle.svg", members: 85 },
    { name: "Boston", image: "/cities/boston.svg", members: 75 },
    { name: "Chicago", image: "/cities/chicago.svg", members: 80 },
    { name: "Los Angeles", image: "/cities/los-angeles.svg", members: 110 },
    { name: "Denver", image: "/cities/denver.svg", members: 65 },
    { name: "Miami", image: "/cities/miami.svg", members: 70 },
    { name: "Washington DC", image: "/cities/washington-dc.svg", members: 90 },
    { name: "Atlanta", image: "/cities/atlanta.svg", members: 60 },
    { name: "Dallas", image: "/cities/dallas.svg", members: 55 },
    { name: "Portland", image: "/cities/portland.svg", members: 50 },
    { name: "Philadelphia", image: "/cities/philadelphia.svg", members: 45 },
];

export default function CityCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", checkScrollButtons);
            // Initial check
            checkScrollButtons();

            return () => {
                scrollContainer.removeEventListener(
                    "scroll",
                    checkScrollButtons
                );
            };
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative">
            <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 md:-left-6">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white shadow-md md:h-10 md:w-10"
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Scroll left</span>
                </Button>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {cities.map((city, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[280px] rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                    >
                        <div className="h-36 bg-slate-100 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                {/* Placeholder for city image */}
                                <img
                                    src={city.image || "/placeholder.svg"}
                                    alt={`${city.name} community`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">
                                {city.name}
                            </h3>
                            <p className="text-sm text-slate-500 mb-3">
                                {city.members} members
                            </p>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                            >
                                Join Community
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 md:-right-6">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white shadow-md md:h-10 md:w-10"
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Scroll right</span>
                </Button>
            </div>
        </div>
    );
}
