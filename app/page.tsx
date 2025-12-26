import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const posts = getPosts().slice(0, 3); // Get 3 most recent

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Jeremy Kamber
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
          Full-stack Developer and Product Manager based in Seattle.
          I build high-signal AI products and scalable web architectures.
          Currently studying Informatics at the University of Washington and building tools
          that bridge the gap between human intent and machine execution.
        </p>
      </section>

      <Separator />

      <section className="space-y-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-semibold tracking-tight">Writing</h2>
          <Button variant="link" asChild className="text-sm text-muted-foreground p-0 h-auto font-normal">
            <Link href="/blog">View all</Link>
          </Button>
        </div>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline group cursor-pointer py-1 gap-1 sm:gap-4">
                <h3 className="text-base font-medium group-hover:underline">
                  {post.title}
                </h3>
                <span className="text-sm text-muted-foreground tabular-nums shrink-0">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </Link>
              {index < posts.length - 1 && <Separator className="opacity-50 mt-3" />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
