import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { topPicks } from '../Data/data';

const TopPicks = () => {
  return (
    <>
      <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
      <div className="hidden lg:flex maz-w-[1520px] m-auto py-2 px-2">
        <Splide options={{perPage: 4, gap: "0.5rem", drag: 'free'}}>
      {
        topPicks.map((item)=>{
          return(
            <SplideSlide key={item.id}>
            <div className="rounded-3xl relative">
              <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white px-2">
                <p className='px-2 font-bold'>{item.title}</p>
                <p className='px-2 font-bold text-2xl pt-4'>{item.price}</p>
                <button className='border-dotted border-white border text-white mx-2 absolute bottom-4'>Add To cart</button>
              
              </div>
              <img className='h-[200px] w-full object-cover rounded-lg cursor-pointer hover:scale-105 ease-out duration-300' src={item.img}  />
            </div>
            </SplideSlide>
          )
        })
      }
      </Splide>

      </div>


    
    </>
  )
}

export default TopPicks