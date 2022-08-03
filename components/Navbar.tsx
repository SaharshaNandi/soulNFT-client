import React from 'react';
import { useRouter } from 'next/router';
import { ethers } from "ethers";
import {useState, useEffect, SetStateAction, Dispatch } from 'react'
import { useMoralis } from 'react-moralis';

type Props = {
  showModal : boolean,
  setShowModal : Dispatch<SetStateAction<boolean>>,
}

const Navbar = (props: Props) => {
const {showModal,setShowModal} = props;
const Router = useRouter()
const { Moralis,authenticate,isAuthenticated,user,logout } = useMoralis()



async function Login() {
  if (typeof window.ethereum == 'undefined') {
    Router.push('/metaredirect')
    return
  }

  if(isAuthenticated){
    // logout()
    // alert("Disconnecting your Metamask wallet");
    setShowModal(true)
  } else {
    authenticate({provider : "metamask"})
  }
}
  
function logOut(){
  Router.push("/login");
}
  
  return (
    <div className='grid py-1 px-1.5 md:py-3 md:px-8 bg-gray-900 bg-opacity-95 backdrop-blur-sm h-fit sticky top-0 z-10'>
      <div className="flex justify-between">
        <div className="flex ml-0 md:ml-2 justify-center hover:cursor-pointer">
          <img className="h-10 md:h-12" src="https://www.finder.com.au/finder-au/wp-uploads/2020/11/AAVELogo_Supplied_250x250.png" alt="Main_Icon" />
          <h1 className="pt-0 md:pt-1 font-extrabold text-2xl font-spacemono md:text-3xl bg-gradient-to-r from-purple-700 to-pink-400 md:tracking-wide text-transparent bg-clip-text animate-text">SouL</h1>  
        </div> 
        <div className="flex gap-1 md:gap-4">
          {/* <button
            className=' w-8 h-4 my-auto md:h-6 md:w-12 md-h-6 rounded-2xl bg-white flex items-center transition duration-300 focus:outline-none shadow border-[1px] md:border-2 border-yellow-300'>
              <div id="switch-toggle" className='w-5 md:h-7 h-5 md:w-7 relative rounded-full transition duration-500 transform bg-yellow-400 -translate-x-2 p-0.5 md:p-1 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
          </button> */}
          <div className=' bg-blue dark:bg-gray-200 text-white dark:text-gray-700 transition-colors duration-300 rounded-w-1/2 '>

          </div>
          <img className="h-8 md:h-12 my-auto hover:border-2 border-purple-800 rounded-full cursor-pointer" src='https://cdn-icons-png.flaticon.com/512/1053/1053210.png?w=360' alt='logout_icon' onClick={logOut}/>
          <button
            className='button-pop-out shadow-none hover:bg-green-400 text-green-700 font-spacemono font-semibold text-sm md:text-base bg-green-300 p-1 md:p-3 rounded-1xl border-1 border-gray-100' onClick={Login}>
              {isAuthenticated?`User : ...${user?.get('ethAddress').slice(-5)}` : 'Connect'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar