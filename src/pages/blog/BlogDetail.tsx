import { useParams } from "react-router-dom";
import { posts } from "@/data/posts";
import { Link } from "react-router-dom";
import { icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import RichTextRender from "@/components/blogs/RichTextRender";
function BlogDetail() {
  const { postId } = useParams();

  const post = posts.find((post) => post.id === postId);

  return (
    <div className="container mx-auto mt-16 px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row">
        <section className="w-full pr-16 lg:w-3/4">
          <Button asChild className="mb-8" variant="outline">
            <Link to="/blog">
              <icons.arrowleft />
              All Posts
            </Link>
          </Button>

          {post ? (
            <>
              <h2 className="mb-3 text-3xl font-extrabold">{post.title}</h2>
              <div className="mt-2 text-sm">
                <span className="font-[600]">
                  By <span className="">{post.author}</span> on{" "}
                  <span className="font-[600]">{post.updated_at}</span>
                </span>
              </div>
              <h3 className="my-6 text-base font-[400]">{post.content}</h3>
              <img src={post.image} alt="" className="w-full rounded-xl" />
              <RichTextRender content={post.body} className="my-8" />
              <div className="mb-12 space-x-2">
                {post.tags.map((tag) => (
                  <Button variant="secondary">{tag}</Button>
                ))}
              </div>
            </>
          ) : (
            <p className="mb-16 mt-8 text-center text-xl font-bold text-muted-foreground">
              {" "}
              No post found!
            </p>
          )}
        </section>
        <section className="w-full lg:w-1/4">
          <div className="mb-8 flex items-center gap-2 text-base font-semibold">
            <icons.layers />
            <h3 className="">Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {posts.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                className="mb-6 flex items-start gap-2"
              >
                <img
                  src={post.image}
                  alt="Blog posts"
                  className="w-1/4 rounded"
                />
                <div className="w-3/4 text-sm font-[500] text-muted-foreground">
                  <p className="line-clamp-2">{post.content}</p>
                  <i className="">...seeMore</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetail;
