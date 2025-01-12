import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "Movie WebApp | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);

  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      const randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log("err", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      setTrending(data.results);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav></Sidenav>
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav></Topnav>
        <Header data={wallpaper || null}></Header>
        <div className="p-5 flex justify-between">
          <h1 className=" text-4xl text-zinc-400 font-semibold">
            Trending
          </h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)}
          ></Dropdown>
        </div>
        <HorizontalCards data={trending} ></HorizontalCards>
      </div>
    </>
  ) : (
    <Loading></Loading>
  );
};

export default Home;
