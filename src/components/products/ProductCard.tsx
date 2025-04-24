import { Link } from "react-router-dom";
import { icons } from "@/components/icons";
import type { Product } from "@/types/index";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { formatPrice, cn } from "@/lib/utils";

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}
function ProductCard({ product, className }: ProductProps) {
  return (
    <Card className={cn("size-full overflow-hidden rounded-lg", className)}>
      <Link to={`/product/${product.id}`} aria-label={product.name}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={product.images[0]}
              alt="Featured Image"
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}
            {product.discount > 0 && (
              <span className="ml-2 font-extralight line-through">
                {formatPrice(product.discount)}
              </span>
            )}
          </CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-1">
        {product.status === "sold" ? (
          <Button
            size="sm"
            className="h-8 w-full rounded-sm font-bold"
            disabled={true}
            aria-label="Sold Out"
          >
            Sold Out
          </Button>
        ) : (
          <Button size="sm" className="h-8 w-full rounded-sm bg-own font-bold">
            <icons.Plus />
            Add to Card
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
