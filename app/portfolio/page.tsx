import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectInteractionTracker } from "@/components/analytics-tracker";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
                <div className="w-12 h-px bg-docklight" />
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Selected projects and startups I've built or led. Focused on bridging the gap between design and scalable systems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={project.title} className={index === 0 ? 'md:col-span-2' : ''}>
                    <ProjectInteractionTracker title={project.title}>
                        <Link href={`/portfolio/${project.slug}`} className="block group h-full">
                            <Card className="border-border bg-card text-card-foreground shadow-sm hover:bg-accent hover:shadow-md transition-all duration-150 ease-out hover:-translate-y-1 h-full flex flex-col overflow-hidden gap-4">
                                <CardHeader className="relative">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <CardTitle className="text-xl font-bold group-hover:text-docklight transition-colors flex items-center gap-2">
                                                {project.title}
                                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </CardTitle>
                                            <p className="text-sm font-medium text-muted-foreground">
                                                {project.role}
                                            </p>
                                        </div>
                                        <span className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1">
                                            {project.date}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="rounded-none text-[10px] font-normal uppercase tracking-wider bg-accent/50 border-border/50"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <div className="p-6 pt-0 mt-auto">
                                    <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:underline">
                                        View case study
                                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                    </span>
                                </div>
                            </Card>
                        </Link>
                    </ProjectInteractionTracker>
                    </div>
                ))}
            </div>
        </div>
    );
}
