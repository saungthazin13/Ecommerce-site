import { icons } from "@/components/icons";
import { Link } from "react-router-dom";
import type { User } from "@/types";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


interface UserProps {
  user: User,
}

function AuthDropDown({ user }: UserProps) {
  if (!user) {
    return (
      <Button asChild size="sm">
        <Link to="/signin" >Sign In
          <span className="sr-only">Sign In</span>
        </Link>
      </Button>
    )

  }
  const initialName = ` ${user.firstName.charAt(0) ?? ''} ${user.lastName.charAt(0) ?? ''}`;


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className=" size-8 rounded-full">
          <Avatar className=" size-8">
            <AvatarImage src={user.imageUrl} alt={user.username} />
            <AvatarFallback>{initialName}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 " forceMount align="end">
        <DropdownMenuLabel className=" font-normal">
          <div className=" flex flex-col space-y-1 ">
            <p className=" text-sm font-medium  pb-1">{user.firstName} {user.lastName}</p>
            <p className=" text-sm leading-none text-muted-foreground  ">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/" > <icons.dashboard className=" size-4 mr-2 " aria-hidden="true" />Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </Link>

          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/" > <icons.gear className=" size-4 mr-2 " aria-hidden="true" /> Setting
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>

        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/Login" > <icons.exit className=" size-4 mr-2 " aria-hidden="true" /> Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AuthDropDown;