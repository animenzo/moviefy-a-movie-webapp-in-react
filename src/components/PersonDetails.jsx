import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadperson, removeperson } from "../store/actions/personActions";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
const PersonDetails = () => {
  const [category,setCategory] = useState("movie")
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  console.log(info);

  return info ? (
    <div className="w-screen h-full px-[15%] ">
      <Link className='text-white mb-3 py-2  px-7 hover:bg-blue-600 top-[1%] right-[10%] absolute bg-blue-500' to="/">Home</Link>
      {/* part 1 navigation */}
      <nav className="w-full h-[10vh] items-center text-zinc-100 flex gap-6 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-blue-500 ri-arrow-left-line text-2xl bg-red-500 mr-2 p-1 rounded-full items-center justify-center h-10 w-10 text-white"
        ></Link>
      </nav>

      {/* part 2 left poster and details */}

      <div className="w-full  flex ">
        <div className="w-[20%]">
          <img
            className="h-[35vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover "
            src={`https://image.tmdb.org/t/p/original/${
              info.details.profile_path || ""
            }`}
            alt=""
          />
          <hr className="mt-10 mb-5 text-zinc-400" />

          {/* social links  */}
          <div className="text-2xl text-white gap-x-10">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <i className="hover:text-blue-500 ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalId.facebook_id}`}
            >
              <i className="hover:text-blue-500 ri-facebook-circle-fill"></i>
            </a>
            <a
              className="hover:text-blue-500"
              target="_blank"
              href={`https://www.instagram.com/${info.externalId.instagram_id}/`}
            >
              <i className="hover:text-blue-500 ri-instagram-fill"></i>
            </a>
            <a
              className="hover:text-blue-500"
              target="_blank"
              href={`https://x.com/${info.externalId.twitter_id}/`}
            >
              <i className="hover:text-blue-500 ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* personal info  */}
          <h1 className="font-semibold my-2  text-2xl text-zinc-400">
            Person Info
          </h1>

          <h1 className="font-semibold  text-lg text-zinc-200">Known for </h1>
          <h1 className="text-zinc-200">{info.details.know_for_department}</h1>

          <h1 className="font-semibold  text-lg text-zinc-200">Gender </h1>
          <h1 className="text-zinc-200">
            {info.details.gender === 2 ? "Male" : "Female"}
          </h1>
        </div>

        {/* part 2 info  */}
        <div className="w-[80%] ml-[5%] text-white">

          <h1 className="font-semibold my-2  text-2xl text-zinc-400">
            {info.details.name}
          </h1>

          <h1 className="font-semibold  text-xl text-zinc-200">Bio </h1>
          <p className="text-zinc-400 mt-3">{info.details.biography}</p>

          <h1 className="font-semibold mt-3 text-xl text-zinc-200">Starred In </h1>
          <HorizontalCards data={info.combinedCredits.cast}></HorizontalCards>

          <div className="w-full flex justify-between">
          <h1 className="font-semibold mt-3 text-xl text-zinc-200">Acting </h1>
          <Dropdown title="category" options={["tv","movie"]} func={(e)=>setCategory(e.target.value)}></Dropdown>
          </div>

          <div className="w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-sm shadow-[rgba(255,255,255,0.3)] border-zinc-700 border-2 p-5 list-disc text-zinc-300">

            {info[category + "Credits"].cast.map((c,i)=>(
              <li key={i} className="hover:text-blue-200 duration-300 cursor-pointer">
              <Link to={`/${category}/details/${c.id}`} className="">
                <span >
                  {" "}
                  {
                    c.name ||
                    c.title ||
                    c.original_name ||
                    c.original_title || " "

              }</span>
                <span className="block ml-5">{
                  c.character && `Character Played : ${c.character}`
                  }</span>

              </Link>
            </li>
            ))}
            
          </div>
        </div>
      </div>

  
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
