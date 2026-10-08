import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Screenshot } from "@/components/screenshot";

export default function Home() {
	return (
		<div className="space-y-14">
			{/* Hero */}
			<section className="group/hera space-y-6">
				<div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_18rem] sm:gap-10 md:gap-12 items-start">
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
							Full-stack Developer and Product Manager based in Seattle. I build
							AI products with a focus on making LLMs feel more human.
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
					{/* Portrait — background removed and desaturated so it sits inside the palette */}
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/portrait.webp"
						alt="Jeremy Kamber"
						width={800}
						height={723}
						className="animate-fade-up mx-auto block h-auto w-full max-w-[14rem] sm:mx-0 sm:max-w-none"
						style={{
							animationDelay: "150ms",
							maskImage:
								"linear-gradient(to bottom, #000 78%, transparent 100%)",
							WebkitMaskImage:
								"linear-gradient(to bottom, #000 78%, transparent 100%)",
						}}
						loading="eager"
						fetchPriority="high"
					/>
				</div>

				<div
					className="animate-fade-up flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground border-t border-border/50 pt-5"
					style={{ animationDelay: "400ms" }}
				>
					<span>Featured projects</span>
					<span className="text-border">·</span>
					<Link
						href="/portfolio/kynd"
						className="hover:text-docklight transition-all duration-300 ease-expo hover:underline hover:underline-offset-4 hover:decoration-docklight/30 font-medium"
					>
						Kynd
					</Link>
					<span className="text-border">·</span>
					<Link
						href="/portfolio/strata"
						className="hover:text-docklight transition-all duration-300 ease-expo hover:underline hover:underline-offset-4 hover:decoration-docklight/30 font-medium"
					>
						Strata
					</Link>
				</div>
			</section>

			<div className="w-full h-px bg-border/50" />

			{/* New release */}
			<section className="space-y-4">
				<ScrollReveal>
					<div className="flex items-center gap-3">
						<div className="w-6 h-px bg-docklight" />
						<span className="text-xs font-medium text-docklight uppercase tracking-widest">
							New release
						</span>
					</div>
				</ScrollReveal>
				<ScrollReveal delay={100}>
					<div className="space-y-3">
						<a
							href="https://github.com/jeremykamber/jnk-skills"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-block"
						>
							<h2 className="text-2xl font-bold tracking-tight group-hover:text-docklight transition-colors">
								jnk-skills: A Development Workflow for AI Agents
							</h2>
						</a>
						<p className="text-muted-foreground leading-relaxed max-w-prose">
							I published the workflow I use to build software with AI agents.
							It&apos;s organized into beats: pickup, understand, decide,
							design, implement, verify, debrief. Each beat ends with a gate.
							You stay the pilot. The agent does one job at a time. The point
							is that every session leaves better software and better
							understanding. One without the other is incomplete. The repo
							also includes teach, a tutoring skill based on learning science.
						</p>
						<a
							href="https://github.com/jeremykamber/jnk-skills"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-docklight transition-colors group"
						>
							Get the skills on GitHub
							<span className="transition-transform group-hover:translate-x-0.5">
								→
							</span>
						</a>
					</div>
				</ScrollReveal>
			</section>

			{/* Featured Work */}
			<section className="space-y-6">
				<ScrollReveal>
					<div className="flex items-center gap-3">
						<div className="w-6 h-px bg-docklight" />
						<span className="text-xs font-medium text-docklight uppercase tracking-widest">
							Featured work
						</span>
					</div>
				</ScrollReveal>

				{/* Kynd */}
				<ScrollReveal delay={100}>
					<div className="space-y-3">
						<Link href="/portfolio/kynd" className="group inline-block">
							<h2 className="text-2xl font-bold tracking-tight group-hover:text-docklight transition-colors">
								Kynd: AI-Powered User Testing with Synthetic Personas
							</h2>
						</Link>
						<Link href="/portfolio/kynd" className="group block max-w-lg">
							<Screenshot
								src="/kynd_screenshots/kynd-wide.png"
								alt="The Kynd persona library showing five generated personas, each with psychometric trait bars and a decision style"
								label="Kynd · Persona Library"
								className="my-4 transition-opacity group-hover:opacity-80"
							/>
						</Link>
						<p className="text-muted-foreground leading-relaxed max-w-prose">
							Generate realistic synthetic personas from minimal input and run
							them against live websites for automated user testing, pricing
							analysis, and behavioral research. Built with Hexagonal
							Architecture and six research-backed inference-time techniques.
						</p>
						<Link
							href="/portfolio/kynd"
							className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-docklight transition-colors group"
						>
							Read the case study
							<span className="transition-transform group-hover:translate-x-0.5">
								→
							</span>
						</Link>
					</div>
				</ScrollReveal>

				{/* Strata */}
				<ScrollReveal delay={200}>
					<div className="space-y-3">
						<Link href="/portfolio/strata" className="group inline-block">
							<h2 className="text-2xl font-bold tracking-tight group-hover:text-docklight transition-colors">
								Strata: A Tiered Memory System for AI Agents
							</h2>
						</Link>
						<Link href="/portfolio/strata" className="group block max-w-lg">
							<Screenshot
								src="/strata_screenshots/strata-cli.png"
								alt="The strata search command showing ranked results from the active, cooled, and archive tiers"
								label="strata — zsh"
								variant="terminal"
								className="my-4 transition-opacity group-hover:opacity-80"
							/>
						</Link>
						<p className="text-muted-foreground leading-relaxed max-w-prose">
							A zero-dependency tiered memory system built for AI agents.
							Separates algorithmic lifecycle triggers from LLM compression so
							you only pay for intelligence when it&apos;s needed. 137+ tests,
							3-tier architecture, filesystem-first design.
						</p>
						<Link
							href="/portfolio/strata"
							className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-docklight transition-colors group"
						>
							Read the case study
							<span className="transition-transform group-hover:translate-x-0.5">
								→
							</span>
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
							solved commodity. Communicating intent and defining requirements
							is where the real engineering is.
						</p>
						<Link
							href="/blog/don-t-vibe-code-engineer-code"
							className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-docklight transition-colors group"
						>
							Read the article
							<span className="transition-transform group-hover:translate-x-0.5">
								→
							</span>
						</Link>
					</div>
				</ScrollReveal>
			</section>
		</div>
	);
}
