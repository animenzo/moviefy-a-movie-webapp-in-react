import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
 

  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");

  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "MOVIE-FY | Movies"
  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      // setMovie(data.results)
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="w-full px-[5%] mt-[2%] flex justify-between items-center">
        <h1 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-blue-500 ri-arrow-left-line text-2xl bg-red-500 mr-2 p-[1px] rounded-full text-white"
          ></i>{" "}
          Movie<small className="mr-2 text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-start w-[80%]">
          <Topnav></Topnav>
          <Dropdown
            title="Category"
            options={["top_rated", "upcoming","now_playing"]}
            func={(e) => setCategory(e.target.value)}
          ></Dropdown>
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        loader={<h1>Loading...</h1>}
        hasMore={true}
      >
        <Cards data={movie} title="movie"></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default Movie