import { getNonFeaturedPosts } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";
import MultiCarosel from "./MultiCarosel";

const CaroselPosts = async () => {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">You may Like</h2>
      <MultiCarosel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarosel>
    </section>
  );
};

export default CaroselPosts;
