import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Nav } from "@/components/nav";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const siteConfig = {
	title: "Jeremy Kamber",
	description: "Full-stack Developer & Product Manager. Seattle, WA.",
	url: "https://jeremykamber.com", // Replace with actual URL if known
};

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.title,
		images: [
			{
				url: `/api/og?title=${encodeURIComponent(siteConfig.title)}&description=${encodeURIComponent(siteConfig.description)}&type=Portfolio`,
				width: 1200,
				height: 630,
			},
		],
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: [
			{ url: "/favicon.svg", type: "image/svg+xml" },
			{ url: "/favicon.ico", sizes: "any" },
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		images: [
			`/api/og?title=${encodeURIComponent(siteConfig.title)}&description=${encodeURIComponent(siteConfig.description)}&type=Portfolio`,
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					type="module"
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon='{"token": "ed3690474d3a40d980fb17212db2390a"}'
				/>
			</head>
			<body
				className={`dark ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col items-center`}
			>
				<div className="w-full max-w-3xl px-6 flex flex-col min-h-screen">
					<header className="py-8 flex justify-between items-center">
						<Nav />
					</header>

					<main className="flex-1 py-8">{children}</main>

					<footer className="py-8 flex flex-col md:flex-row justify-between items-start gap-6 text-sm text-muted-foreground border-t border-border mt-8">
						<div className="flex flex-col gap-1">
							<span className="font-medium text-foreground">
								&copy; {new Date().getFullYear()} Jeremy Kamber
							</span>
							<span className="text-xs">
								Full-stack Developer & Product Manager
							</span>
						</div>
						<div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-xs">
							<div className="flex flex-col gap-1">
								<span className="text-muted-foreground/70 uppercase tracking-wider text-[10px] mb-1">
									Contact
								</span>
								<a
									href="mailto:jkamberwork@gmail.com"
									className="hover:text-foreground transition-colors"
								>
									Email
								</a>
								<a
									href="https://linkedin.com/in/jeremy-kamber"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-foreground transition-colors"
								>
									LinkedIn
								</a>
								<a
									href="https://github.com/jeremykamber"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-foreground transition-colors"
								>
									GitHub
								</a>
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-muted-foreground/70 uppercase tracking-wider text-[10px] mb-1">
									Navigate
								</span>
								<Link
									href="/"
									className="hover:text-foreground transition-colors"
								>
									Home
								</Link>
								<Link
									href="/portfolio"
									className="hover:text-foreground transition-colors"
								>
									Projects
								</Link>
								<Link
									href="/blog"
									className="hover:text-foreground transition-colors"
								>
									Writing
								</Link>
							</div>
						</div>
					</footer>
			</div>
		</body>
		</html>
	);
}
