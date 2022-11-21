import React, { Dispatch, SetStateAction, useState , useEffect } from 'react'
import { AddItemTabButton } from '../../types/AddItem'
import NextButton from './Misc/NextButton';
import { ethers } from 'ethers';
import WarrantyNFT from './artifacts/WarrantyNFT.json';
import { useRouter } from 'next/router';
declare var window : any

type Props = {
  activeButton: AddItemTabButton,
  setActiveButton: Dispatch<SetStateAction<number>>,
  itemDescription: string,
  setItemDescription: Dispatch<SetStateAction<string>>,
  warrantyMonths: number,
  setWarrantyMonths: Dispatch<SetStateAction<number>>,
  // loyaltyMonths: number,
  // setLoyaltyMonths: Dispatch<SetStateAction<number>>,
  // loyaltyPoints: number,
  // setLoyaltyPoints: Dispatch<SetStateAction<number>>,
  nftNumber: number,
  setNftNumber: Dispatch<SetStateAction<number>>,
  nftAddress: string,
  setNftAddress: Dispatch<SetStateAction<string>>,
}

const Warranty = (props: Props) => {
  const { activeButton, setActiveButton, itemDescription, setItemDescription, warrantyMonths, setWarrantyMonths, nftNumber,setNftNumber,nftAddress,setNftAddress} = props;
  // const [provider, setProvider] = useState({})
  // useEffect(() => {
  // }, []);
  const Router = useRouter();

  if (typeof window.ethereum == 'undefined') {
    Router.push('/metaredirect')
    // return
  } 
  // const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum): ethers.getDefaultProvider())

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contractAddress = '0x525A0294Cc0c9BBEced22fa5beB92c960874696f';
    // get the smart contract
    const contract = new ethers.Contract(contractAddress, WarrantyNFT.abi, signer);
    const mintToken = async () => {
      try{
        const connection = contract.connect(signer);
        const result = await contract.safeMint(nftAddress, nftNumber, warrantyMonths);
        await result.wait();
      } catch {
        alert('Something went wrong. Check the Address!')
      }
    };

    const checkExpiry = async() =>{
      try{
      // const connection = contract.connect(signer);
      await contract.checkTimeStamp();
      } catch {
        alert('Something went wrong');
      }
    }

  return (
    <>
      <h1 className='font-semibold text-sm md:text-base text-orange-500 tracking-wide'>
      This is to certify that this device is covered under a warranty assurance of {warrantyMonths} Months. Upon expiration of this warranty period, any services or repairs will be subject to a service charge.
      </h1>
      <div className='flex items-center gap-x-4'>
        <div className='flex items-cente gap-x-1 md:gap-x-2 p-1 w-fit rounded-2xl card-pop-in border-2 border-white'>
          <button
            className={'rounded-xl button-pop-out-2 hover:shadow-sm hover:text-orange-600 font-bold border-2 border-white px-3 pb-1 text-3xl ' + activeButton.selectedStyle + ' text-orange-400 bg-gray-200'}
            onClick={() => setWarrantyMonths(oldState => oldState - 1)}
          >
            -
          </button>
          <span className='text-xl md:text-2xl font-bold text-orange-500 text-center w-8 mt-2 md:mt-1 mx-2'>{warrantyMonths}</span>
          <button
            className={'rounded-xl button-pop-out-2 hover:shadow-sm hover:text-orange-600 font-bold border-2 border-white px-2 pb-0 md:pb-1 text-3xl ' + activeButton.selectedStyle + ' text-orange-400 bg-gray-200'}
            onClick={() => setWarrantyMonths(oldState => oldState + 1)}
          >
            +
          </button>
        </div>
        <h1 className='text-2xl md:text-3xl text-orange-500'>Months</h1>
      </div>

      {/* <div className='flex gap-x-6 w-full items-center'>
        <span className='text-xl md:text-2xl text-orange-500 font-bold border-2 w-20 card-pop-in text-center border-white py-2 px-4'>{loyaltyMonths}
        </span>
        <div className='flex flex-col w-full'>
          <label htmlFor="loyalty-months"
            className='mb-2 text-base text-orange-500 font-semibold px-4'>
            Additional Loyalty Warranty
          </label>
          <input type="range"
            min={0}
            max={warrantyMonths}
            value={loyaltyMonths}
            onChange={(e) => setLoyaltyMonths(Number(e.target.value))}
            className='accent-yellow-300 rounded-lg w-full hover:cursor-pointer '
          />
        </div>
      </div> */}

      {/* <div className='flex gap-x-6 w-full items-center'>
        <span className='text-xl md:text-2xl text-orange-500 font-bold border-2 w-20 card-pop-in text-center border-white py-2 px-4'>{loyaltyPoints}
        </span>
        <div className='flex flex-col w-full'>
          <label htmlFor="loyalty-months"
            className='mb-2 text-base text-orange-500 font-semibold px-4'>
            Loyalty Points
          </label>
          <input type="range"
            min={0}
            max={10}
            value={loyaltyPoints}
            onChange={(e) => setLoyaltyPoints(Number(e.target.value))}
            className='accent-yellow-300 rounded-lg w-full hover:cursor-pointer '
          />
        </div>
      </div> */}

      <div className='flex items-center justify-between w-full gap-x-8'>
        {/* <button
          className='button-pop-out mt-2 md:mt-4 py-2 md:py-3 px-8 md:px-12 font-spacemono border-4 border-white text-base bg-rose-300 text-rose-600 font-bold hover:bg-rose-400 hover:text-white hover:shadow-sm ease-in duration-300'>
          Skip
        </button> */}
        <button
          className={'mt-2 md:mt-4  rounded-lg button-pop-out hover:shadow-lg text-blue-600 bg-yellow-300 hover:bg-green-400 hover:text-green-800 font-bold border-4 border-white py-2 md:py-3 px-8 md:px-12'}
          onClick={mintToken}>
          Submit
        </button>
        <button
          className='button-pop-out mt-2 md:mt-4 py-2 md:py-3 px-8 md:px-12 font-spacemono border-4 border-white text-base bg-rose-300 text-rose-600 font-bold hover:bg-rose-400 hover:text-white hover:shadow-sm ease-in duration-300'
          onClick={checkExpiry}>
          Expire
        </button>
      </div>
    </>
  )
}

export default Warranty
