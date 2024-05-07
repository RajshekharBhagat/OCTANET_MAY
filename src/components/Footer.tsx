
export default function Footer() {
  return (
    <div className=" bg-red-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className=" text-white text-3xl tracking-tight font-bold">
                Food4u
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Terms & Condition</span>
                <span>Privacy & Policy</span>
            </span>
        </div>
    </div>
  )
}
