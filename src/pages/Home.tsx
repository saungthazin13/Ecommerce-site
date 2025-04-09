import { Link } from "react-router-dom";
import Couch from "@/data/images/couch.png";
import CarouselCard from "@/components/products/CarouselaCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import BlogCard from "@/components/blogs/BlogCard";
import { posts } from "@/data/posts";
const SamplePosts = posts.slice(0, 3);

function Home() {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-between lg:flex-row">
        {/* text section */}
        <div className="my-8 text-center lg:mb-0 lg:mt-28 lg:w-2/5 lg:text-left">
          <h1 className="col mb-4 text-4xl font-extrabold text-own lg:mb-8 lg:text-5xl">
            Discover Comfort and Style
          </h1>
          <p className="mb-6 text-own lg:mb-8">
            Transform your living space with our beautifully crafted furniture.
            Whether you're looking for classic designs or modern comfort, we
            have the perfect pieces for your home.
          </p>
          <div>
            <Button
              asChild
              className="mr-2 rounded-full bg-orange-300 px-8 py-6 font-bold"
            >
              <Link to="">Shop Now</Link>
            </Button>
            <Button
              asChild
              className="mr-2 rounded-full px-8 py-6 font-bold text-own"
              variant="outline"
            >
              <Link to="">Export</Link>
            </Button>
          </div>
        </div>
        {/* image section */}
        <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
      </div>

      <CarouselCard products={products} />

      <div className=" container mx-auto">
        <h1 className=" text-2xl font-bold text-center lg:text-left mt-8">latest Blog Posts</h1>
        <BlogCard posts={SamplePosts} />
      </div>




    </div>
  );
}

export default Home;
