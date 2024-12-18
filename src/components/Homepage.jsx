import React from "react";
import image from "../assets/Images/hero image.svg";
import Logo from "../assets/Images/airlift-logo.svg";
import Video1 from "../assets/Videos/Video1.mp4";
import Bg1 from '../assets/Images/bv-background-2.svg'
import Bg2 from '../assets/Images/improve-google-ranking.svg'


const Homepage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full h-[80vh] bg-[#F7F5FB] flex items-center flex-col">
        <div className="w-[60%] h-[100px] flex justify-between items-center pl-2">
          <div className="text-[20px] font-semibold w-[150px] h-[50px] text-white flex justify-center items-center">
            <img src={Logo} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="flex gap-2 w-[100px] h-[50px] text-black font-bold justify-center items-center">
            <nav>About Us</nav>
          </div>
          <div className="w-[350px] h-[80px] flex justify-between items-center pr-2">
            <button className="w-[160px] h-[50px] flex items-center justify-center rounded-lg bg-purple-900 cursor-pointer text-white font-bold">
              Sign Up
            </button>
            <button className="w-[160px] h-[50px] flex items-center justify-center rounded-lg bg-white cursor-pointer font-bold ">
              Log In
            </button>
          </div>
        </div>
        <div className="w-[60%] h-[690px] flex">
          <div className="w-[70%] h-full flex justify-center">
            <div className="w-[100%] h-[450px] text-left line-[10px] mt-[70px]">
              <h1 className="text-[60px] font-extrabold">
                Ultra Fast{" "}
                <span className="text-[#512DA8]">WordPress Sites</span> with the
                Click of a Button
              </h1>
              <p className="text-[20px] font-normal mt-5">
                Airlift will instantly speed up your WordPress site and boost
                your Google Core Web Vitals scores. It is a complete performance
                solution for your website including caching, CDN, image
                optimization, css improvements and more.
              </p>
              <button className="w-[250px] h-[50px] mt-10 flex items-center justify-center rounded-lg  bg-purple-900 cursor-pointer text-white font-bold">
                Get Started Now
              </button>
            </div>
          </div>
          <div className="w-[30%] h-full">
            <div className="w-full h-full">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-[70vh] mt-[-100px] rounded-lg">
        <video
          class="object-cover h-full w-full rounded-lg"
          controls
          autoPlay="{true}"
        >
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full h-[200px] flex items-center">
        <div className="w-[50%] h-[70px]">
          <img src={Bg1} alt="" className="w-full h-full object-contain"/>
        </div>
      </div>
      <div className="w-[60%] h-[60vh] flex">
        <div className="w-[50%] h-full rounded-lg">
          <div className="w-full h-[200px] bg-red-700 hover:rounded-lg hover:shadow-md"></div>
          <div className="w-full h-[200px] bg-indigo-700 hover:rounded-lg"></div>
          <div className="w-full h-[195px] bg-purple-700 hover:rounded-lg"></div>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="w-[450px] h-[500px] bg-purple-800 rounded-lg flex items-center justify-center">
            <img src={Bg2} alt="" className="w-[50%] h-[50%] object-fill"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
