import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  // Safeguard to avoid rendering if data is null/undefined
  if (!data) {
    return null; // You can replace this with a loader or fallback UI if desired
  }

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)) ,
        url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path || ""
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="items-start w-full h-[70vh] flex flex-col justify-end p-[5%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.original_title || data.title || data.name || data.original_name || "Untitled"}
      </h1>
      <p className="w-[70%] mt-3 mb-3 text-white">
        {data.overview ? `${data.overview.slice(0, 250)}...` : "No overview available"}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-600">more</Link>
      </p>
      <p className="text-white">
        <i className="text-blue-500 ri-live-fill"></i>
        {data.media_type ? data.media_type.toUpperCase() : "Unknown"}
        <i className="text-blue-500 ri-calendar-2-fill ml-3"></i>
        {data.release_date || data.first_air_date || "Unknown Date"}
        <i className="text-blue-500 ri-global-line ml-3"></i>
        {data.original_language ? data.original_language.toUpperCase() : "Unknown Language"}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-4 bg-blue-500 text-white font-semibold mt-5">
      <i class="mr-2 ri-play-large-fill"></i>Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
