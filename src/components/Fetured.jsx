import React from 'react'

import { useState } from 'react'

const Fetured = () => {
  const slider = [
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
  },
  {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
  },
  {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
  }
 
  ]
  const [currentIndex, setCurrentIndex] = useState(1)
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative'>

        <div className="w-full h-full  rounded-xl bg-cover duration-500 bg-center" style={{backgroundImage:`url${slider[currentIndex].url}`}}></div>


    </div>
  )
}

export default Fetured