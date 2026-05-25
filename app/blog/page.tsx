import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Writing - Jeremy Kamber",
    description: "Thoughts on AI, software engineering, and minimalism.",
};

export default function BlogIndex() {
    const posts = getPosts();
    const [latest, ...rest] = posts;

    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Writing</h1>
                <div className="w-12 h-px bg-docklight" />
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Thoughts on AI, software engineering, and minimalism.
                </p>
            </header>

            {latest && (
                <article>
                    <Link href={`/blog/${latest.slug}`} className="group block space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-docklight" />
                            <span className="text-[10px] font-medium text-docklight uppercase tracking-[0.15em]">
                                Newest
                            </span>
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold tracking-tight group-hover:text-docklight transition-colors duration-150">
                                {latest.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed max-w-prose line-clamp-2">
                                {latest.description}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <time dateTime={latest.date} className="tabular-nums">
                                    {new Date(latest.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </time>
                                <span className="text-border/50">·</span>
                                <span>{latest.readingTime} min read</span>
                            </div>
                        </div>
                    </Link>
                </article>
            )}

            <div className="w-full h-px bg-border/50" />

            <div className="space-y-12">
                {rest.map((post) => (
                    <article key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="group block">
                            <div className="grid grid-cols-1 sm:grid-cols-[5rem_1fr] gap-x-8 gap-y-1">
                                <time
                                    dateTime={post.date}
                                    className="text-xs text-muted-foreground/60 tabular-nums pt-0.5 sm:text-right sm:pt-1"
                                >
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </time>
                                <div className="space-y-2">
                                    <h2 className="text-base font-medium group-hover:text-docklight transition-colors duration-150">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                        {post.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
