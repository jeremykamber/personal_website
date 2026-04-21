# Jeremy Kamber Portfolio - Design System

## Overview

This is the source of truth for all design decisions on jeremykamber.com. All agents working on this codebase MUST read this document before making any visual or UX changes.

---

## Design Philosophy

**Radical Minimalism with Swiss Precision**

- Strict black & white palette with minimal accent
- Sharp corners (`rounded-sm` / 2px radius) - NO rounded-xl
- High-contrast typography
- Generous negative space
- Subtle grain texture overlay (4% opacity)

---

## Color System

### Light Mode (Default)
```css
--background: #ffffff;
--foreground: #000000;
--primary: #000000;
--primary-foreground: #ffffff;
--secondary: #f4f4f5;
--secondary-foreground: #000000;
--muted: #f4f4f5;
--muted-foreground: #71717a;
--accent: #f4f4f5;
--accent-foreground: #000000;
--border: #e4e4e7;
--card: #ffffff;
--card-foreground: #000000;
```

### Dark Mode
```css
--background: #000000;
--foreground: #ffffff;
--primary: #ffffff;
--primary-foreground: #000000;
--secondary: #18181b;
--secondary-foreground: #ffffff;
--muted: #18181b;
--muted-foreground: #a1a1aa;
--accent: #18181b;
--accent-foreground: #ffffff;
--border: #27272a;
--card: #000000;
--card-foreground: #ffffff;
```

### Semantic Colors
- **Green indicator**: `#22c55e` (for availability status)
- **Link color**: Uses `--foreground` with `text-foreground` class

---

## Typography

### Font Stack
- **Primary**: Geist Sans (variable weight)
- **Mono**: Geist Mono
- **Fallback**: system-ui, sans-serif

### Scale
- **H1 (Name/Hero)**: `text-3xl sm:text-4xl font-bold tracking-tight`
- **H2 (Section titles)**: `text-xl font-semibold tracking-tight`
- **Body**: `text-base leading-relaxed`
- **Small/Meta**: `text-sm text-muted-foreground`
- **Tiny/Labels**: `text-xs uppercase tracking-wider`

---

## Component Standards

### Cards

**Base Card**
```tsx
<Card className="border-border bg-card text-card-foreground shadow-sm">
```

**Card with hover (ALL cards MUST use this pattern)**
```tsx
<Card className="border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
```

**Card corner radius**: `rounded-sm` (enforced in `components/ui/card.tsx`)
**Card padding**: `py-6` (from base Card component)

### Links (View → Pattern)

ALL "View" links MUST use this exact pattern:
```tsx
<Link href="..." className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline group">
  View
  <span className="transition-transform group-hover:translate-x-0.5">→</span>
</Link>
```

For case study cards specifically:
```tsx
<span className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:underline">
  View case study
  <span className="transition-transform group-hover:translate-x-0.5">→</span>
</span>
```

### Tech Stack Badges

**Standard Badge** (on project cards):
```tsx
<Badge variant="secondary" className="rounded-none text-[10px] font-normal uppercase tracking-wider bg-accent/50 border-border/50">
  {tech}
</Badge>
```

**Badge on hover interaction** (portfolio page):
```tsx
<Badge variant="secondary" className="rounded-none text-[10px] font-normal uppercase tracking-wider bg-accent/50 border-border/50 group-hover:border-primary/50 transition-colors">
  {tech}
</Badge>
```

### Navigation

**Desktop Navigation**:
```tsx
<nav className="w-full flex items-center justify-between">
  <Link href="/" className="font-semibold text-foreground hover:text-foreground/80 transition-colors cursor-pointer" aria-label="Jeremy Kamber - Home">
    JK
  </Link>
  <div className="hidden md:flex items-center space-x-6">
    {navItems.map((item) => (
      <Link key={item.href} href={item.href} className="text-base font-medium transition-colors hover:text-foreground/80">
        {item.name}
      </Link>
    ))}
  </div>
</nav>
```

**Nav Items Structure** (MUST include descriptions):
```tsx
const navItems = [
  { name: "Home", href: "/", description: "About me" },
  { name: "Projects", href: "/portfolio", description: "Case studies & work" },
  { name: "Writing", href: "/blog", description: "Blog posts & essays" },
];
```

### Mobile Navigation (Sheet)

**Mobile nav items MUST include descriptions**:
```tsx
<Link href={item.href} className="group transition-colors hover:text-foreground/80">
  <div className="text-base font-medium">{item.name}</div>
  <div className="text-xs text-muted-foreground/60">{item.description}</div>
</Link>
```

### Open Source Links (Homepage Hero)

