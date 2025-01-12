import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
 

  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");

  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "MOVIE-FY | People"
  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      // setperson(data.results)
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setPage(1);
      setPerson([]);
      getPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="w-full px-[5%] mt-[2%] flex justify-between items-center">
        <h1 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-blue-500 ri-arrow-left-line text-2xl bg-red-500 mr-2 p-[1px] rounded-full text-white"
          ></i>
          People
        </h1>
        <div className="flex items-start w-[80%]">
          <Topnav></Topnav>
          
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        loader={<h1>Loading...</h1>}
        hasMore={true}
      >
        <Cards data={person} title="person"></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default People