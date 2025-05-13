import Link from "next/link";
import { Calendar, BookOpen, Users, Briefcase } from "lucide-react";
import FeatureDetailSection from "@/components/feature-detail-section";
import CitySection from "@/components/city-section";
import TestimonialSection from "@/components/testimonial-section";
import NewsletterSection from "@/components/newsletter-section";
import DropdownMenu from "@/components/dropdown-menu";
import SuccessStoriesCarousel from "@/components/success-stories-carousel";
import ThisWeekInAI from "@/components/this-week-in-ai";
import CommunityFeed from "@/components/community-feed";
import AiPathQuiz from "@/components/ai-path-quiz";
import HeroSection from "@/components/hero-section";

const heroQuotes = [
    {
        title: "The Future of Knowledge Network",
        subtitle:
            "Join Anote's innovative AI ecosystem connecting professionals, learners, and opportunities across 14 cities.",
    },
    {
        title: "The Future of AI Community",
        subtitle:
            "Empowering you to learn, connect, and grow in the world of artificial intelligence.",
    },
    {
        title: "Where AI Minds Meet",
        subtitle:
            "Collaborate, innovate, and shape the future with Anote's vibrant AI community.",
    },
];

export default function Home() {
    const menuItems = [
        { label: "Events", href: "#events" },
        { label: "Content", href: "#content" },
        { label: "Learning", href: "#learning" },
        { label: "Opportunities", href: "#opportunities" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-[#f8f8f8]">
            {/* Navigation - Reduced height */}
            <header className="fixed top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md">
                <div className="container flex h-14 items-center justify-between">
                    <nav className="flex items-center gap-8">
                        <Link
                            href="#about"
                            className="text-sm font-light tracking-wide hover:text-black/70 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-light tracking-wide hover:text-black/70 transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <Link
                            href="/"
                            className="font-serif text-xl tracking-wide"
                        >
                            anote
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <DropdownMenu items={menuItems} />
                    </div>
                </div>
            </header>

            <main className="flex-1 pt-14">
                {/* Hero Section */}
                <HeroSection />

                {/* Stats Section */}
                <section className="py-8 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <p className="font-serif text-3xl mb-1">
                                    1,000+
                                </p>
                                <p className="text-sm text-black/60 font-light">
                                    Community Members
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="font-serif text-3xl mb-1">14</p>
                                <p className="text-sm text-black/60 font-light">
                                    City Hubs
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="font-serif text-3xl mb-1">100+</p>
                                <p className="text-sm text-black/60 font-light">
                                    AI Events
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="font-serif text-3xl mb-1">500+</p>
                                <p className="text-sm text-black/60 font-light">
                                    Learning Resources
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Sections */}
                <section id="features" className="py-16">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl mb-4">
                                Key Features
                            </h2>
                            <p className="text-black/70 max-w-2xl mx-auto font-light">
                                Our platform combines cutting-edge technology
                                with community-focused design to create a
                                seamless AI learning and networking experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FeatureDetailSection
                                id="events"
                                title="Multi-City Event Platform"
                                description="Connect with AI professionals through in-person and virtual events across our 14 city hubs."
                                imageSrc="https://picsum.photos/seed/events/800/400"
                                imageAlt="Multi-City Event Platform"
                                features={[
                                    "Comprehensive event calendar with filtering options",
                                    "Automated post-event engagement and follow-ups",
                                    "Speaker and venue relationship management",
                                    "Attendance tracking and analytics",
                                ]}
                                ctaText="Explore Events"
                                ctaLink="#events"
                                icon={
                                    <Calendar className="h-5 w-5 text-white" />
                                }
                            />

                            <FeatureDetailSection
                                id="content"
                                title="AI-Powered Content Curation"
                                description="Stay updated with personalized, high-quality AI content delivered directly to you."
                                imageSrc="https://picsum.photos/seed/content/800/400"
                                imageAlt="AI-Powered Content Curation"
                                features={[
                                    "Weekly curated newsletters with the latest AI developments",
                                    "Personalized content recommendations based on interests",
                                    "Searchable resource library with filtering options",
                                    "Content contribution platform for community members",
                                ]}
                                ctaText="Browse Content"
                                ctaLink="#content"
                                icon={
                                    <BookOpen className="h-5 w-5 text-white" />
                                }
                            />

                            <FeatureDetailSection
                                id="learning"
                                title="Community Learning Ecosystem"
                                description="Progress through structured learning paths with project-based modules tailored to your goals."
                                imageSrc="https://picsum.photos/seed/learning/800/400"
                                imageAlt="Community Learning Ecosystem"
                                features={[
                                    "Personalized learning paths based on skill level and interests",
                                    "Project-based modules with real-world applications",
                                    "Peer learning circles for collaborative growth",
                                    "Expert-led workshops and masterclasses",
                                ]}
                                ctaText="Start Learning"
                                ctaLink="#learning"
                                icon={<Users className="h-5 w-5 text-white" />}
                            />

                            <FeatureDetailSection
                                id="opportunities"
                                title="AI Opportunity Hub"
                                description="Connect with relevant AI jobs, partnerships, and collaboration projects."
                                imageSrc="https://picsum.photos/seed/opportunities/800/400"
                                imageAlt="AI Opportunity Hub"
                                features={[
                                    "Curated job board with AI-specific opportunities",
                                    "Partnership matching for startups and researchers",
                                    "Project collaboration platform for community members",
                                    "Mentorship connections with industry experts",
                                ]}
                                ctaText="Find Opportunities"
                                ctaLink="#opportunities"
                                icon={
                                    <Briefcase className="h-5 w-5 text-white" />
                                }
                            />
                        </div>
                    </div>
                </section>

                {/* Success Stories Section */}
                <section id="success-stories" className="py-16 bg-white">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl mb-4">
                                Success Stories
                            </h2>
                            <p className="text-black/70 max-w-2xl mx-auto font-light">
                                Hear from community members who have transformed
                                their careers and projects through Anote.
                            </p>
                        </div>

                        <SuccessStoriesCarousel />
                    </div>
                </section>

                {/* This Week in AI & Community Feed */}
                <section className="py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <ThisWeekInAI />
                            </div>
                            <div>
                                <CommunityFeed />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Find Your AI Path Quiz */}
                <section id="ai-path" className="py-16 bg-white">
                    <div className="container max-w-3xl">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl mb-4">
                                Find Your AI Path
                            </h2>
                            <p className="text-black/70 max-w-2xl mx-auto font-light">
                                Not sure where to start? Take our quick quiz to
                                get a personalized learning journey.
                            </p>
                        </div>

                        <AiPathQuiz />
                    </div>
                </section>

                {/* Cities Section */}
                <section id="cities" className="py-16">
                    <div className="container max-w-screen-lg">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl mb-4">
                                Expanding Across 14 Cities
                            </h2>
                            <p className="text-black/70 max-w-2xl mx-auto font-light">
                                Join our thriving AI communities in major tech
                                hubs across the country, with more locations
                                coming soon.
                            </p>
                        </div>

                        <CitySection />
                    </div>
                </section>

                {/* Community Section */}
                <section id="community" className="py-16 bg-white">
                    <div className="container max-w-screen-lg">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl mb-4">
                                Join Our Community
                            </h2>
                            <p className="text-black/70 max-w-2xl mx-auto font-light">
                                Hear from our members about how Anote has
                                transformed their AI journey and career
                                opportunities.
                            </p>
                        </div>

                        <TestimonialSection />
                    </div>
                </section>

                {/* CTA Section */}
                <section id="join" className="py-16">
                    <div className="container max-w-screen-md">
                        <div className="mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="font-serif text-3xl mb-4">
                                    Ready to Grow with Us?
                                </h2>
                                <p className="text-black/70 mb-8 text-lg font-light">
                                    Join our community of 1,000+ AI enthusiasts
                                    and professionals. Scale your knowledge,
                                    network, and opportunities.
                                </p>
                            </div>

                            <NewsletterSection />
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-[#e6e6e6] py-16 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                        <div>
                            <div className="mb-6">
                                <span className="font-serif text-lg tracking-wide">
                                    anote
                                </span>
                            </div>
                            <p className="text-sm text-black/60 mb-6 font-light">
                                Building the future of AI communities across the
                                nation.
                            </p>
                            <div className="flex gap-6">
                                <a
                                    href="#"
                                    className="text-black/40 hover:text-black transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-black/40 hover:text-black transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-black/40 hover:text-black transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-black/40 mb-6">
                                Features
                            </h3>
                            <ul className="space-y-4 text-sm font-light">
                                <li>
                                    <a
                                        href="#events"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        Events Platform
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#content"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        Content Curation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#learning"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        Learning Ecosystem
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#opportunities"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        Opportunity Hub
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-black/40 mb-6">
                                Cities
                            </h3>
                            <ul className="space-y-4 text-sm font-light">
                                <li>
                                    <a
                                        href="#"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        New York
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        San Francisco
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        Austin
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        View All Cities
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-black/40 mb-6">
                                Company
                            </h3>
                            <ul className="space-y-4 text-sm font-light">
                                <li>
                                    <a
                                        href="#"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-black/70 hover:text-black transition-colors"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-16 pt-8 border-t border-[#e6e6e6] text-center text-sm text-black/50 font-light">
                        <p>
                            © {new Date().getFullYear()} Anote AI Community. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
