import { Button } from "./ui/button";

export default function MainNav() {
  return (

    <div className="flex gap-5 items-center justify-center" >
      <div className="text-black  hover:text-red-500 transition-colors ease-linear delay-75 cursor-pointer">
        Home
      </div>
      <div className="text-black  hover:text-red-500 transition-colors ease-linear delay-75 cursor-pointer">
        Cart
      </div>
      <div className="text-black  hover:text-red-500 transition-colors ease-linear delay-75 cursor-pointer">
        Track Order
      </div>
      <div className="text-black  hover:text-red-500 transition-colors ease-linear delay-75 cursor-pointer">
        About Us
      </div>
      <Button variant='ghost' className="font-bold hover:text-red-500 hover:bg-red-50">
        Log In
      </Button>
    </div>
  )
}
