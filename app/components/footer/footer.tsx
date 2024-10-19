import Link from "next/link"


export default function Footer() {
    return (
        <div>

        <div className="border bg-gradient-to-r from-teal-500 to-purple-500 w-full h-96 mt-9 rounded-3xl flex justify-between">
            <div className="w-80 h-64 p-6 m-6">
                <h1 className="text-white font-bold text-4xl m-3 hover:animate-rotate-x">Contact us</h1>
                <ul className="text-white text-lg m-3 mt-5 leading-loose">
                    <li className="hover:underline hover:font-bold">Phone: 0312-2345678</li>
                    <li className="hover:underline hover:font-bold">Email: rk8466995</li>
                    <li className="hover:underline hover:font-bold">Address: Street#35, Sector 36-B, Landhi Karachi</li>
                    <li className="hover:underline hover:font-bold">Website: info@gmail.com</li>
                </ul>
            </div>

            <div className="w-80 h-64 p-6 m-6">
                <h1 className="text-white font-bold text-4xl m-3 hover:animate-rotate-x">Social Links</h1>
                <ul className="text-white text-lg m-3 mt-5 leading-loose pl-14">
                    <li className="hover:underline hover:font-bold"><Link href="https://www.facebook.com/profile.php?id=100051895934107" target="_">Facebook</Link></li>
                    <li className="hover:underline hover:font-bold"><Link href="https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/" target="_">LinkedIn</Link></li>
                    <li className="hover:underline hover:font-bold"><Link href="">Youtube</Link></li>
                    <li className="hover:underline hover:font-bold"><Link href="">Instagram</Link></li>
                    <li className="hover:underline hover:font-bold"><Link href="">Twitter</Link></li>
                </ul>
            </div>


            <div className="w-80 h-64 p-6 m-6">
            <h1 className="text-white font-bold text-4xl m-3 hover:animate-rotate-x">Projects</h1>
            <ul className="text-white text-lg m-3 mt-5 leading-loose pl-6">
                    <li className="hover:underline hover:font-bold">Project-1</li>
                    <li className="hover:underline hover:font-bold">Project-2</li>
                    <li className="hover:underline hover:font-bold">Project-3</li>
                    <li className="hover:underline hover:font-bold">Project-4</li>
                    <li className="hover:underline hover:font-bold">Project-5</li>
                </ul>
            </div>
        </div>
        
        <div className="m-4 text-center">
            <h1 className="font-bold animate-rotate-x animate-infinite animate-delay-[2000ms] animate-duration-[2000ms] hover:bg-gradient-to-r from-teal-400 to-blue-500">&copy; All Right reserved (2024)</h1>
            <h1 className="font-bold animate-rotate-x animate-infinite animate-delay-[2000ms] animate-duration-[2000ms] hover:bg-gradient-to-r from-teal-400 to-blue-500">Designed by: Abdul Rafay Khan</h1>
        </div>

        </div>
        

    )
}

{/* <p className="text-white font-bold text-3xl"></p> */}
