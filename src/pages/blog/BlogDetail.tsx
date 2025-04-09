import { useParams } from "react-router-dom";
import { posts } from "@/data/posts";
import { Link } from "react-router-dom";
import { icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import path from "path";


function BlogDetail() {
  const { postId } = useParams();

  const post = posts.find((post) => post.id === postId);

  return (
    <div className=" container mx-auto px-4 lg:px-0">
      <section className=" flex flex-col lg:flex-row">
        <section className="">
          <Button
            asChild
            className=""
            variant="outline"
          >
            <Link to="/blogs">
              <icons.arrowleft />All Posts
            </Link>
          </Button>

          {post ? (<>
            <h2 className=""></h2>
            <div className=""><span className=""></span>
            </div>
            <h3 className=""></h3>
            <img src="" alt="" className="" />
          </>) :
            (
              <p className="mb-16 mt-8 text-center text-xl font-bold text-muted-foreground"> No post found!</p>
            )}

        </section>
        <section className="">Other</section>
      </section>
    </div>
  );
}

export default BlogDetail;
