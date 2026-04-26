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
    <article className="max-w-4xl mx-auto py-12 px-6">
      <PostTracker title={post.title} slug={params.slug} />

      <Link href="/blog" className="no-underline inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group px-3 py-1.5 -ml-3 rounded-sm hover:bg-muted/50">
        <span className="transition-transform group-hover:-translate-x-0.5">←</span>
        <span>Writing</span>
      </Link>

      <div className="mb-12 not-prose border-b border-border pb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">
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

      <div className="prose prose-zinc dark:prose-invert max-w-none break-words
        prose-headings:font-bold prose-headings:tracking-tight
        prose-img:rounded-sm prose-img:border prose-img:border-border prose-img:shadow-xl
        prose-strong:text-foreground
        prose-p:leading-relaxed prose-p:text-muted-foreground prose-p:text-lg">
        <MDXRemote source={post.content} />
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jeremy Kamber
          </p>
          <Link href="/blog" className="text-sm font-medium hover:underline">
            View more writing
          </Link>
        </div>
      </footer>
    </article>
  );
}
