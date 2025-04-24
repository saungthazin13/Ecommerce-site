import BlogPostList from "@/components/blogs/BlogPostList";
import { posts } from "@/data/posts";
function Blog() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="mt-8 text-center text-2xl font-bold lg:text-left">
          Recent Blog Posts
        </h1>
        <BlogPostList posts={posts} />
      </div>
    </>
  );
}

export default Blog;
