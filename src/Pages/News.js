import React, { useState, useEffect } from "react";
import { UserEntertedInput } from "../Context/SearchContext";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import ScrollTop from "../Components/scrollTopBtn"

export default function News() {
  const { userinput } = UserEntertedInput();
  const [dataarray, setdataarray] = useState([]);
  const  [loading, setloading]  = useState(false)
  const [moredata, setmoredata] = useState([]);

  const apikey = process.env.React_App_News_Api
  let api;
  let api2;
  const cate1 = "top-headlines";
  const cate2 = "everything";

  useEffect(() => {
    api = `https://newsapi.org/v2/${cate1}?apiKey=${apikey}&q=${userinput}&page=1`;

    fetchdata();
    async function fetchdata() {
      if (userinput) {
        setloading(true)
        try {
          let data = await fetch(api);
          let response = await data.json();
          setdataarray(response.articles);
          setloading(false)
        } catch (error) {
          console.log("unable to fetch data");
        }
      }
    }
    everything();
  }, [userinput]);

  async function everything() {
    api2 = `https://newsapi.org/v2/${cate2}?apiKey=${apikey}&q=${userinput}&page=1`;
    if (userinput) {
      try {
        let everydata = await fetch(api2);
        let everydatares = await everydata.json();
        setmoredata(dataarray.concat(everydatares.articles));
      } catch (error) {
        console.log("unable to fetch data");
      }
    }
  }
  return (
    <>
    {loading && <Loader/>}
    <ScrollTop/>
     {loading === false && <div className="px-52 py-12">
        {moredata.map((e,index) => {
          let { description, title, url, urlToImage } = e;
          return (
            <div key={index} className="my-10 space-x-4">
                {url  && url !== "https://removed.com" ? <Link className="flex justify-between items-center news-box space-x-10" target="_blank" to={url}>
                <div className="w-[50vw]">
                  <h2 className="text-[20px] font-[600]">{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="w-[20vw]">
                  <img className="rounded-lg" src={urlToImage} alt="" />
                </div>
            </Link> : ' '}
              </div>
          );
        })}
      </div>}
    </>
  );
}
