import { sendGAEvent } from "@next/third-parties/google";

/**
 * Log a custom GA event
 * @param action - Action name (e.g. 'view_item')
 * @param category - Category (e.g. 'blog')
 * @param label - Label (e.g. 'post_title')
 * @param value - Optional numeric value
 */
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  sendGAEvent({
    event: action,
    value: value,
    category: category,
    label: label,
  });
};

/**
 * Log a blog post view
 * @param title - Title of the post
 * @param slug - Slug of the post
 */
export const trackPostView = (title: string, slug: string) => {
  trackEvent('view_article', 'blog', title);
};

/**
 * Log a portfolio project view
 * @param title - Title of the project
 */
export const trackProjectView = (title: string) => {
  trackEvent('view_project', 'portfolio', title);
};
