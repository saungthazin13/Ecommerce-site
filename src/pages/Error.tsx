import Header from "@/components/Layouts/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Layouts/Footer";
import { icons } from "@/components/icons";

function Error() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="mx-auto my-32 flex flex-1 items-center">
        <Card className="w-[350px] md:w-[500px] lg:w-[500px]">
          <CardHeader className="flex place-items-center gap-2">
            <div className="mb-1 mt-2 grid size-24 place-items-center rounded-full border border-dashed border-muted-foreground/70">
              <icons.error
                className="size-10 text-muted-foreground"
                aria-hidden="true"
              />
            </div>

            <CardTitle>Oops!</CardTitle>
            <CardDescription>An Error Occurs...</CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-center">
            <Button variant="outline" asChild>
              <Link to="/">Go to HomePage</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
