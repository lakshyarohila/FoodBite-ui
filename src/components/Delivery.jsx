import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery</h3>
      <div className="ma-auto w-[1520px] grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src="https://toxsl.com/themes/new/img/screen/food_banner_image.png" alt="" />
        <div className="flex flex-col justify-center">
          <p className='text-[#00df9a] font-bold'>Get The App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Unlimited offers <span className='text-orange-400'>Grab Now</span></h1>
          <button className='my-6 mx-auto md:mx-0 rounded-lg bg-black text-[#00df9a] font-semibold py-3 w-[200px]'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery