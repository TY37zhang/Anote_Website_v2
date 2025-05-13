"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageSquare,
    Users,
    Calendar,
    Award,
    BookOpen,
    Briefcase,
} from "lucide-react";

// Sample community activities
const activities = [
    {
        id: 1,
        type: "event",
        city: "New York",
        content: "AI Ethics Workshop starting in 2 hours",
        time: "2 hours ago",
        icon: <Calendar className="h-4 w-4" />,
    },
    {
        id: 2,
        type: "discussion",
        city: "San Francisco",
        content: "Hot discussion on 'The future of LLMs' in the forum",
        time: "4 hours ago",
        icon: <MessageSquare className="h-4 w-4" />,
    },
    {
        id: 3,
        type: "member",
        city: "Austin",
        content: "Sarah J. just joined the community",
        time: "6 hours ago",
        icon: <Users className="h-4 w-4" />,
    },
    {
        id: 4,
        type: "achievement",
        city: "Seattle",
        content: "Michael L. completed the Advanced NLP learning path",
        time: "8 hours ago",
        icon: <Award className="h-4 w-4" />,
    },
    {
        id: 5,
        type: "resource",
        city: "Chicago",
        content: "New tutorial: 'Building RAG applications' added",
        time: "10 hours ago",
        icon: <BookOpen className="h-4 w-4" />,
    },
    {
        id: 6,
        type: "opportunity",
        city: "Boston",
        content: "New job posting: 'AI Research Scientist at TechCorp'",
        time: "12 hours ago",
        icon: <Briefcase className="h-4 w-4" />,
    },
];

export default function CommunityFeed() {
    const [visibleActivities, setVisibleActivities] = useState(
        activities.slice(0, 4)
    );
    const [currentIndex, setCurrentIndex] = useState(0);

    // Rotate through activities
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % activities.length;
                const startIndex = nextIndex;
                const endIndex = (startIndex + 4) % activities.length;

                if (endIndex > startIndex) {
                    setVisibleActivities(
                        activities.slice(startIndex, startIndex + 4)
                    );
                } else {
                    setVisibleActivities([
                        ...activities.slice(startIndex),
                        ...activities.slice(0, endIndex),
                    ]);
                }

                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
            <div className="p-6 border-b border-slate-100">
                <h2 className="font-serif text-2xl mb-1">
                    Live Community Feed
                </h2>
                <p className="text-black/60 font-light text-sm">
                    Recent activities across our 14 city hubs
                </p>
            </div>

            <div className="p-6">
                <div className="space-y-4 min-h-[320px]">
                    <AnimatePresence mode="popLayout">
                        {visibleActivities.map((activity) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                                <div
                                    className={`
                  mt-1 flex h-8 w-8 items-center justify-center rounded-full
                  ${
                      activity.type === "event"
                          ? "bg-blue-100 text-blue-600"
                          : ""
                  }
                  ${
                      activity.type === "discussion"
                          ? "bg-purple-100 text-purple-600"
                          : ""
                  }
                  ${
                      activity.type === "member"
                          ? "bg-green-100 text-green-600"
                          : ""
                  }
                  ${
                      activity.type === "achievement"
                          ? "bg-yellow-100 text-yellow-600"
                          : ""
                  }
                  ${
                      activity.type === "resource"
                          ? "bg-red-100 text-red-600"
                          : ""
                  }
                  ${
                      activity.type === "opportunity"
                          ? "bg-indigo-100 text-indigo-600"
                          : ""
                  }
                `}
                                >
                                    {activity.icon}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium text-sm">
                                            {activity.city}
                                        </span>
                                        <span className="text-xs text-black/50">
                                            •
                                        </span>
                                        <span className="text-xs text-black/50">
                                            {activity.time}
                                        </span>
                                    </div>
                                    <p className="text-sm text-black/70">
                                        {activity.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex justify-center">
                <div className="flex gap-1">
                    {activities.map((_, index) => (
                        <button
                            key={index}
                            className={`h-1 rounded-full transition-all ${
                                index >= currentIndex &&
                                index < currentIndex + 4
                                    ? "bg-black w-4"
                                    : "bg-black/20 w-2"
                            }`}
                            aria-label={`Activity set ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
