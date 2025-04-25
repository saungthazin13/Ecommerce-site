import { useState } from "react";
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
import { cn } from "@/lib/utils";


const qtySchema = z.object({
    qty: z.number(),
});

interface ShowBuyNowPeops {
    showBuyNow: boolean
}

export default function AddToCardForm({ showBuyNow }: ShowBuyNowPeops) {


    const form = useForm<z.infer<typeof qtySchema>>({
        resolver: zodResolver(qtySchema),
        defaultValues: {
            qty: 1,
        },
    });

    function onSubmit(values: z.infer<typeof qtySchema>) {
        console.log(values);
        toast.success("Product is added to card successfully.")
        // Call api
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" flex max-w-[260px] gap-4 flex-col"
                autoComplete="off"
            >

                <div className=" flex items-center">
                    <Button type="button" variant="outline" size="icon" className=" size-8 shrink-0 rounded-r-none">
                        <icons.min className=" size-3" aria-hidden="true" />
                        <span className="sr-only">Remove one item</span>
                    </Button>
                    <Button type="button" variant="outline" size="icon" className=" size-8 shrink-0 rounded-l-none">
                        <icons.Plus className=" size-3" aria-hidden="true" />
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

                <div className=" flex items-center space-x-2.5">
                    <Button type="button" aria-label="Buy Now" size="sm" className={cn(" w-full bg-own font-bold", !showBuyNow && "bg-slate-400")}
                    >Buy Now </Button>
                    <Button type="submit" aria-label="Add To Card" variant={showBuyNow ? "outline" : "default"} size="sm" className=" w-full f font-semibold ">Add To Card</Button>
                </div>
            </form>
        </Form>
    );
}