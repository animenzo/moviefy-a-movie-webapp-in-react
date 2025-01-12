import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimage from "/noimage.jpg"

const HorizontalCards = ({ data, func }) => {
  return (
    <div className="w-[100%] flex overflow-x-auto p-5 overflow-y-hidden">
      {data.length > 0 ? data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[15%] h-[40vh] mr-5   bg-zinc-900 "
        >
          <img
            className="w-full h-[45%] object-cover"
            src={d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path || ""
            }`: noimage}
            alt=""
          />
          <div className="p-3 h-[55%] text-white overflow-y-auto">
            <h1 className=" text-xl font-semibold text-white">
              {d.original_title ||
                d.title ||
                d.name ||
                d.original_name ||
                "Untitled"}
            </h1>
            <p className="text-sm ">
              {d.overview
                ? `${d.overview.slice(0, 50)}...`
                : "No overview available"}
              <Link className="text-zinc-600">more</Link>
            </p>
          </div>
        </Link>
      )): <h1 className="text-white text-2xl">Nothing to Show buddy...</h1> }
    </div>
  );
};

export default HorizontalCards;
