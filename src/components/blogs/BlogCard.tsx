import type { Post } from "@/types/index";
import { Link } from "react-router-dom";

interface Postprop {
  posts: Post[];
}
function BlogCard({ posts }: Postprop) {
  return (
    <div className="my-8 grid grid-cols-1 gap-16 px-4 md:px-0 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
          <img
            src={post.image}
            alt={post.title}
            className="mb-4 w-full rounded-2xl"
          />
          <h2 className="ml-4 line-clamp-1 text-xl font-bold">{post.title}</h2>
          <div className="ml-4 mt-2 text-sm">
            <span className="font-semibold">
              By <span className="">{post.author}</span> on{" "}
              <span className="font-semibold">{post.updated_at}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogCard;
