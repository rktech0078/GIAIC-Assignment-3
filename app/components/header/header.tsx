import Image from "next/image"
import logo from "../../images/logo-remove.png"

export default function Header() {
    return (
        <div className="w-full float-left">

            <div className="float-left">
                <Image src={logo} alt="logo" className="w-56 animate-wiggle animate-infinite animate-duration-1000 animate-delay-[600ms]" />
            </div>

            <div className="float-right">
                <button type="button" className="text-neutral-50 font-bold mr-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... rounded-full w-32 h-10">
                    Log-in
                </button>
                <button type="button" className="text-neutral-50 font-bold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... rounded-full w-32 h-10">
                    Sign-up
                </button>
            </div>

        </div>
    )
}

export function Navbar() {
    return (

        <div className="float-left w-full ">

            <ul className="flex items-center justify-center py-3 [&>*]:px-3">
                <button><li className="font-bold rounded-xl bg-orange-500 hover:animate-pulse text-white w-20 py-2 px-4">Home</li></button>
                <button><li className="font-bold rounded-xl bg-orange-500 hover:animate-pulse text-white w-20 py-2 px-4" >About</li></button>
                <button><li className="font-bold rounded-xl bg-orange-500 hover:animate-pulse text-white w-20 py-2 px-0" >Services</li></button>
                <button><li className="font-bold rounded-xl bg-orange-500 hover:animate-pulse text-white w-20 py-2 px-1" >Contact</li></button>
            </ul>

        </div>
    )
}


// className="bg-white dark:bg-slate-800 rounded-lg px-6 py-2 ring-1 ring-slate-900/5 shadow-xl m-4"
{/* <h1 className="bg-gradient-to-r from-indigo-500 ...">Hello</h1> */ }
// className="ml-4 mt-4 w-52 p-1"

{/* <h1 className="text-3xl font-bold text-center mt-4 mb-8">Welcome to the <span className="text-blue-800 animate-pulse">Moon Walk</span></h1> */ }

