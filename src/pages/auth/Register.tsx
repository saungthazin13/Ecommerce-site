import { Link } from "react-router-dom";
import { icons } from "@/components/icons";
import RegisterForm from "@/components/auth/RegisterForm";

function Register() {
    return (
        <div className=" flex items-center justify-center  min-h-screen px-4">
            <Link to="/" className="fixed top-6 left-8 flex items-center  text-lg font-bold tracking-tight text-foreground/80 ">
                <icons.Logo className="size-6 mr-2   " aria-hidden="true" />
                <span className="inline-block text-2xl font-bold"> Furniture Shop</span>
            </Link>
            <RegisterForm />
        </div>
    )
}

export default Register