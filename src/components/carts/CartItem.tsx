import type { Cart } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Edittable from "@/components/carts/Edittable";

interface CartProp {
  cart: Cart;
}

function CartItem({ cart }: CartProp) {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex gap-4">
        <img
          src={cart.image.url}
          alt={cart.name}
          className="w-16 object-cover"
        />
        <div className="flex flex-col space-y-1">
          <span className="line-clamp-1 font-bold">{cart.name}</span>
          <span className="text-sm text-muted-foreground">
            {formatPrice(cart.price)} x {cart.quantity} ={" "}
            {formatPrice((cart.price * cart.quantity).toFixed(2))}
          </span>
          <span className="line-clamp-1 text-sm text-muted-foreground">
            {cart.category} / {cart.subcategory}
          </span>
        </div>
      </div>
      <Edittable />
      <Separator className="mb-4" />
    </div>
  );
}

export default CartItem;
