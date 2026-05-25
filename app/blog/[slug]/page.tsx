import { getPostBySlug, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { PostTracker } from "@/components/analytics-tracker";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReadingProgress } from "@/components/reading-progress";

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
    <article className="max-w-2xl mx-auto py-12">
      <ReadingProgress />
      <PostTracker title={post.title} slug={params.slug} />

      <Link
        href="/blog"
        className="no-underline inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
        <span>Writing</span>
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground break-words">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          <time dateTime={post.date} className="tabular-nums">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
          <span className="text-border/50">·</span>
          <span>{post.readingTime} min read</span>
          <span className="text-border/50">·</span>
          <span>{post.wordCount} words</span>
        </div>
      </header>

      <div className="prose prose-zinc dark:prose-invert max-w-none break-words
        prose-headings:font-bold prose-headings:tracking-tight
        prose-a:text-docklight prose-a:no-underline hover:prose-a:underline
        prose-img:max-w-full prose-img:rounded-sm prose-img:border prose-img:border-border prose-img:shadow-xl
        prose-strong:text-foreground
        prose-p:leading-relaxed prose-p:text-muted-foreground
        prose-code:text-sm
        prose-pre:overflow-x-auto prose-pre:bg-card prose-pre:border prose-pre:border-border">
        <MDXRemote source={post.content} />
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jeremy Kamber
          </p>
          <Link href="/blog" className="text-sm font-medium hover:underline">
            View more writing
          </Link>
        </div>
      </footer>
    </article>
  );
}
