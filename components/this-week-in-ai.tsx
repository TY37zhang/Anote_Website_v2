"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const aiContent = {
    articles: [
        {
            title: "The Rise of Multimodal AI Models",
            source: "AI Research Weekly",
            date: "May 10, 2025",
            category: "Research",
            isNew: true,
            link: "#",
        },
        {
            title: "Practical Applications of Reinforcement Learning",
            source: "Machine Learning Insights",
            date: "May 8, 2025",
            category: "Tutorial",
            isNew: false,
            link: "#",
        },
        {
            title: "Ethics in Generative AI: Current Challenges",
            source: "AI Ethics Journal",
            date: "May 7, 2025",
            category: "Ethics",
            isNew: false,
            link: "#",
        },
        {
            title: "How LLMs are Changing Search",
            source: "DeepLearning Times",
            date: "May 6, 2025",
            category: "Trends",
            isNew: true,
            link: "#",
        },
        {
            title: "Prompt Engineering: Best Practices",
            source: "Prompt Weekly",
            date: "May 5, 2025",
            category: "Guide",
            isNew: false,
            link: "#",
        },
        {
            title: "AI in Healthcare: 2025 Outlook",
            source: "MedAI Review",
            date: "May 4, 2025",
            category: "Industry",
            isNew: false,
            link: "#",
        },
        {
            title: "Building Robust AI Pipelines",
            source: "ML Ops Digest",
            date: "May 3, 2025",
            category: "Engineering",
            isNew: false,
            link: "#",
        },
        {
            title: "AI Regulation: What's Next?",
            source: "Policy & AI",
            date: "May 2, 2025",
            category: "Policy",
            isNew: false,
            link: "#",
        },
    ],
    tools: [
        {
            title: "Hugging Face Releases New Text-to-Video Model",
            source: "Hugging Face",
            date: "May 11, 2025",
            category: "Tool",
            isNew: true,
            link: "#",
        },
        {
            title: "LangChain Introduces Agent Memory Framework",
            source: "LangChain Blog",
            date: "May 9, 2025",
            category: "Framework",
            isNew: true,
            link: "#",
        },
        {
            title: "OpenAI Updates GPT-5 with Enhanced Reasoning",
            source: "OpenAI",
            date: "May 6, 2025",
            category: "Model",
            isNew: false,
            link: "#",
        },
        {
            title: "Weights & Biases Launches New Experiment Tracker",
            source: "W&B Blog",
            date: "May 5, 2025",
            category: "Tool",
            isNew: false,
            link: "#",
        },
        {
            title: "Cohere Unveils Multilingual Embeddings API",
            source: "Cohere News",
            date: "May 4, 2025",
            category: "API",
            isNew: false,
            link: "#",
        },
        {
            title: "Google Vertex AI Adds AutoML Vision",
            source: "Google Cloud Blog",
            date: "May 3, 2025",
            category: "Platform",
            isNew: false,
            link: "#",
        },
        {
            title: "Anthropic Releases Claude 3",
            source: "Anthropic",
            date: "May 2, 2025",
            category: "Model",
            isNew: false,
            link: "#",
        },
        {
            title: "Replicate Launches Free Model Hosting",
            source: "Replicate Blog",
            date: "May 1, 2025",
            category: "Hosting",
            isNew: false,
            link: "#",
        },
    ],
    events: [
        {
            title: "AI Summit 2025: Future of Work",
            source: "Global AI Initiative",
            date: "May 20-22, 2025",
            category: "Conference",
            isNew: true,
            link: "#",
        },
        {
            title: "Practical Machine Learning Workshop",
            source: "AI Learning Hub",
            date: "May 15, 2025",
            category: "Workshop",
            isNew: false,
            link: "#",
        },
        {
            title: "Ethics in AI: Panel Discussion",
            source: "Tech Ethics Forum",
            date: "May 13, 2025",
            category: "Panel",
            isNew: false,
            link: "#",
        },
        {
            title: "AI for Good Hackathon",
            source: "AI4Good",
            date: "May 18, 2025",
            category: "Hackathon",
            isNew: true,
            link: "#",
        },
        {
            title: "Women in AI Networking Night",
            source: "WiAI",
            date: "May 17, 2025",
            category: "Networking",
            isNew: false,
            link: "#",
        },
        {
            title: "LLM Bootcamp: Build Your Own Chatbot",
            source: "ML Academy",
            date: "May 16, 2025",
            category: "Bootcamp",
            isNew: false,
            link: "#",
        },
        {
            title: "AI Startups Demo Day",
            source: "Startup Hub",
            date: "May 14, 2025",
            category: "Demo",
            isNew: false,
            link: "#",
        },
        {
            title: "Responsible AI Roundtable",
            source: "AI Policy Group",
            date: "May 12, 2025",
            category: "Roundtable",
            isNew: false,
            link: "#",
        },
    ],
};

export default function ThisWeekInAI() {
    const [activeTab, setActiveTab] = useState("articles");

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
            <div className="p-6 border-b border-slate-100">
                <h2 className="font-serif text-2xl mb-1">This Week in AI</h2>
                <p className="text-black/60 font-light text-sm">
                    Curated content delivered to our members every week
                </p>
            </div>

            <div className="flex-1 flex flex-col">
                <Tabs
                    defaultValue="articles"
                    value={activeTab}
                    onValueChange={setActiveTab}
                >
                    <div className="px-6 pt-4">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="articles">Articles</TabsTrigger>
                            <TabsTrigger value="tools">Tools</TabsTrigger>
                            <TabsTrigger value="events">Events</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="articles" className="p-6 pt-4">
                        <div className="space-y-4">
                            {aiContent.articles
                                .slice(0, 4)
                                .map((item, index) => (
                                    <ContentItem key={index} item={item} />
                                ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="tools" className="p-6 pt-4">
                        <div className="space-y-4">
                            {aiContent.tools.slice(0, 4).map((item, index) => (
                                <ContentItem key={index} item={item} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="events" className="p-6 pt-4">
                        <div className="space-y-4">
                            {aiContent.events.slice(0, 4).map((item, index) => (
                                <ContentItem key={index} item={item} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="p-6 border-t border-slate-100 text-center">
                <Link
                    href="#"
                    className="text-sm font-light inline-flex items-center hover:underline"
                >
                    View all curated content
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
            </div>
        </div>
    );
}

interface ContentItemProps {
    item: {
        title: string;
        source: string;
        date: string;
        category: string;
        isNew: boolean;
        link: string;
    };
}

function ContentItem({ item }: ContentItemProps) {
    return (
        <Link href={item.link} className="block group">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-black/50 font-light">
                            {item.source}
                        </span>
                        <span className="text-xs text-black/50 font-light">
                            •
                        </span>
                        <span className="text-xs text-black/50 font-light">
                            {item.date}
                        </span>
                        {item.isNew && (
                            <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wide">
                                New
                            </span>
                        )}
                    </div>
                    <h3 className="font-medium group-hover:underline">
                        {item.title}
                    </h3>
                </div>
                <span className="bg-slate-100 text-black/70 text-xs px-2 py-1 rounded-full text-[10px] uppercase tracking-wide">
                    {item.category}
                </span>
            </div>
        </Link>
    );
}
