import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.jpg"
const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`search/multi?query=${query}`);
      setSearches(data.results);
      
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-full h-[10vh] flex justify-start pl-[10%] items-center relative">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="w-[50%] mx-4 py-2 px-4 text-xl outline-none rounded-full border-zinc-700 border-2 text-zinc-200 bg-transparent"
        type="text"
        placeholder="Search..."
      />
      {query.length > 0 && (
        <i
          onClick={() => {
            setQuery("");
          }}
          className="text-zinc-400 text-3xl  ri-close-fill"
        ></i>
      )}

      <div className="z-[100] w-[50%] left-[12%] bg-zinc-200 max-h-[50vh] absolute  rounded-lg top-[90%]   overflow-auto">
        {searches.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="over:text-zinc-black hover:bg-zinc-300 p-10 duration:300 w-[100%] flex justify-start rounded-md items-center border-b-2 border-zinc-100"
          >
            <img className="text-zinc-700 font-semibold h  w-[12vh] h-[12vh] object-cover rounded mr-5 shadow-lg" src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path }` : noimage} alt="" />
            <span>
              {s.orginal_title || s.title || s.name || s.orginal_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// api read acces token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDMwNTU2NTQwZWQ5MzA4MmUyMjAzOWExM2YyMDg1ZSIsIm5iZiI6MTczNjM0NzA1OC44NzAwMDAxLCJzdWIiOiI2NzdlOGRiMjA0NGI2Y2E2NzY0ZTY0NmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RqydPncKx_XdmspMcvawkV1Y4Ou4fvrfStzG4KHJKQk

// api key
// 4430556540ed93082e22039a13f2085e

export default Topnav;
