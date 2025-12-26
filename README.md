# Jeremy Kamber | Personal Portfolio

A radically minimalist personal website and portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **shadcn/ui**. Detailed focus on typography and "Swiss Style" aesthetics.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (Strict B&W Palette)
- **Components**: shadcn/ui (Radix UI)
- **Content**: MDX (via `next-mdx-remote`)
- **Font**: Geist Sans (Variable)

## 📁 Structure

- `/app`: Main application routes and global layout.
- `/app/blog`: Dynamic blog index and post rendering.
- `/app/portfolio`: Project showcase grid.
- `/posts`: MDX files for blog content.
- `/components`: Shared React components and shadcn UI primitives.
- `/lib`: Utility functions and post parsing logic.

## 🚀 Getting Started

Ensure you have [Bun](https://bun.sh) installed.

1. **Install dependencies**:
   ```bash
   bun install
   ```

2. **Run dev server**:
   ```bash
   bun dev
   ```

3. **Build for production**:
   ```bash
   bun run build
   ```

## ✍️ Adding Content

### Blog Posts
You can quickly generate a new blog post with a prefilled template using:
```bash
bun new-post "Your Post Title"
```
Alternatively, manually create a new `.mdx` file in the `/posts` directory. Ensure it has the correct frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-12-26"
description: "A short summary for the index page."
---

Your content here...
```

### Portfolio Projects
Projects are managed in `/app/portfolio/page.tsx`. Simply update the `projects` constant with your latest work.

## 🎨 Design Principles

- **Radical Minimalism**: Strictly `#000000` and `#FFFFFF`.
- **High Signal**: No unnecessary animations or heavy shadows.
- **Swiss Aesthetics**: Sharp corners (`rounded-sm`), high-contrast typography, and generous negative space.
- **Mobile First**: Fully responsive with a minimalist hamburger menu.

## 📄 License

Personal project. All rights reserved.
