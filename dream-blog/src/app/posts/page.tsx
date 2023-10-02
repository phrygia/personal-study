import { Metadata } from "next";
import FilterablePost from "@/components/FilterablePost";
import { getAllPosts } from "@/service/posts";

export const metadata: Metadata = {
  title: "All Posts",
  description: "모든 블로그 글",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePost posts={posts} categories={categories} />;
}
