import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>

      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div className="div">
          <h1 className='w-full text-3xl font-bold text-white'>Food <span className='text-orange-400 font-bold text-3xl'>Bite</span></h1> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ea reiciendis explicabo obcaecati saepe iusto similique beatae maiores at qui.</p>
          <div className="flex justify-between md:w-[75%] my-6">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Footer