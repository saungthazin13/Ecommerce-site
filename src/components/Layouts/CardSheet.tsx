//
import { Link } from "react-router-dom";
import { icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cartItems } from "@/data/carts";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItem from "@/components/carts/CartItem";
import { formatPrice } from "@/lib/utils";
export default function CardSheet() {
  const itemCount = 4;
  const amountTotal = 190;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="OpenCart"
        >
          <icons.Cart className="size-8" aria-hidden="true" />
          <Badge
            variant="destructive"
            className="absolute -right-2 -top-2 size-1.5 justify-center rounded-full p-2.5"
          >
            {itemCount}
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:max-w-lg">
        <SheetHeader className="">
          <SheetTitle>Cart:{itemCount}</SheetTitle>
        </SheetHeader>{" "}
        <Separator className="my-2" />
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="my-4 h-[60vh] pb-8">
              <div className="flex-1">
                {cartItems.map((cart) => (
                  <CartItem cart={cart} />
                ))}
              </div>
            </ScrollArea>
            <div className="space-y-4">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="">Shipping</span>
                  <span className="">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Taxes</span>
                  <span className="">Calculate at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Total</span>
                  <span className="">{formatPrice(amountTotal)}</span>
                </div>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="mt-4 w-full" asChild>
                  <Link to="/checkout" aria-label="Check Out">
                    Continue To Checkout
                  </Link>
                </Button>
              </SheetClose>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <icons.Cart
              className="mb-4 size-16 text-muted-foreground"
              aria-hidden="true"
            />
            <div className="text-xl font-medium text-muted-foreground">
              Your Card is Empty
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
