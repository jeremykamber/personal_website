import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Writing - Jeremy Kamber",
    description: "Thoughts on AI, software engineering, and minimalism.",
};

export default function BlogIndex() {
    const posts = getPosts();

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Writing</h1>
                <p className="text-muted-foreground">
                    Thoughts on AI, software engineering, and minimalism.
                </p>
            </div>

            <Separator />

            <div className="space-y-6">
                {posts.map((post) => (
                    <div key={post.slug} className="group">
                        <Link href={`/blog/${post.slug}`} className="block space-y-2">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                <h2 className="text-xl font-medium group-hover:underline">
                                    {post.title}
                                </h2>
                                <span className="text-sm text-muted-foreground tabular-nums shrink-0 mt-1 sm:mt-0">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>
                            <p className="text-muted-foreground line-clamp-2">
                                {post.description}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
