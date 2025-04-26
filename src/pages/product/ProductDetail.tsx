import { Link, useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCard from "@/components/products/ProductCard";
import { icons } from "@/components/icons";
import Autoplay from "embla-carousel-autoplay"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import Rating from "@/components/products/Rating";
import AddToFavourite from "@/components/products/AddToFavourite";
import AddToCardForm from "@/components/products/AddToCardForm";


function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <Button asChild variant="outline" className="mb-4 mt-8 rounded">
        <Link to="/product">
          <icons.arrowleft />
          All Products
        </Link>
      </Button>

      <section className=" flex flex-col gap-8 md:flex-row md:gap-16">
        <Carousel
          plugins={[plugin.current]}
          className="w-full  md:w-1/2"

        >
          <CarouselContent className="-ml-1">
            {product?.images.map((image) => (
              <CarouselItem
                key={image}
                className=""
              >
                <div className=" p-1">
                  <img
                    src={image}
                    alt={product.name}
                    className=" size-full  rounded-md object-cover mb-8  "
                  />

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
        <Separator className=" mt-4 md:hidden" />

        <div className=" flex w-full flex-col gap-4 md:w-1/2 ">
          <div className=" space-y-2">
            <h2 className=" line-clamp-1 font-3xl font-bold">{product?.name}</h2>
            <p className=" text-base text-muted-foreground">{formatPrice(Number(product?.price))}</p>
          </div>

          <Separator className="  my-1.5" />
          <p className="text-base text-muted-foreground">{product?.inventory} in stock</p>
          <div className=" flex items-center justify-between">
            < Rating rating={Number(product?.rating)} />
            <AddToFavourite productId={String(product?.id)} rating={Number(product?.rating)} />
          </div>



          <AddToCardForm showBuyNow={product?.status === "active"} />
          <Separator className="  my-5" />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className=" border-none">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {product?.description ?? "No description is available for this product"}
              </AccordionContent>
            </AccordionItem>

          </Accordion>


        </div>
        <Separator className=" mt-4 md:hidden" />
      </section>

      <section className="space-y-6 overflow-hidden">
        <h2 className="line-clamp-1 text-2xl font-bold">
          More Products From Furniture Shop
        </h2>

        <ScrollArea className="pb-8 ">
          <div className="flex gap-4">
            {products.slice(0, 4).map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                className="min-w-[260px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>




    </div>
  );
}

export default ProductDetail;
