import React from 'react'

const Banner = () => {
  return (
    <>
        <div className='relative flex h-full justify-center'>
            <img className='w-full h-auto overflow-hidden' src='/soft_devlop.gif' alt='Banner'/>
            <div className="flex flex-col absolute top-0 h-full w-full md:py-20 justify-center md:gap-4">
              <h2 className='font-spacemono text-center text-xl md:text-5xl cursor-default text-white'>Soul NFT : Official</h2>
              <p className="text-center cursor-default text-lg md:text-3xl text-slate-500 hover:text-white">Team-BugBytes</p>
            </div>
        </div>
    </>
  )
}

export default Banner