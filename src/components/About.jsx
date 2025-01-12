import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div
    style={{
        background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8),rgba(0,0,0,0.9)) ,
        url(https://wallpapercave.com/wp/wp5247231.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
       
      }} 
      className="bg-zinc-900 w-screen flex flex-col h-full  p-[5%]"
    >
         <Link
          onClick={() => navigate(-1)}
          className="hover:bg-blue-600 ri-arrow-left-line text-2xl bg-blue-500 mr-2 p-1 rounded-full items-center justify-center h-10 w-10 text-white"
        ></Link>
        
      <div 
     
      className="items-center   flex justify-center flex-col w-full h-full">
        <div className="text-white items-center justify-center flex flex-col mb-3">
          <h1 className="text-center text-[#3DC2EC] text-4xl font-bold">
            ' Welcome to MOVIE-FY '
          </h1>
          <h2 className=" text-center text-lg font-semibold mb-5">
            Your Ultimate Movie Companion!
          </h2>
          <p className="text-zinc-100 text-center w-[60%]">
            At MOVIEFY, we believe in the magic of cinema. Whether you're a
            die-hard movie buff, a casual viewer, or someone looking for their
            next binge-worthy series, MOVIEFY is here to guide you through the
            ever-expanding universe of entertainment.
          </p>
        </div>
       
      </div>
      <div className="text-white items-center justify-center flex flex-col  mb-3 mt-5">
          <h1 className="text-center text-2xl font-bold text-[#b6c5f9] ">What we Offer</h1>
          <ul className="ml-[10%]">
          <li>
          <h2 className=" text-lg font-semibold mb-1 mt-3 ">
             Trending Movies & Shows
          </h2>
          <p className="text-zinc-400 w-[60%]">
            Stay updated with the hottest trends in the world of entertainment.
            Check out what's buzzing globally with our regularly updated
            trending section.
          </p>
          </li>
          <li>
          <h2 className=" text-lg font-semibold mb-1 mt-5 ">
          Detailed Information
          </h2>
          <p className="text-zinc-400 w-[60%]">
          Dive deep into your favorite movies and shows. From cast details to synopses, trailers, and behind-the-scenes tidbits, MOVIEFY has it all.
          </p>
          </li>
          <li>
          <h2 className=" text-lg font-semibold mb-1 mt-5 ">
          Personalized Recommendations

          </h2>
          <p className="text-zinc-400 w-[60%]">
          Discover content tailored just for you. Our smart filters and categories help you find movies and shows based on your taste.
          </p>
          </li>
          <li>
          <h2 className=" text-lg font-semibold mb-1 mt-5 ">
          Seamless Navigation

          </h2>
          <p className="text-zinc-400 w-[60%]">
          With an intuitive interface and powerful search tools, MOVIEFY makes finding your next watch a breeze.
          </p>
          </li>
          </ul>
        </div>
    </div>
  );
};

export default About;
