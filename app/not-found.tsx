import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-6xl font-bold tracking-tight text-foreground">
          404
        </h1>
        <div className="w-8 h-px bg-docklight mx-auto" />
      </div>
      <p className="text-muted-foreground max-w-sm">
        This page doesn't exist. It might have moved, or the link might be broken.
      </p>
      <div className="flex items-center gap-4 pt-2">
        <Link
          href="/"
          className="text-sm font-medium text-foreground hover:text-docklight transition-colors"
        >
          Home
        </Link>
        <span className="text-border text-xs">·</span>
        <Link
          href="/portfolio"
          className="text-sm font-medium text-foreground hover:text-docklight transition-colors"
        >
          Projects
        </Link>
        <span className="text-border text-xs">·</span>
        <Link
          href="/blog"
          className="text-sm font-medium text-foreground hover:text-docklight transition-colors"
        >
          Writing
        </Link>
      </div>
    </div>
  );
}
