import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const filterList = {
  types: [
    { id: "uuid1", label: "seating" },
    { id: "uuid2", label: "lying" },
    { id: "uuid3", label: "entertainment" },
    { id: "uuid4", label: "tables" },
    { id: "uuid5", label: "storage" },
  ],
  categories: [
    { id: "uuid6", label: "Wooden" },
    { id: "uuid7", label: "Bamboo" },
    { id: "uuid8", label: "Metal" },
  ],
};

const FormSchema = z.object({
  types: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Please select at least one type.",
  }),
  categories: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Please select at least one category.",
  }),
});

export default function ProductFilter() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      types: [],
      categories: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Selected Types:", data.types);
    console.log("Selected Categories:", data.categories);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-8">
        {/* Product Types Section */}
        <FormField
          control={form.control}
          name="types"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Furniture Types</FormLabel>

              </div>
              <div className="space-y-3">
                {filterList.types.map((item) => (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                              field.value.filter((value) => value !== item.id)
                            );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Material Categories Section */}
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Furniture Categories</FormLabel>

              </div>
              <div className="space-y-3">
                {filterList.categories.map((item) => (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                              field.value.filter((value) => value !== item.id)
                            );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit"> Filters</Button>
      </form>
    </Form>
  );
}