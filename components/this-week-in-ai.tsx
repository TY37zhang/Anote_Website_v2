"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

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
  ],
}

export default function ThisWeekInAI() {
  const [activeTab, setActiveTab] = useState("articles")

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="font-serif text-2xl mb-1">This Week in AI</h2>
        <p className="text-black/60 font-light text-sm">Curated content delivered to our members every week</p>
      </div>

      <Tabs defaultValue="articles" value={activeTab} onValueChange={setActiveTab}>
        <div className="px-6 pt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="articles" className="p-6 pt-4">
          <div className="space-y-4">
            {aiContent.articles.map((item, index) => (
              <ContentItem key={index} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="p-6 pt-4">
          <div className="space-y-4">
            {aiContent.tools.map((item, index) => (
              <ContentItem key={index} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="p-6 pt-4">
          <div className="space-y-4">
            {aiContent.events.map((item, index) => (
              <ContentItem key={index} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-6 border-t border-slate-100 text-center">
        <Link href="#" className="text-sm font-light inline-flex items-center hover:underline">
          View all curated content
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}

interface ContentItemProps {
  item: {
    title: string
    source: string
    date: string
    category: string
    isNew: boolean
    link: string
  }
}

function ContentItem({ item }: ContentItemProps) {
  return (
    <Link href={item.link} className="block group">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-black/50 font-light">{item.source}</span>
            <span className="text-xs text-black/50 font-light">•</span>
            <span className="text-xs text-black/50 font-light">{item.date}</span>
            {item.isNew && (
              <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wide">
                New
              </span>
            )}
          </div>
          <h3 className="font-medium group-hover:underline">{item.title}</h3>
        </div>
        <span className="bg-slate-100 text-black/70 text-xs px-2 py-1 rounded-full text-[10px] uppercase tracking-wide">
          {item.category}
        </span>
      </div>
    </Link>
  )
}
