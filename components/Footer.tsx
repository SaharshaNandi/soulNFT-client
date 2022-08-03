import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-4 justify-between md:justify-evenly bg-cetacean text-slate-400 gap-2 py-2 md:py-4 px-1 md:px-4'>
         
          <div className='flex flex-col text-center justify-evenly w-auto p-0.5'>
            <div className="flex flex-row justify-center gap-1 md:gap-2">
              <img src='https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.png' className='h-5 md:h-8' />
              <h1 className='text-sm md:text-xl font-bold hover:cursor-pointer hover:text-white'>OpenSea</h1>
            </div>
            <a href="https://testnets.opensea.io/collection/warrantynft-1ew74v2vmr">
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>OpenSea: SouL Official</h2>
            </a>
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>FAQs</h2>
          </div>
        
        
          <div className='flex flex-col text-center justify-evenly w-auto'>
            <div className="flex flex-row justify-center gap-1 md:gap-2">
              <img src='https://www.finder.com.au/finder-au/wp-uploads/2020/11/AAVELogo_Supplied_250x250.png' className='h-5 md:h-8' />
              <h1 className='text-sm md:text-xl font-bold hover:cursor-pointer hover:text-white'>About Us</h1>
            </div>
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>Social Media</h2>
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>Memorial</h2>
          </div>
        
        
          <div className='flex flex-col text-center justify-evenly w-auto'>
            <div className="flex flex-row justify-center gap-1 md:gap-2">
              <img src='https://stmaaprodfwsite.blob.core.windows.net/assets/sites/9/2020/05/email-13765-300x300.png' className='h-5 md:h-8' />  
              <h1 className='text-sm md:text-xl font-bold hover:cursor-pointer hover:text-white'>Connect</h1>
            </div>
            <a href="mailto:crush3d0re0s@gmail.com">
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>Contact</h2>
            </a>
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>Twitter</h2>
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>Community Feedback</h2>
          </div>
        
        
          <div className='flex flex-col text-center justify-evenly w-auto '>
            <div className="flex flex-row justify-center gap-1 md:gap-2">
              <img src='https://cdn4.iconfinder.com/data/icons/controls-add-on-flat/48/Contols_-_Add_On-26-512.png' className='h-5 md:h-8' />
              <h1 className='text-sm md:text-xl font-bold hover:cursor-pointer hover:text-white'>Support</h1>
            </div>
            <a href="https://github.com/SaharshaNandi/soulNFT-client/blob/main/contracts/WarrantyNFT.sol">
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>Smart Contracts</h2>
            </a>
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>Customer Service</h2>
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>Privacy & Cookies</h2>
            <h2 className='text-xs md:text-base hover:cursor-pointer hover:text-white'>Security</h2>            
          </div>
        
      </div>
      <div id='copyright' className='text-center py-0 md:py-1 bg-gray-900 text-xs md:text-base hover:cursor-pointer hover:text-white'>
        © 2022 SouL.io All rights reserved.
      </div>
    </>
  )
}

export default Footer