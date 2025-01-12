import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg"

const Cards = ({ data, title }) => {
  console.log(data);

  return (
    <div className="p-[5%] bg-zinc-800 flex flex-wrap w-full">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%] "
          key={i}
        >
          <img
            className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover "
            src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path || ""
            }`: noimage}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 font-semibold mt-3">
            {c.orginal_title || c.title || c.name || c.orginal_name}
          </h1>

          {c.vote_average && (
            <div className="text-white w-[6vh] text-xl font-semibold flex h-[6vh] justify-center items-center bg-blue-400 rounded-full absolute right-[-10%] bottom-[25%]">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};
// https://www.eporner.com/video-IvF2P51uAIZ/wristwatch-that-stops-time-freezing-time/?trx=1227735290aee694b81473a256bea12420712

export default Cards;
