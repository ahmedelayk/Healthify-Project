import { Rating } from '@smastrom/react-rating'
import React from 'react'


export default function WorkoutsDetailsCard({name,img, another}) {
  return (
    <div className='mb-3'>
        <div><img src={img} className=" w-100 cardd-img" alt="meditation" /></div>
        <h2 className="header2-size mt-2">{name}</h2>
        <div className="d-flex pb-3 justify-content-between">
        <span className="color">{another}</span>
        <Rating className="rating-size" value={2} readOnly />
      </div>
    </div>
  )
}
