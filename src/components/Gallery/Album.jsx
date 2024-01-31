import React from 'react'
import EventsGallery from "./EventsGallery/EventsGallery"
import PrizeGallery from './PrizeGallery/PrizeGallery'
import "./albumstyle.css"
const Album = () => {
  return (
    <div className='albumbackground '>
         <EventsGallery/>
         <PrizeGallery/>
    </div>
  )
}

export default Album
