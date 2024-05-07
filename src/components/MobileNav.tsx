import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";


export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-red-500"/>
        </SheetTrigger>
        <SheetContent className=" space-y-3 bg-red-50">
            <SheetTitle>
                <span>Welcome to Food4u</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex flex-col gap-4">
                <div className="flex-1 items-center rounded-lg text-center hover:text-red-500
                    hover:bg-red-100 py-3 text-black hover:shadow-lg transition-all ease-in delay-75
                     cursor-pointer ">
                    Home
                </div>
                <div className="flex-1 items-center rounded-lg text-center hover:text-red-500
                    hover:bg-red-100 py-3 text-black hover:shadow-lg transition-all ease-in delay-75
                     cursor-pointer ">
                    Cart
                </div>
                <div className="flex-1 items-center rounded-lg text-center hover:text-red-500
                    hover:bg-red-100 py-3 text-black hover:shadow-lg transition-all ease-in delay-75
                     cursor-pointer ">
                    Track Order
                </div>
                <div className="flex-1 items-center rounded-lg text-center hover:text-red-500
                    hover:bg-red-100 py-3 text-black hover:shadow-lg transition-all ease-in delay-75
                     cursor-pointer ">
                    About Us
                </div>
                <Button className="flex-1 font-bold bg-red-500">Log In</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}
