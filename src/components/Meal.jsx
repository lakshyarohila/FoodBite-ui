import React from 'react'
import { categories, mealData } from '../Data/data'
import { useState } from 'react'

const Meal = () => {
  const [foods, setFood] = useState(mealData)
  const fillterCat = (category)=>{
    setFood(
      mealData.filter((item)=>{
        return item.category === category;
      })
    )
  }
  return (
    <div  className=' max-w-[1520px] m-auto px-4 py-12'>
       <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>

       <div className="flex flex-col lg:flex-row justify-center">

        <div className="flex justify-center md:justify-center">
          <button onClick={()=>setFood(mealData)} className='m-1 border-orange-700 text-white border hover:bg-white hover:text-orange-700 hover:border-orange-600 bg-orange-700 px-4 rounded-lg'>All</button>
          <button onClick={()=>fillterCat("pizza")} className='m-1 border-orange-700 text-white border hover:bg-white hover:text-orange-700 hover:border-orange-600 bg-orange-700 px-4 rounded-lg'>Pizza</button>
          <button onClick={()=>fillterCat("chicken")} className='m-1 border-orange-700 text-white border hover:bg-white hover:text-orange-700 hover:border-orange-600 bg-orange-700 px-4 rounded-lg'>Chiken</button>
          <button onClick={()=>fillterCat("salad")} className='m-1 border-orange-700 text-white border hover:bg-white hover:text-orange-700 hover:border-orange-600 bg-orange-700 px-4 rounded-lg'>Salad</button>

        </div>
       </div>

       <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
    {
      foods.map((item)=>{
          return (
            <div key={item.id} className="border-none hover:scale-105 duration-300 ">
              <img className='w-full h-[200px] object-cover rounded-lg p-4 ' src={item.image} alt="" />
             <div className="flex justify-between py-2 px-4">
              <p className='font-bold '>{item.name}</p>

              <p className='bg-orange-600 py-3 font-bold px-2 border-8 h-18 w-18 rounded-full text-white -mt-10'>{item.price}</p>

             </div>
             <div className="pl-2 py-4">
              <p className='text-center hover:bg-orange-500 hover:rounded-xl w-fit px-2'>View More <span><span><i class="fa-solid fa-arrow-right text-center"></i></span></span></p>
             </div>

            </div>
          )
      })
    }



       </div>


    </div>
  )
}

export default Meal