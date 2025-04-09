import type { Post } from "@/types/index";
import { Link } from "react-router-dom";

interface Postprop {
    posts: Post[];
}
function BlogCard({ posts }: Postprop) {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-16 px-4 md:px-0 my-8">
            {posts.map((post) => (
                <Link to={`/blogs/${post.id}`} key={post.id}>
                    <img src={post.image} alt={post.title} className="w-full rounded-2xl  mb-4" />
                    <h2 className=" line-clamp-1  font-bold ml-4 text-xl ">{post.title}</h2>
                    <div className="ml-4 mt-2 text-sm  ">
                        <span className=" font-semibold ">By <span className="">{post.author}</span>  on <span className="font-semibold ">{post.updated_at}</span></span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BlogCard;