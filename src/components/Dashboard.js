import Footer from "./Footer"
import Navbar from "./Navbar"
import logo from '../components/images/logo.png'
import { useEffect, useState } from "react";
import navbarlogo from '../components/images/navbarlogo.png'
import Slogan from "./Slogan";

const Dashboard=()=>{
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-screen">
          <img className="loading-logo" src={navbarlogo} alt="App Logo" />
        </div>
      ) : (
        <>
          <Navbar />
           <Slogan/>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Dashboard