import { getPosts, Post } from "../posts";
import { projects } from "../projects";

export type SearchResult = {
  content: string;
  source: string;
  url: string;
  type: "post" | "project";
};

export async function getContext(query: string): Promise<SearchResult[]> {
  const posts = getPosts();

  const postResults: SearchResult[] = posts.map(post => ({
    content: `Title: ${post.title}\nDescription: ${post.description}\nContent: ${post.content}`,
    source: post.title,
    url: `/blog/${post.slug}`,
    type: "post"
  }));

  const projectResults: SearchResult[] = projects.map(proj => ({
    content: `Project Name: ${proj.title}\nRole: ${proj.role}\nDescription: ${proj.description}\nStack: ${proj.stack.join(", ")}\nDate: ${proj.date}`,
    source: proj.title,
    url: `/portfolio`, // Could be more specific if there were subpages
    type: "project"
  }));

  const allContent = [...postResults, ...projectResults];

  // Simple keyword-based filtering for now to simulate "retrieval"
  // In a real RAG, we'd use vector embeddings.
  // Given the small size, we can actually just return the most relevant few.
  const keywords = query.toLowerCase().split(/\W+/).filter(k => k.length > 3);

  if (keywords.length === 0) return allContent.slice(0, 5);

  const scoredContent = allContent.map(item => {
    let score = 0;
    const lowerContent = item.content.toLowerCase();
    keywords.forEach(kw => {
      if (lowerContent.includes(kw)) score++;
    });
    return { ...item, score };
  });

  return scoredContent
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

export function getAllContext(): SearchResult[] {
  const posts = getPosts();

  const postResults: SearchResult[] = posts.map(post => ({
    content: `Title: ${post.title}\nDescription: ${post.description}\nContent: ${post.content}`,
    source: post.title,
    url: `/blog/${post.slug}`,
    type: "post"
  }));

  const projectResults: SearchResult[] = projects.map(proj => ({
    content: `Project Name: ${proj.title}\nRole: ${proj.role}\nDescription: ${proj.description}\nStack: ${proj.stack.join(", ")}\nDate: ${proj.date}`,
    source: proj.title,
    url: `/portfolio`,
    type: "project"
  }));

  return [...postResults, ...projectResults];
}
