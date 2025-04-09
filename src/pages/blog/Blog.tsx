import BlogPostList from "@/components/blogs/BlogPostList";
import { posts } from "@/data/posts";
function Blog() {
  return (
    <>
      <div className=" container mx-auto">
        <h1 className=" text-2xl font-bold text-center lg:text-left mt-8">latest Blog Posts</h1>
        <BlogPostList posts={posts} />
      </div>


    </>
  );
}

export default Blog;
