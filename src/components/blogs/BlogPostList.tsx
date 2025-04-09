import type { Post } from "@/types";
import { Link } from "react-router-dom";
interface PostProps {
    posts: Post[];
}

function BlogPostList({ posts }: PostProps) {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-16 px-4 md:px-0 my-8 ">
            {posts.map((post) => (
                <Link to={`/blogs/${post.id}`} key={post.id}>
                    <img src={post.image} alt={post.title} className="w-full rounded-xl  mb-4" />
                    <h2 className=" line-clamp-1  font-semibold  text-xl ">{post.title}</h2>
                    <h3 className=" line-clamp-3     ">{post.content}</h3>
                    <div className=" mt-2 text-sm ">
                        <span className=" font-[600] ">By <span className="">{post.author}</span>  on <span className="font-[600]  ">{post.updated_at}</span></span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BlogPostList;