**Pattern** (MUST include descriptions after bullet):
```tsx
<a href="..." className="group hover:text-foreground transition-colors font-medium flex items-center gap-1.5">
  <span className="font-semibold">ProjectName</span>
  <span className="text-muted-foreground/50 text-xs hidden sm:inline">· Description</span>
</a>
```

---

## Animation Standards

### Card Hover Animation
```css
transition-all duration-200 transform hover:-translate-y-1
hover:shadow-md
```

**IMPORTANT**: Use `transition-all duration-200` NOT `transition-shadow` alone.

### Arrow Link Animation
```css
transition-transform group-hover:translate-x-0.5
```

### Availability Indicator
```css
animate-pulse-slow /* defined in globals.css as 2.4s cycle */
```

---

## Spacing System

### Page Margins
- **Container**: `w-full max-w-2xl px-6 md:px-0`
- **Section spacing**: `space-y-12` (between major sections)
- **Component spacing**: `space-y-6` (within sections)

### Grid Layouts
- **Project cards**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
- **Portfolio page**: `grid grid-cols-1 md:grid-cols-2 gap-8`

---

## Breadcrumb Pattern

For all inner pages (blog posts, case studies):

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

<Breadcrumb className="mb-6">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/path">Section Name</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage className="text-sm">Page Title</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Footer Structure

**Pattern** (organized by Contact + Navigate):
```tsx
<footer className="py-8 flex flex-col md:flex-row justify-between items-start gap-6 text-sm text-muted-foreground border-t border-border mt-8">
  <div className="flex flex-col gap-1">
    <span className="font-medium text-foreground">&copy; {year} Jeremy Kamber</span>
    <span className="text-xs">Full-stack Developer & Product Manager</span>
  </div>
  <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-xs">
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground/50 uppercase tracking-wider text-[10px] mb-1">Contact</span>
      <a href="mailto:..." className="hover:text-foreground transition-colors">Email</a>
      <a href="https://linkedin.com/..." className="hover:text-foreground transition-colors">LinkedIn</a>
      <a href="https://github.com/..." className="hover:text-foreground transition-colors">GitHub</a>
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground/50 uppercase tracking-wider text-[10px] mb-1">Navigate</span>
      <a href="/" className="hover:text-foreground transition-colors">Home</a>
      <a href="/portfolio" className="hover:text-foreground transition-colors">Projects</a>
      <a href="/blog" className="hover:text-foreground transition-colors">Writing</a>
    </div>
  </div>
</footer>
```

---

## Accessibility Requirements

- All interactive elements MUST have `cursor-pointer`
- Focus states visible for keyboard navigation
- ARIA labels on icon-only buttons (e.g., menu toggle)
- Color contrast minimum 4.5:1 for normal text
- `prefers-reduced-motion` respected for animations

---

## File Structure

```
app/
  page.tsx              # Homepage
  layout.tsx            # Root layout with header/footer
  globals.css           # Design tokens + global styles
  portfolio/
    page.tsx            # Projects listing
    [slug]/page.tsx     # Case study detail
  blog/
    page.tsx            # Writing listing
    [slug]/page.tsx     # Blog post detail
components/
  nav.tsx               # Navigation component
  ui/
    card.tsx            # Card component (ALWAYS rounded-sm)
    badge.tsx           # Badge component
    button.tsx          # Button component
    breadcrumb.tsx      # Breadcrumb component
    separator.tsx       # Separator component
lib/
  projects.ts           # Project data
  posts.ts              # Blog post data
  case-studies.ts       # Case study data
```

---

## Anti-Patterns (DO NOT USE)

1. **NO `rounded-xl`** - Cards are `rounded-sm` only
2. **NO `rounded-full`** on badges - Use `rounded-none` for tech badges
3. **NO emoji icons** - Use Lucide React icons only
4. **NO inconsistent animations** - All cards use same 200ms duration
5. **NO bare link text** like "View →" without arrow animation
6. **NO `text-primary` for links** - Use `text-foreground`
7. **NO inconsistent shadow values** - Use `shadow-sm hover:shadow-md`

---

## Implementation Checklist

Before any PR, verify:

- [ ] Card animations consistent (200ms, same shadow values)
- [ ] Tech badges use `Badge` component with correct classes
- [ ] Links use `inline-flex items-center gap-1` pattern
- [ ] Nav includes site identity "JK" logo
- [ ] Breadcrumbs on all inner pages
- [ ] Footer organized with Contact/Navigate sections
- [ ] No `rounded-xl` anywhere in codebase
- [ ] Build passes (`bun run build`)