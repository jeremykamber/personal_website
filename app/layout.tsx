import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeremy Kamber",
  description: "Full-stack Developer & Product Manager. Seattle, WA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col items-center`}
      >
        <div className="w-full max-w-2xl px-6 md:px-0 flex flex-col min-h-screen">
          <header className="py-8 flex justify-between items-center">
            {/* Logo or Name could go here, but user asked for Minimal nav. 
                 Often personal sites have the Name on the left, Nav on right. 
                 User request: "Header: Minimal nav using Button". 
                 I'll put the nav on the left or just the nav. 
                 Radical minimalism often just has the nav.
                 I'll stick to just the nav on the left/center as requested.
                 Wait, "Header: Minimal nav". 
              */}
            <Nav />
          </header>

          <main className="flex-1 py-8">
            {children}
          </main>

          <footer className="py-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground border-t border-border mt-8">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Jeremy Kamber
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
              <a href="mailto:jkamberwork@gmail.com" className="hover:text-foreground transition-colors">
                jkamberwork@gmail.com
              </a>
              <a href="https://linkedin.com/in/jeremy-kamber" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/jeremykamber" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
