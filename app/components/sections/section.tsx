import Image from "next/image"
import service from "../../images/service.jpg"
import workout from "../../images/workout.png"
import community from "../../images/Community.png"
import member from "../../images/Membership.png"
import events from "../../images/Events.png"

export default function Firstsec() {
    return (
        <div className="border bg-gradient-to-r from-teal-500 to-purple-500 h-64 w-full rounded-full mt-6 mb-10 float-left">
            <h1 className="text-6xl font-bold text-center m-10 mb-5 animate-jump animate-thrice">Welcome to the <span className="text-white">Moon Walk</span></h1>
            <h1 className="text-center font-bold text-white">Join thousands of businesses using our platform to grow and succeed with cutting-edge technology. </h1>

            <div className="flex justify-center mt-5">
                <button className="transition delay-300 duration-300 ease-in-out bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full m-2 animate-rotate-x animate-thrice">Get Stared</button>
                <button className="transition delay-300 duration-300 ease-in-out bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full m-2 animate-rotate-x animate-thrice">Learn More</button>
            </div>

        </div>

    )
}

// export function Secondsec() {
//     return (
//         <div className="w-full h-96 flex p-0 border border-red-600 border-dashed">
//             <div className="relative">
//                 <Image src={service} alt="service"/>
//                 <h1 className="">Rafay</h1>
//             </div>
            
            
//         </div>
//     )
// }

// export function Secondsec() {
//     return (
//       <div className="relative">
//         <Image src={service} alt="service" className="w-full h-96 rounded-full"/>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-7xl font-bold pt-80">OUR SERVICES</h1>
//         </div>
//       </div>
//     );
//   }

export function Secondsec() {
    return (
      <div className="relative ">
        {/* Background Image */}
        <Image src={service} alt="service" className="w-full h-auto rounded-xl"/>
  
        {/* OUR SERVICES Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-7xl font-bold pt-36">OUR SERVICES</h1>
        </div>
  
        {/* Services Boxes */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8 py-14">
            {/* Box 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:animate-rotate-y">
              <Image src={workout} alt="Workouts" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Workouts</h3>
              <p>Exceptuer sint occaecat cupidatat non proident.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">More</a>
            </div>
  
            {/* Box 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:animate-rotate-y">
              <Image src={community} alt="Community" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p>Exceptuer sint occaecat cupidatat non proident.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">More</a>
            </div>
  
            {/* Box 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:animate-rotate-y">
              <Image src={member} alt="Membership" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Membership</h3>
              <p>Exceptuer sint occaecat cupidatat non proident.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">More</a>
            </div>
  
            {/* Box 4 */}
            <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:animate-rotate-y">
              <Image src={events} alt="Events" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Events</h3>
              <p>Exceptuer sint occaecat cupidatat non proident.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">More</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  


