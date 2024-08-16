import React from 'react'


const Hero = () => {
  return (
    <div className='min-h-fit bg-gradient-to-b from-blue-200 via-slate-50 to-transparent py-20'>
        <div className='max-w-4xl mx-auto px-6 pt-20  flex flex-col sm:items-center sm:text-center'>
            <h1 className='text-4xl font-display font-semibold text-gray-900 leading-snug mt-4 sm:text-7xl text-center'>Creating unforgettable memories one event at a time</h1>
            <p className='text-xl mt-4 sm:text-2xl sm:mt-10 text-gray-900'>Make your Ocassion more Beautiful with us</p>
            <div className='mt-12 text-center'>
                <button className='px-8 py-3 text-xl rounded-lg font-semibold text-white bg-blue-800 shadow-sm hover:bg-opacity-90'>Know More</button>
            </div>
            
        </div>
    </div>
  )
}

export default Hero