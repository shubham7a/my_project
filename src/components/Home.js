import React from "react";
import image1 from "../assets/Images/image1.jpg";
import logo15 from "../assets/Logos/logo15.png";

const Home = () => {
  return (
    <div className="relative flex ">
      <div className="w-[100%]    overflow-y-hidden ">
        <img src={image1} alt="img1" loading="lazy " className=" lg:w-full md:flex-row flex-wrap md:w-[1200px] md:h-[1320px] " />
      </div>
      <div className="absolute top-[150px] left-[580px]  z-[1] ">
        <img src={logo15} alt="log15" loading="lazy" className="w-[600px] md:w-[420px]  " />
      </div>
    </div>
  );
};

export default Home;
