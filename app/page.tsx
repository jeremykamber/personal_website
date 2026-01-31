import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import EchoLogo from "@/components/EchoLogo";

export default function Home() {
  const posts = getPosts().slice(0, 3); // Get 3 most recent
  const featured = projects.slice(0, 2);

  return (
    <div className="space-y-12 site-accent">
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-muted text-foreground text-sm px-2 py-1 mb-6">
                <span className="h-2 w-2 bg-foreground rounded-full mr-2 animate-pulse-slow" />
                Echo local LLM support to roll out soon
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Jeremy Kamber
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mt-2">
              Full-stack Developer and Product Manager based in Seattle.
              I build AI products, with a focus on making LLMs feel more human.
            </p>
            <EchoLogo size={0.75} />
          </div>

          <div className="flex gap-3">
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

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {featured.map((p) => (
            <Card key={p.id} className="rounded-sm border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-sm font-medium">{p.title}</CardTitle>
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                </div>
                <p className="text-xs text-muted-foreground">{p.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.stack.map((tech) => (
                    <span key={tech} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-none">{tech}</span>
                  ))}
                </div>
                <div className="mt-3">
                  <Link href={`/portfolio#${p.id}`} className="text-sm text-primary hover:underline">View</Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
