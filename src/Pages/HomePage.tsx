import landPageImage from '../assets/landingPage.png';
import downloadAppImage from '../assets/download.png';
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
        <div className=" bg-red-50 rounded-lg shadow-lg py-3 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-3xl font-bold tracking-tight text-red-600">
            Feast on Mumbai's flavors, one bite at a time!
            </h1>
            <span>Food is just a click away!!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img className='rounded-lg' src={landPageImage} alt="landingImage" />
            <div className='flex flex-col text-center items-center justify-center'>
              <span className=' text-3xl font-bold tracking-tighter'>
                Order takeaway even faster!!
                </span>
              <span>
                Download our official Mobile app for faster ordering and personalised recommendation 
              </span>
              <img src={downloadAppImage} alt="download app" />
            </div>
        </div>
    </div>
  )
}
