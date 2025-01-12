import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadtv, removetv } from "../store/actions/tvActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
const TvDetails = () => {

    const {pathname} = useLocation()
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadtv(id));
    return () => {
      dispatch(removetv);
    };
  }, [id]);
  console.log(info);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)) ,
        url(https://image.tmdb.org/t/p/original/${
          info.details.backdrop_path || info.details.poster_path || ""
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative w-screen h-full px-[10%] "
    >
       <Link className='text-white mb-3 py-2  px-7 hover:bg-blue-600 top-[1%] right-[10%] absolute bg-blue-500' to="/">Home</Link>
      {/* part 1 navigation */}
      <nav className="w-full h-[10vh] items-center text-zinc-100 flex gap-6 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-blue-500 ri-arrow-left-line text-2xl bg-red-500 mr-2 p-1 rounded-full items-center justify-center h-10 w-10 text-white"
        ></Link>
        <a href={info.details.homepage} target="_blank">
          <i className="hover:text-blue-500 ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="hover:text-blue-500 ri-earth-fill"></i>
        </a>
        <a className="hover:text-blue-500"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      {/* part 2 navigation  */}

      <div className="w-full flex  ">
        <img
          className="h-[50vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover "
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.details.backdrop_path || ""
          }`}
          alt=""
        />
        <div className="content ml-[5%] text-white">
            <h1 className="text-5xl text-white">{info.details.name || info.details.title || info.details.original_name || info.details.original_title}
                <small className="text-2xl font-semibold text-zinc-300">({info.details.first_air_date.split("-")[0]})</small>
            </h1>

           <div className="flex mt-3 mb-5  text-white items-center gap-x-5 text-xl">
           {info.details.vote_average && (
            <span className="text-white w-[6vh] text-xl font-semibold flex h-[6vh] justify-center items-center bg-blue-500 rounded-full">
              {(info.details.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
          )}

          <h1 className="font-semibold w-[60px] text-2xl leading-5 ">user score</h1>
          <h1 className="">{info.details.first_air_date}</h1>
          <h1>{info.details.genres.map((g)=>g.name).join(",")} </h1>
          <h1>{info.details.runtime} min </h1>
           </div>

           <h1 className="text-xl font-semibold italic text-zinc-200">{info.details.tagline} </h1>

           <h1 className="text-2xl">Overview</h1>
           <p className="">{info.details.overview} </p>

           <h1 className="text-2xl mt-3 ">Available in languages</h1>
           <p className="mb-7">{info.translations.join(", ")} </p>

           <Link to={`${pathname}/trailer`} className="px-4 py-3 hover:bg-blue-700 bg-blue-600 text-white font-semibold mt-5">
           <i class="mr-2 ri-play-large-fill"></i>Watch Trailer
            </Link>
        </div>
      </div>
     

        {/* part 3 available on platforms  */}

        <div className="w-[70%] flex flex-col gap-y-5 mt-10">
          {info.watchProviders && info.watchProviders.flatrate && (
            <div className="flex items-center text-white gap-8">
              <h1>Available on Platform</h1>
              {info.watchProviders.flatrate.map((w,i) => (
                <img key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${
                    w.logo_path || ""
                  }`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchProviders && info.watchProviders.rent && (
            <div className="flex items-center text-white gap-8">
              <h1>Available on Rent</h1>
              {info.watchProviders.rent.map((w,i) => (
                <img key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${
                    w.logo_path || ""
                  }`}
                  alt=""
                />
              ))}
            </div>
          )}
          {info.watchProviders && info.watchProviders.buy && (
            <div className="flex items-center text-white gap-8">
              <h1>Available to Buy</h1>
              {info.watchProviders.buy.map((w,i) => (
                <img key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${
                    w.logo_path || ""
                  }`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>
        <hr  className="mt-10 mb-10 text-zinc-400"/>
      {/* part 4 seasons  */}
      <h1 className="text-2xl font-semibold text-white">Seasons</h1>
      <div className="w-[100%] flex overflow-x-auto p-5 overflow-y-hidden">
        {info.details.seasons.length > 0 ? (info.details.seasons.map((s, i) => (
          <div className="w-[15vh] mr-[11%] ">
            <img 
              className="h-[40vh] min-w-[14vw] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover "
              src={`https://image.tmdb.org/t/p/original/${
                s.poster_path || ""
              }`}
              alt=""
            />
            <h1 className="text-2xl text-zinc-300 font-semibold mt-3">
              {s.orginal_title ||
                s.title ||
                s.name ||
                s.orginal_name}
            </h1>
          </div>
        )) ): ( <h1 className="text-3xl mt-5 text-white font-black text-center">Nothing to show</h1>)}
      </div>


      <hr  className="mt-10 mb-10 text-zinc-400"/>
        {/* part 5 rec  */}
        <h1 className="text-2xl font-semibold text-white">Recommendations & Similar</h1>
        <HorizontalCards data={ info.recommendations.length > 0
             ? info.recommendations : 
             info.similar}></HorizontalCards>
       <div className="mt-10"></div>
       <Outlet></Outlet>
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
