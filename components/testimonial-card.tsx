import Image from "next/image";

interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    avatar: string;
}

export default function TestimonialCard({
    quote,
    name,
    title,
    avatar,
}: TestimonialCardProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="mb-4 text-primary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
            </div>
            <p className="mb-4 text-slate-600">{quote}</p>
            <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                    <Image
                        src={avatar || "/placeholder.svg"}
                        alt={name}
                        width={40}
                        height={40}
                    />
                </div>
                <div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm text-slate-500">{title}</p>
                </div>
            </div>
        </div>
    );
}
