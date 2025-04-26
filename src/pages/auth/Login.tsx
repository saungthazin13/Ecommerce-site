import { Link } from "react-router-dom";
import { icons } from "@/components/icons";
import Banner from "@/data/images/house.webp";
import { LoginForm } from "@/components/auth/LoginForm";


function Login() {
    return (
        <div className=" relative">
            <Link to="/" className="fixed top-6 left-8 flex items-center  text-lg font-bold tracking-tight text-foreground/80 ">
                <icons.Logo className="size-6 mr-2   " aria-hidden="true" />
                <span className="inline-block text-2xl font-bold"> Furniture Shop</span>
            </Link>

            <main className=" grid  min-h-screen grid-cols-1  lg:grid-cols-2">
                <div className=" w-full flex items-center justify-center  px-4 lg:px-0" >
                    <LoginForm />
                </div>
                <div className=" relative  hidden lg:block size-full ">
                    <img src={Banner} alt="Furniture Shop" className=" absolute inset-0 object-cover" />
                </div>
            </main>

        </div>
    );
}

export default Login