import React from "react";
import { UserEntertedInput } from "../Context/SearchContext";
import { useNavigate } from "react-router-dom";
import Suggestions from "../Components/Suggestions";
import Addfunc from "../Components/Addfunc";
import AppLogo from "../Components/Logo";

export default function HomePage() {
  const { setuserinput, searchTerm, setsearchTerm, setdisplay } =
    UserEntertedInput();
  const navigate = useNavigate(); // React Router hook for navigation
  function writesubmit(e) {
    e.preventDefault();
    setuserinput(searchTerm);
    navigate(`/links`);
    setdisplay(false);
  }
  function handleInputChange(e) {
    setsearchTerm(e.target.value);
    setdisplay(true);
  }
  return (
    <div className="flex-col space-y-32">
      <div className="flex justify-between items-center px-12 py-5">
        <AppLogo />
        <Addfunc />
      </div>
      <div className="flex flex-col items-center justify-center space-y-7">
        <div className="flex space-x-2 justify-center items-center">
          <AppLogo />
          <p className="font-bold text-3xl">ExploreHub</p>
        </div>
        <div className='space-y-1'>
    <div>
      <form onSubmit={writesubmit}>
        <input value={searchTerm} placeholder='Search or type URL' onChange={handleInputChange} className='pl-3 p-[10px] w-[50vw] outline-none border-none rounded input-bar' type="search"  />
      </form>
    </div>
    <Suggestions/>
    </div>
      </div>
    </div>
  );
}
