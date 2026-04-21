import { getCaseStudyBySlug, getCaseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { PostTracker } from "@/components/analytics-tracker";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReadingProgress } from "@/components/reading-progress";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};

  return {
    title: `${study.title} - Jeremy Kamber`,
    description: study.description,
  };
}

export async function generateStaticParams() {
  const studies = getCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage(props: Props) {
  const params = await props.params;
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      <ReadingProgress />
      <PostTracker title={study.title} slug={params.slug} />

      <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group px-3 py-1.5 -ml-3 rounded-sm hover:bg-muted/50">
        <span className="transition-transform group-hover:-translate-x-0.5">←</span>
        <span>Projects</span>
      </Link>

      <div className="space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {study.title}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
          <p className="font-medium text-foreground">{study.role}</p>
          <span className="hidden sm:inline">•</span>
          <p>{study.date}</p>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {study.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-none px-3 py-1 font-normal uppercase tracking-wider text-[10px]">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight
        prose-img:rounded-sm prose-img:border prose-img:border-border prose-img:shadow-xl
        prose-strong:text-foreground
        prose-p:leading-relaxed prose-p:text-muted-foreground prose-p:text-lg">
        <MDXRemote source={study.content} />
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jeremy Kamber
          </p>
          <Link href="/portfolio" className="text-sm font-medium hover:underline">
            View more projects
          </Link>
        </div>
      </footer>
    </article>
  );
}
