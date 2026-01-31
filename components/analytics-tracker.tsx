"use client";

import { useEffect } from "react";
import { trackPostView, trackProjectView } from "@/lib/gtag";

export function PostTracker({ title, slug }: { title: string; slug: string }) {
  useEffect(() => {
    trackPostView(title, slug);
  }, [title, slug]);

  return null;
}

export function ProjectTracker({ title }: { title: string }) {
  useEffect(() => {
    trackProjectView(title);
  }, [title]);

  return null;
}

export function ProjectInteractionTracker({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div onClick={() => trackProjectView(title)}>
      {children}
    </div>
  );
}
