import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    readingTime: number;
    wordCount: number;
};

function calculateReadingTime(content: string): { readingTime: number; wordCount: number } {
    const wordsPerMinute = 225;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return { readingTime, wordCount };
}

export function getPosts(): Post[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);
            const { readingTime, wordCount } = calculateReadingTime(matterResult.content);

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
                content: matterResult.content,
                readingTime,
                wordCount,
            };
        });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        const { readingTime, wordCount } = calculateReadingTime(matterResult.content);

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
            content: matterResult.content,
            readingTime,
            wordCount,
        };
    } catch (e) {
        return undefined;
    }
}
