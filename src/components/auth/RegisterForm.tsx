
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"


export default function RegisterForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your Phone number below to create a new  account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    type="text"
                                    placeholder="092569*****"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">

                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required />

                                <Label htmlFor="password">Confirm Password</Label>
                                <Input id=" confirm-password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full" asChild>
                                <Link to="/">Sign Up</Link>

                            </Button>
                            <Button variant="outline" className="w-full" >

                                Sign Up with Google

                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            AllReady  had an account?{" "}

                            <Link to="/login" className="underline underline-offset-4"> Sign up</Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
