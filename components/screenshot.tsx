import { cn } from "@/lib/utils";

type ScreenshotProps = {
	src: string;
	alt: string;
	label?: string;
	variant?: "browser" | "terminal";
	caption?: string;
	className?: string;
};

export function Screenshot({
	src,
	alt,
	label,
	variant = "browser",
	caption,
	className,
}: ScreenshotProps) {
	return (
		<figure className={cn("my-10", className)}>
			<div className="overflow-hidden rounded-sm border border-border bg-card">
				<div className="flex h-8 items-center gap-1.5 border-b border-border bg-secondary px-3">
					{variant === "browser" ? (
						<>
							<span className="size-2 rounded-full bg-border" />
							<span className="size-2 rounded-full bg-border" />
							<span className="size-2 rounded-full bg-border" />
						</>
					) : null}
					{label ? (
						<span
							className={cn(
								"font-mono text-[11px] text-muted-foreground",
								variant === "browser" ? "ml-2" : "",
							)}
						>
							{label}
						</span>
					) : null}
				</div>
				{/* Static public asset; plain img keeps the capture true to the original. */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={src} alt={alt} className="block h-auto w-full border-0 rounded-none shadow-none" />
			</div>
			{caption ? (
				<figcaption className="mt-3 text-center text-sm text-muted-foreground">
					{caption}
				</figcaption>
			) : null}
		</figure>
	);
}
