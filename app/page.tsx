import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="group/hera space-y-6">
        <div className="space-y-6">
          <h1 className="animate-fade-up text-4xl min-[400px]:text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-foreground leading-[1.1] sm:leading-none transition-[text-shadow] duration-500 ease-expo hover:[text-shadow:0_0_60px_oklch(0.62_0.09_220/0.12)]">
            Jeremy Kamber
          </h1>
          <div
            className="animate-fade-up w-20 h-[1.5px] bg-docklight transition-all duration-500 ease-expo group-hover/hera:w-28 group-hover/hera:h-[2px] group-hover/hera:opacity-90"
            style={{ animationDelay: "100ms" }}
          />
          <p
            className="animate-fade-up text-base text-muted-foreground leading-relaxed max-w-prose"
            style={{ animationDelay: "200ms" }}
          >
            Full-stack Developer and Product Manager based in Seattle.
            I build AI products with a focus on making LLMs feel more human.
          </p>
          <div
            className="animate-fade-up flex items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <Link href="/portfolio" prefetch={false}>
              <Button>View work</Button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Resume</Button>
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground border-t border-border/50 pt-5"
          style={{ animationDelay: "400ms" }}
        >
          <span>Open source projects</span>
          <span className="text-border">·</span>
          <a
            href="https://github.com/jeremykamber/echo-journal-mvp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-docklight transition-all duration-300 ease-expo hover:underline hover:underline-offset-4 hover:decoration-docklight/30 font-medium"
          >
            Echo
          </a>
          <span className="text-border">·</span>
          <a
            href="https://github.com/jeremykamber/deepbound"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-docklight transition-all duration-300 ease-expo hover:underline hover:underline-offset-4 hover:decoration-docklight/30 font-medium"
          >
            DeepBound
          </a>
        </div>
      </section>

      <div className="w-full h-px bg-border/50" />

      {/* Start Here */}
      <section className="space-y-4">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-docklight" />
            <span className="text-xs font-medium text-docklight uppercase tracking-widest">
              Start here
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="space-y-3">
            <Link
              href="/portfolio/strata"
              className="group inline-block"
            >
              <h2 className="text-2xl font-bold tracking-tight group-hover:text-docklight transition-colors">
                Strata: A Tiered Memory System for AI Agents
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-prose">
              A zero-dependency tiered memory system that separates algorithmic
              lifecycle triggers from LLM compression. You only pay for
              intelligence when it&apos;s needed.
            </p>
            <Link
              href="/portfolio/strata"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-docklight transition-colors group"
            >
              Read the case study
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Writing */}
      <section className="space-y-4">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-docklight" />
            <span className="text-xs font-medium text-docklight uppercase tracking-widest">
              A taste of my writing
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="space-y-3">
            <Link
              href="/blog/don-t-vibe-code-engineer-code"
              className="group inline-block"
            >
              <h2 className="text-2xl font-bold tracking-tight group-hover:text-docklight transition-colors">
                Don&apos;t Vibe Code. Engineer Code.
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-prose">
              My framework for engineering with AI agents. Writing syntax is a
              solved commodity. Communicating intent and defining requirements is
              where the real engineering is.
            </p>
            <Link
              href="/blog/don-t-vibe-code-engineer-code"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-docklight transition-colors group"
            >
              Read the article
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
