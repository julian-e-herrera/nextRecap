import { readdir, readFile } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export const getPost = async (slug) => {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const {
    data: { title },
    content,
  } = matter(source);
  const body = marked(content);
  return {
    title,
    body,
  };
};

export const getSlugs = async () => {
  const files = await readdir("content/posts");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -3));
};
export const getPosts = async () => {
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }

  return posts;
};
