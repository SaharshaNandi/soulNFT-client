// import React, { Dispatch, SetStateAction } from 'react';
// import { AddItemTabButton } from '../../types/AddItem';
// import ItemDiscount from './Misc/ItemDiscount'
// import NextButton from './Misc/NextButton';

// type Props = {
//   activeButton: AddItemTabButton,
//   setActiveButton: Dispatch<SetStateAction<number>>,
//   discountPercentage: number,
//   setDiscountPercentage: Dispatch<SetStateAction<number>>,
//   itemName: string,
//   setItemName: Dispatch<SetStateAction<string>>,
// }

// const Loyalty = (props: Props) => {
//   const { activeButton, setActiveButton, discountPercentage, setDiscountPercentage, itemName, setItemName } = props;
//   return (
//     <>
//       <h1 className='font-semibold text-sm md:text-base text-rose-500 tracking-wide'>
//         We hereby confirm that the undermentioned product is available for sale at a discount of {discountPercentage}% excluding taxes and additional shipping charges, conditions apply* 
//       </h1>
//       <div>
//         <div className='grid grid-cols-2 w-full'>
//           <h1 className='text-rose-500 text-left font-bold text-lg md:text-xl'>Product ID</h1>
//           <h1 className='text-rose-500 text-center md:text-left font-bold text-lg md:text-xl'>Discount %</h1>
//         </div>
//         <div className='flex flex-col gap-y-4 hover:cursor-default'>
//           <ItemDiscount activeButton={activeButton} setActiveButton={setActiveButton} discountPercentage={discountPercentage} setDiscountPercentage={setDiscountPercentage} itemName={itemName} setItemName={setItemName}/>
//         </div>
//       </div>
//       <div className='flex items-center justify-between w-full gap-x-8'>
//         <button
//           className='button-pop-out py-2 md:py-3 px-8 md:px-12 mt-2 md:mt-4 font-spacemono border-4 border-white text-base font-bold text-blue-500 bg-yellow-300 hover:shadow-sm hover:bg-blue-200 ease-in duration-300'>
//           Skip
//         </button>
//         <NextButton activeButton={activeButton} setActiveButton={setActiveButton} />
//       </div>
//     </>
//   )
// }

// export default Loyalty

export {}