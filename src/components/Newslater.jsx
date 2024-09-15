import React from 'react'

const Newslater = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>

        <div className="mx-auto grid lg:grid-cols-3">

            <div className="lg:col-span-2 my-4 ">
                <h1>Need Advice On How To Improve Your Flow?</h1>
                <p>Sign Up To Join Our Daily Updates</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input type="email" placeholder='Sign Up using Email' className='p-3 flex w-full rounded-md text-black' />
                    <button className='bg-[#00df9a] text-white rounded-lg font-medium w-[200px] ml-4 my-6 px-6 border-none h-10'>Submit</button>
                </div>
                <p>We are Concerned about your data , read{""}</p>
                <span className='text-[#00df9a]'>Privacy Policy <i class="fa-solid fa-shield-halved"></i></span>
            </div>
            <hr className='my-5 bg-white' />
        </div>
    </div>
  )
}

export default Newslater