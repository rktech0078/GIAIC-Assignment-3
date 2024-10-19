import Footer from "./components/footer/footer";
import Header, { Navbar } from "./components/header/header";
import Firstsec, { Secondsec } from "./components/sections/section";

export default function Home (){
  return (
    <div>
      <Header/>
      <Navbar/> 
      <Firstsec/>
      <Secondsec/>
      <Footer/>
    </div>
  )
}

