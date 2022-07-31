import React, { Dispatch, SetStateAction } from 'react'
import { AddItemTabButton } from '../../types/AddItem'
import NextButton from './Misc/NextButton'

type DetailsParams = {
  activeButton: AddItemTabButton,
  setActiveButton: Dispatch<SetStateAction<number>>,
  itemDescription: string,
  setItemDescription: Dispatch<SetStateAction<string>>,
  nftNumber: number,
  setNftNumber: Dispatch<SetStateAction<number>>,
  nftAddress: string,
  setNftAddress: Dispatch<SetStateAction<string>>,
}

const Details = (props: DetailsParams) => {
  const { activeButton, setActiveButton,itemDescription, setItemDescription, nftNumber, setNftNumber, nftAddress, setNftAddress } = props
  return (
    <>
      {/* <div className='items-center w-full'>
        
        <input type='text' className={'px-2 py-2 text-sm md:text-base md:p-3 border-2 border-white card-pop-in w-full outline-2 text-gray-500 ' + activeButton.selectedAltStyle} value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Enter the Product Name & ID" />
      </div> */}

      <div className='items-center w-full'>
        
        <textarea className={'px-2 py-2 h-10 md:h-14 text-sm md:text-base md:p-3 border-2 border-white card-pop-in w-full outline-2 text-gray-500' + activeButton.selectedAltStyle} value={nftAddress} onChange={(e) => setNftAddress(e.target.value)} placeholder="Enter the Address" />
      </div>
      
      <div className='items-center w-full'>
        
        <textarea className={'h-32 md:h-36 px-2 py-2 text-sm md:text-base md:p-3 border-2 border-white card-pop-in w-full outline-2 text-gray-500' + activeButton.selectedAltStyle} value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} placeholder="Enter the Product Description" />
      </div>

      <h2 className='text-sm md:text-base font-bold text-blue-600'>Enter the Number of NFTs that you want to Mint :</h2>

      <div className='items-center w-full'>        
        <input type='number' className={'px-2 py-2 text-sm md:text-base md:p-3 border-2 border-white card-pop-in w-full outline-2 text-gray-500 ' + activeButton.selectedAltStyle} value={nftNumber} onChange={(e) => setNftNumber(Number(e.target.value))} placeholder="Enter the Number of NFTs to be Minted" />
      </div>

      {/* <div className='flex items-center w-full'>
        <input type="checkbox" className={'mr-4 text-sm md:text-base w-4 h-4 md:w-5 md:h-5 shadow-md ' + activeButton.selectedAltStyle} />
        <label htmlFor="soulbound" className="text-sm md:text-base text-red-600">Soulbound NFTs</label>
      </div> */}
      <div className=''>
        <NextButton activeButton={activeButton} setActiveButton={setActiveButton} />
      </div>
    </>
  )
}

export default Details