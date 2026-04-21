import fs from "fs";
import path from "path";
import matter from "gray-matter";

const caseStudiesDirectory = path.join(process.cwd(), "case-studies");

export type CaseStudy = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  role: string;
  stack: string[];
  id: string;
};

export function getCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(caseStudiesDirectory);
  const allCaseStudiesData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(caseStudiesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      let dateStr = "";
      if (matterResult.data.date instanceof Date) {
        dateStr = matterResult.data.date.toISOString();
      } else {
        dateStr = matterResult.data.date;
      }

      return {
        slug,
        title: matterResult.data.title,
        date: dateStr,
        description: matterResult.data.description,
        role: matterResult.data.role,
        stack: matterResult.data.stack,
        id: matterResult.data.id,
        content: matterResult.content,
      };
    });

  return allCaseStudiesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    let dateStr = "";
    if (matterResult.data.date instanceof Date) {
      dateStr = matterResult.data.date.toISOString();
    } else {
      dateStr = matterResult.data.date;
    }

    return {
      slug,
      title: matterResult.data.title,
      date: dateStr,
      description: matterResult.data.description,
      role: matterResult.data.role,
      stack: matterResult.data.stack,
      id: matterResult.data.id,
      content: matterResult.content,
    };
  } catch (e) {
    return undefined;
  }
}
