//  ;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { icons } from "@/components/icons";

const qtySchema = z.object({
  qty: z.number(),
});

export default function Edittable() {
  const form = useForm<z.infer<typeof qtySchema>>({
    resolver: zodResolver(qtySchema),
    defaultValues: {
      qty: 1,
    },
  });

  function onSubmit(values: z.infer<typeof qtySchema>) {
    console.log(values);
    toast.success("Product is added to card successfully.");
    // Call api
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-[260px] justify-between"
        autoComplete="off"
      >
        <div className="flex items-center">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-8 shrink-0 rounded-r-none"
          >
            <icons.min className="size-3" aria-hidden="true" />
            <span className="sr-only">Remove one item</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-8 shrink-0 rounded-l-none"
          >
            <icons.Plus className="size-3" aria-hidden="true" />
            <span className="sr-only">ADD one item</span>
          </Button>
          <FormField
            control={form.control}
            name="qty"
            render={({ field }) => (
              <FormItem className="relative space-y-0">
                <FormLabel className="sr-only">qty</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    {...field}
                    className="h-8 w-16 rounded-none border-x-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="button"
          aria-label="Delete Cart Item"
          size="icon"
          variant="outline"
          className="size-8"
        >
          <icons.trash className="size-3" aria-hidden="true" />

          <span className="sr-only">Delete Item</span>
        </Button>
      </form>
    </Form>
  );
}
