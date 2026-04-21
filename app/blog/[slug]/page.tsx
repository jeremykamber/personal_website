import { getPostBySlug, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { PostTracker } from "@/components/analytics-tracker";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const ogImage = `/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}&type=Blog%20Post`;

  return {
    title: `${post.title} - Jeremy Kamber`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
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
      <PostTracker title={post.title} slug={params.slug} />

      <div className="mb-8 not-prose border-b border-border pb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-widest font-medium">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
          <span>•</span>
          <span>{post.wordCount} words</span>
        </div>
      </div>
      <MDXRemote source={post.content} />
    </article>
  );
}
