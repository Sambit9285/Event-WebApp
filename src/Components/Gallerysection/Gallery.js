import React from 'react'


const Gallery = () => {
  const data = [

    {
      imagelink: 'img2.jpg'
    },
    {
      imagelink: 'img3.jpg'
    },
    {
      imagelink: 'img4.jpg'
    },
    {
      imagelink: 'img5.jpg'
    },
    {
      imagelink: 'img4.jpg'
    },
    {
      imagelink: 'img3.jpg'
    },
  ]
  return (
    <section className="py-20 bg-blue-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-3 flex flex-col items-start gap-10 xl:gap-14">
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <h1 className="text-gray-900 dark:text-white font-semibold text-4xl">
            Gallery
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data.map(({ imagelink }, index) => (
            <div key={index}>
              <img
                className="h-100 w-screen max-w-full rounded-lg object-cover object-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-700"
                src={imagelink}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery