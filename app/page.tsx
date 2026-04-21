import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  const posts = getPosts().slice(0, 3);
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-12 site-accent">
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Jeremy Kamber
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Full-stack Developer and Product Manager based in Seattle.
              I build AI products, with a focus on making LLMs feel more human.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-slow"></span>
                <span className="text-muted-foreground">Available for projects</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="text-muted-foreground/60">Open source:</span>
              <div className="flex items-center gap-3">
                <a href="https://github.com/jeremykamber/echo-journal-mvp" target="_blank" rel="noopener noreferrer" className="group hover:text-foreground transition-colors font-medium flex items-center gap-1.5">
                  <span className="font-semibold">Echo</span>
                  <span className="text-muted-foreground/50 text-xs hidden sm:inline">· AI journaling app</span>
                </a>
                <span className="text-muted-foreground/30">|</span>
                <a href="https://github.com/jeremykamber/deepbound" target="_blank" rel="noopener noreferrer" className="group hover:text-foreground transition-colors font-medium flex items-center gap-1.5">
                  <span className="font-semibold">DeepBound</span>
                  <span className="text-muted-foreground/50 text-xs hidden sm:inline">· AI user testing</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-3 shrink-0">
            <Link href="/portfolio" prefetch={false}>
              <Button>View work</Button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Resume</Button>
            </a>
          </div>
        </div>
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
                <div className="flex items-baseline gap-3">
                  <h3 className="text-base font-medium group-hover:underline">
                    {post.title}
                  </h3>
                  <span className="hidden sm:block text-xs text-muted-foreground/60 shrink-0">
                    {post.readingTime} min read
                  </span>
                </div>
                <span className="text-sm text-muted-foreground tabular-nums shrink-0">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </Link>
              {index < posts.length - 1 && <Separator className="opacity-50 mt-3" />}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <Button variant="link" asChild className="text-sm text-muted-foreground p-0 h-auto font-normal">
            <Link href="/portfolio">View all</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((p) => (
            <Card key={p.id} className="border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-sm font-medium">{p.title}</CardTitle>
                  <span className="text-xs text-muted-foreground/60">{p.date.split(' – ')[0]}</span>
                </div>
                <p className="text-xs text-muted-foreground/80">{p.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{p.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-none text-[10px] font-normal uppercase tracking-wider bg-accent/50 border-border/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3">
                  <Link href={`/portfolio/${p.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline group">
                    View
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
