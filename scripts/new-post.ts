import fs from "fs";
import path from "path";

const title = process.argv[2];

if (!title) {
    console.error("Please provide a title for the blog post.");
    console.log("Usage: bun run scripts/new-post.ts \"Your Post Title\"");
    process.exit(1);
}

const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const date = new Date().toISOString().split("T")[0];

const content = `---
title: "${title}"
date: "${date}"
description: "A brief description of ${title}."
---

Start writing your post here...
`;

const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);

if (fs.existsSync(filePath)) {
    console.error(`Error: A post with the slug "${slug}" already exists at ${filePath}`);
    process.exit(1);
}

fs.writeFileSync(filePath, content);

console.log(`Successfully created a new post:`);
console.log(`- Title: ${title}`);
console.log(`- Slug: ${slug}`);
console.log(`- Path: ${filePath}`);
