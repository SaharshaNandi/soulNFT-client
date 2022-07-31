// import React, { Dispatch, SetStateAction, useState } from 'react'
// import { AddItemTabButton } from '../../../types/AddItem';

// type Props = {
//   activeButton: AddItemTabButton,
//   setActiveButton: Dispatch<SetStateAction<number>>,
//   discountPercentage: number,
//   setDiscountPercentage: Dispatch<SetStateAction<number>>,
//   itemName: string,
//   setItemName: Dispatch<SetStateAction<string>>,
// }

// const ItemDiscount = (props: Props) => {
//   const { activeButton, setActiveButton, discountPercentage, setDiscountPercentage, itemName, setItemName } = props;
//   return (
//     <>
//       <div className='grid grid-cols-2 w-full '>
//         <span className='text-green-600 text-base font-semibold mt-2 '>{itemName}</span>
//         <div className='flex gap-x-4 w-full justify-center'>
//           <div className="flex flex-col md:flex-row md:gap-2 items-center">
//             <span className='text-xl md:text-2xl text-rose-500 font-bold border-2 w-20 card-pop-in text-center border-white py-2 px-4 my-2'>{discountPercentage}
//             </span>
//               <input type="range"
//                 min={0}
//                 max={100}
//                 value={discountPercentage}
//                 onChange={(e) => setDiscountPercentage(Number(e.target.value))}
//                 className='accent-rose-300 rounded-lg w-full hover:cursor-pointer '
//               />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ItemDiscount

export {}