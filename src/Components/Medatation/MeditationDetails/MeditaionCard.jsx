import { Rating } from '@smastrom/react-rating'
import React from 'react'
import meditation2 from "../../assets/images/meditaion2.jpg";


export default function MeditationCard() {
  return (
    <div className='mb-3'>
        <div><img src={meditation2} className=" w-100" alt="meditation" /></div>
        <h2 className="header2-size mt-2">Yoga meditation for sleep</h2>
        <div className="d-flex pb-3 justify-content-between">
        <span className="color">Devid Procyshyn</span>
        <Rating className="rating-size" value={2} readOnly />
      </div>
    </div>
  )
}
