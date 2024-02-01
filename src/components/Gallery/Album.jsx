import React, { useState } from "react";
import EventsGallery from "./EventsGallery/EventsGallery";
import PrizeGallery from "./PrizeGallery/PrizeGallery";
import "./albumstyle.css";

const Album = () => {
  const [show, setshow] = useState(false)
  const [showprize, setshowprize] = useState(false)
  const [latest, setlatest] = useState(true)
  const events = ()=>{
    setshow(!show);
    setshowprize(false)
    setlatest(false)
    
  }
  const prizes = ()=>{
    setshowprize(!showprize);
    setshow(false)
    setlatest(false)
  }
  const  latestAlbum =()=>{
    setlatest(!latest);
    setshowprize(false);
    setshow(false)
  }
  return (
    <div className="albumbackground md:p-10 lg:p-0 ">
      <div className="lg:px-12  pt-12 flex justify-between">
        {latest?<div className="text-amber-700 text-5xl">Gallery-Latest</div>:null}
        {show?<div className="text-amber-700 text-5xl">Gallery-Events</div>:null}
        {showprize?<div className="text-amber-700 text-5xl">Gallery-Prizes</div>:null}
        <div className="">
          <ul className="flex  font-medium gap-8 text-2xl">
            <li>
              <div onClick={latestAlbum} className="cursor-pointer hover:scale-110 transition-transform hover:text-amber-600">Latest</div>
            </li>
            <li>
              <div onClick={events} className="cursor-pointer hover:scale-110 transition-transform hover:text-amber-600">Events</div>
            </li>
            <li>
              <div className="cursor-pointer hover:scale-110 transition-transform hover:text-amber-600" onClick={prizes}>Prizes</div>
            </li>
          </ul>
        </div>
      </div>
      {latest?<div><EventsGallery/><PrizeGallery/></div>:null}
      {show?<div >
        <EventsGallery />
      </div>:null}
      {showprize?<div >
        <PrizeGallery />
      </div>:null}
      
      
    </div>
  );
};

export default Album;
