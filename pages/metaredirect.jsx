import React from 'react'

function metaredirect() {
  return (
    <div className="grid h-screen place-items-center bg-cyan-50">
        <h1 className='w-full text-xl md:text-5xl text-center font-spacemono font-bold  text-gray-600 justify-center items-center pt-10'>
          Please Install Metamask From The Link Below</h1>
          <a href='https://metamask.io/'><button className='bg-blue-500 hover:bg-blue-700 text-lg text-white font-bold py-2 px-4 rounded'>
            Click Here</button></a>
            <img className='h-[90%]' src='https://static.wixstatic.com/media/9cbaf5_1c9449d147a842a59dcf1e74a65f442c~mv2.jpg/v1/fill/w_740,h_496,al_c,q_90/9cbaf5_1c9449d147a842a59dcf1e74a65f442c~mv2.webp' 
            alt='metamaskpng'/>
    </div>
  )
}

export default metaredirect
