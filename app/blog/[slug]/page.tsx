import { getPostBySlug, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const post = getPostBySlug(params.slug);
    if (!post) return {};
    return {
        title: `${post.title} - Jeremy Kamber`,
        description: post.description,
    };
}

export async function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost(props: Props) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="prose prose-zinc dark:prose-invert max-w-none break-words">
            <div className="mb-8 not-prose border-b border-border pb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground">
                    {post.title}
                </h1>
                <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                </time>
            </div>
            <MDXRemote source={post.content} />
        </article>
    );
}
