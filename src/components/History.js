import React from "react";
import logo1 from "../assets/Logos/logo1.png";
import logo2 from "../assets/Logos/logo2.png";
import logo3 from "../assets/Logos/logo3.png";
import image3 from "../assets/Images/image3.jpg";
import image4 from "../assets/Images/image4.jpg";
import image5 from "../assets/Images/image5.jpg";
import image6 from "../assets/Images/image6.jpg";
import logo23 from "../assets/Logos/logo23.png";
import logo24 from "../assets/Logos/logo24.png";

const History = () => {
  return (
    <div>
      <div className=" relative">
        <img
          src={image3}
          alt="image3"
          loading="lazy"
          className=" w-[1490px] left-2 md:w-[1200px] md:h-[1100px] lg:w-[1500px]"
        />
      </div>
      <img
        src={logo1}
        alt="logo1"
        loading="lazy"
        className=" absolute top-[100px] left-[250px] md:left-[90px] lg:left-[290px]"
      />
      <img
        src={logo3}
        alt="logo3"
        loading="lazy"
        className=" absolute top-[160px] left-[370px] md:left-[210px] lg:left-[412px] lg:top-[170px]"
      />
      <img
        src={logo2}
        alt="logo2"
        loading="lazy"
        className=" absolute top-[230px] left-[320px] md:left-[180px] lg:left-[350px]"
      />

      <div className="relative">
        <img
          src={image6}
          alt="image6"
          loading="lazy"
          className=" absolute h-[240px] w-[1480px]  opacity-55 "
        />
        <img
          src={image4}
          alt="image4"
          loading="lazy"
          className=" absolute top-[40px] left-[250px] md:left-[90px] md:w-[200px] lg:left-[300px]"
        />
        <img
          src={image5}
          alt="image5"
          loading="lazy"
          className=" absolute top-[40px]  left-[510px] md:left-[300px] md:w-[200px] lg:left-[510px]"
        />
        <img
          src={image4}
          alt="image4"
          loading="lazy"
          className=" absolute  top-[40px] right-[450px] md:right-[300px]  md:w-[200px] lg:right-[555px]"
        />
        <img
          src={image5}
          alt="image5"
          loading="lazy"
          className=" absolute  top-[40px] right-[90px]  md:w-[200px] lg:right-[345px]"
        />
      </div>

      <div className="relative top-[20px]">
        <img
          src={logo23}
          alt="logo23"
          loading="lazy"
          className=" absolute top-[200px] left-[750px] md:left-[470px]  md:top-[180px] lg:left-[700px] lg:top-[170px]"
        />
        <img
          src={logo24}
          alt="logo24"
          loading="lazy"
          className=" absolute top-[200px] left-[760px] md:left-[480px] md:top-[180px] lg:left-[710px]  lg:top-[170px]"
        />
        <img
          src={logo24}
          alt="logo24"
          loading="lazy"
          className=" absolute top-[200px] left-[770px] md:left-[490px] md:top-[180px] lg:left-[720px] lg:top-[170px] "
        />
      </div>
    </div>
  );
};

export default History;
