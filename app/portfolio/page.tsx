import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Bringforth Studio",
        role: "Founder & Product Manager",
        description:
            "AI-driven cold email outreach automation reducing manual prospecting time by 70%. Built a scalable scraping API and managed client strategies.",
        stack: ["Python", "FastAPI", "Docker", "Ubuntu"],
        date: "Apr 2025 – Present",
    },
    {
        title: "Echo",
        role: "Founder & Lead Developer",
        description:
            "AI journaling app using local LLM inference (Ollama) and RAG. Reached 100+ users. Analytics integrated with qualitative feedback.",
        stack: ["React", "LangChain", "Ollama", "PostgreSQL"],
        date: "Jan 2025 – Present",
    },
    {
        title: "TradeTalent",
        role: "Database Engineer",
        description:
            "Robust relational schema for a skill trading marketplace. Implemented complex SQL constraints, stored procedures, and views.",
        stack: ["SQL", "Database Design", "ERD"],
        date: "Jan 2025 – Apr 2025",
    },
    {
        title: "Friend-ly",
        role: "Mobile Engineer",
        description:
            "Cross-platform mobile social network for students. Architected using MVVM pattern for separation of concerns and testability.",
        stack: ["React Native", "MVVM", "Git"],
        date: "Oct 2024 – June 2025",
    },
];

export default function Portfolio() {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
                <p className="text-muted-foreground">
                    Selected projects and startups I've built or led.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Card key={project.title} className="rounded-sm border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                                <CardTitle className="text-lg font-bold">
                                    {project.title}
                                </CardTitle>
                                <span className="text-xs text-muted-foreground sm:ml-2">
                                    {project.date}
                                </span>
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">
                                {project.role}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="rounded-none text-xs font-normal"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
