import React from "react";
import logo14 from "../assets/Logos/logo14.png";
import logo13 from "../assets/Logos/logo13.png";
import logo10 from "../assets/Logos/logo10.png";
import logo9 from "../assets/Logos/logo9.png";
import logo8 from "../assets/Logos/logo8.png";
import logo16 from "../assets/Logos/logo16.jpg";
import logo7 from "../assets/Logos/logo7.png";
import logo21 from "../assets/Logos/logo21.png";
import image9 from "../assets/Images/image9.jpg";
import image7 from "../assets/Images/image7.jpg";
import logo4 from "../assets/Logos/logo4.png";
import logo5 from "../assets/Logos/logo5.png";
import logo19 from "../assets/Logos/logo19.png";
import logo18 from "../assets/Logos/logo18.jpg";

const Team = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={logo14}
          alt="logo14"
          loading="lazy"
          className=" absolute top-[10px] left-[300px] md:w-[100px] md:top-[30px] md:left-[270px] lg:w-[150px]"
        />
        <img
          src={logo13}
          alt="logo13"
          loading="lazy"
          className=" absolute top-[70px] left-[450px] md:left-[250px] md:top-[55px] lg:left-[400px] lg:top-[85px]"
        />
        <img
          src={logo10}
          alt="logo10"
          loading="lazy"
          className=" absolute top-[45px] left-[560px] md:left-[350px] md:top-[40px] lg:left-[500px] lg:top-[60px] "
        />
      </div>

      <div className="relative top-[165px]">
        <img src={logo16} alt="logo16" loading="lazy" />
        <img
          src={image7}
          alt="image7"
          loading="lazy"
          className="absolute top-[-1px] left-[280px] md:left-[170px] lg:left-[330px]"
        />
        <img
          src={logo8}
          alt="logo8"
          loading="lazy"
          className=" absolute left-[460px] top-[10px] md:left-[340px] lg:left-[500px]"
        />
        <img
          src={logo9}
          alt="logo9"
          loading="lazy"
          className=" absolute left-[300px] top-[8px] md:left-[190px] lg:left-[350px]"
        />
      </div>

      <div className="relative">
        <img
          src={image9}
          alt="image9"
          loading="lazy"
          className="absolute top-[166px] w-[1480px] left-[1px] md:h-[965px]"
        />
        <img
          src={image7}
          alt="image7"
          loading="lazy"
          className="absolute top-[250px] left-[300px] w-[350px] h-[250px]  opacity-25"
        />
        <img
          src={logo21}
          alt="logo21"
          loading="lazy"
          className="absolute top-[330px] left-[350px] "
        />
        <img
          src={logo7}
          alt="logo7"
          loading="lazy"
          className="absolute top-[280px] left-[350px]"
        />
      </div>

      <div className="relative top-[1000px] md:top-[1130px]">
        <img
          src={logo18}
          alt="logo18"
          loading="lazy"
          className="absolute h-[148px]"
        />
        <img
          src={logo4}
          alt="logo4"
          loading="lazy"
          className="absolute top-[55px] right-[200px]"
        />
        <img
          src={logo5}
          alt="logo5"
          loading="lazy"
          className="absolute top-[40px] left-[350px]"
        />
        <img
          src={logo19}
          alt="logo19"
          loading="lazy"
          className="absolute top-[40px] left-[300px]"
        />
      </div>
    </div>
  );
};

export default Team;
