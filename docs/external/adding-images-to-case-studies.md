# Adding images to case studies

Case studies are MDX files in `case-studies/*.mdx` rendered by `next-mdx-remote/rsc`
in `app/portfolio/[slug]/page.tsx`.

To include a screenshot in a case study:

1. Drop the asset under `public/` (e.g. `public/kynd_screenshots/kynd-tall.png`).
2. Use the `Screenshot` component (`components/screenshot.tsx`), already registered
   as an MDX component on the portfolio pages via the `components` prop:

   ```mdx
   <Screenshot
     src="/kynd_screenshots/kynd-tall.png"
     alt="..."
     label="Kynd · Analysis"   // title-bar text
     variant="browser"          // "browser" (dots) | "terminal" (plain)
     caption="..."              // optional, centered under the frame
   />
   ```

Screenshots are framed with a 1px border + title bar to read as real product
captures; the inner `<img>` resets prose image styling (`border-0 rounded-none
shadow-none`). Plain markdown `![alt](src)` images also work and get the prose
image treatment. Assets are served as static PNGs; no image optimization pipeline
exists yet.
