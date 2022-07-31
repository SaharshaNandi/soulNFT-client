<meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />

import Modal from '../components/Modal';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import type { NextPage } from 'next'
import {useState, useEffect } from 'react'
import Details from '../components/AddItem/Details';
// import Loyalty from '../components/AddItem/Discounts';
import Warranty from '../components/AddItem/Warranty';
import { AddItemTabButton } from '../types/AddItem';

const styles = {
  sideImage: 'w-1/5 md:w-auto md:h-[100px] card-pop-in p-0.5 md:p-1 md:object-cover md:object-center hover:scale-110 ease-out duration-500 hover:cursor-pointer',
}

const sideImages = ['https://cdna.artstation.com/p/assets/images/images/014/547/354/large/gabriel-rosa-screenshot011.jpg?1544446593', 'https://cdnb.artstation.com/p/assets/images/images/014/547/355/large/gabriel-rosa-screenshot012.jpg?1544446595', 'https://cdnb.artstation.com/p/assets/images/images/014/547/349/large/gabriel-rosa-screenshot015.jpg?1544446587', 'https://cdnb.artstation.com/p/assets/images/images/014/547/357/large/gabriel-rosa-screenshot013.jpg?1544446598', 'https://cdnb.artstation.com/p/assets/images/images/014/547/345/large/gabriel-rosa-screenshot014.jpg?1544446580',]

const tabButtons: AddItemTabButton[] = [
  { text: 'Details', style: ' text-base font-semibold text-blue-500 ', selectedStyle: ' font-bold text-blue-700 bg-blue-200 -shadow-md ease-in duration-300 ', selectedAltStyle: ' outline-blue-300 caret-blue-500  accent-blue-300 text-blue-400 ' },

  { text: 'Warranty', style: ' text-base font-semibold text-orange-500', selectedStyle: ' font-bold text-orange-600 bg-yellow-200 -shadow-md ease-in duration-300 ', selectedAltStyle: ' outline-orange-300 caret-orange-500  accent-orange-300 text-orange-400 ' },

  // { text: 'Discounts', style: ' text-base font-semibold text-rose-500 ', selectedStyle: ' font-bold text-rose-700 bg-rose-200 -shadow-md ease-in duration-300 ', selectedAltStyle: ' outline-rose-300 caret-rose-500 accent-rose-300 text-rose-400 ' },
]

// * image url
// https://media.gq.com/photos/6064d9607e3efcdc77d39b00/master/w_3240,h_2160,c_limit/05-nzxt_rtfkt-4k--.jpg


const Home: NextPage = () => {
  const [newImage, setNewImage] = useState('');
  // const [productVideo, setProductVideo] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [itemDescription, setItemDescription] = useState('');
  const [nftNumber, setNftNumber] = useState(1);
  const [nftAddress, setNftAddress] = useState('');
  const [warrantyMonths, setWarrantyMonths] = useState(12);
  const [loyaltyMonths, setLoyaltyMonths] = useState(4);
  const [loyaltyPoints, setLoyaltyPoints] = useState(2);
  const [showModal, setShowModal] = useState(false);
  {/*const [discountPercentage, setDiscountPercentage] = useState(10);*/}

  return (
    <div className='grid h-auto w-full text-gray-600 bg-color-base'>
        <Navbar showModal={showModal} setShowModal={setShowModal}/>
        <Banner />
        {showModal && <Modal setShowModal={setShowModal}/>}
        <main className="h-full md:h-fit mt-1 md:pb-4 bg-color-base ">{
          <div className='flex flex-col-reverse font-spacemono md:flex-row justify-end h-full w-full'>
          <div className='flex flex-col justify-between mt-2.5 md:mt-0 card-pop-out-2 p-3 md:p-6 mx-1 md:mx-4 gap-3 md:w-5/12'>
            <div className='card-pop-in flex justify-between items-center w-full border-2 border-white'>
              {tabButtons.map((button, i) => {
                return (
                  <div className='w-full' key={i}>
                    <button
                      className={' flex justify-center w-full h-full py-2 md:py-3 ' +
                        (i === activeButton ?
                          ('button-pop-out-2 scale-105 ease-in duration-300') :
                          button.style) + ' ' +
                        (i === activeButton ? (button.selectedStyle) : '')
                      }
                      onClick={() => {
                        setActiveButton(i);
                      }}>
                      {button.text}
                    </button>
                  </div>
                )
              })}
            </div>
            {
              activeButton === 0 && <Details activeButton={tabButtons[activeButton]} setActiveButton={setActiveButton} itemDescription={itemDescription} setItemDescription={setItemDescription} nftNumber={nftNumber} setNftNumber={setNftNumber} nftAddress={nftAddress} setNftAddress={setNftAddress} />
            }
            {
              activeButton === 1 && <Warranty activeButton={tabButtons[activeButton]} setActiveButton={setActiveButton} itemDescription={itemDescription} setItemDescription={setItemDescription} warrantyMonths={warrantyMonths} setWarrantyMonths={setWarrantyMonths} loyaltyMonths={loyaltyMonths} setLoyaltyMonths={setLoyaltyMonths} loyaltyPoints={loyaltyPoints} setLoyaltyPoints={setLoyaltyPoints}
              nftNumber={nftNumber} setNftNumber={setNftNumber} nftAddress={nftAddress} setNftAddress={setNftAddress} />
            }
            {/*[{
              activeButton === 2 && <Loyalty activeButton={tabButtons[activeButton]} setActiveButton={setActiveButton} discountPercentage={discountPercentage} setDiscountPercentage={setDiscountPercentage} itemName={itemName} setItemName={setItemName}/>
            }]*/}
          </div>
          <div className='flex flex-col-reverse md:flex-row justify-center w-auto'>
            <div className='flex flex-row md:flex-col px-1 md:px-2'>
              {
                sideImages.map((image, i) => {
                  return <img src={image} alt='' key={i} className={styles.sideImage} onClick={() => {
                    setNewImage('');
                    setActiveImage(i)
                  }} />;
                })
              }
            </div>
            
            <div className='px-2 md:px-4'>
              <div className='p-0'>
                <div className='overflow-hidden rounded-lg'>
                  <img src={newImage ? newImage : sideImages[activeImage]} alt='Enter the correct image url below' className='w-auto h-auto md:w-[600px] md:h-[400px] overflow-hidden card-pop-out hover:scale-110 duration-500 object-cover hover:cursor-pointer ' />
                </div>
              </div>
              
              <div className='flex mt-2 mb-2 md:mt-4 items-center'>
                <input type='url' className={'p-2 md:p-3 text-sm md:text-base border-2 border-white card-pop-in w-full outline-2 text-gray-600 ' + tabButtons[activeButton].selectedAltStyle} value={newImage} onChange={(e) => setNewImage(e.target.value)} placeholder="Enter the URL to Product Image"/>
                <button className='rounded-xl button-pop-out-2 hover:border-green-400 hover:bg-green-200 hover:shadow-sm font-bold text-green-500 bg-gray-200 border-2 border-white ml-2 md:mx-4 px-2 py-1 md:py-0 pb-0 md:pb-3 text-3xl md:text-5xl ease-in duration-300'>+</button>
              </div>
    
            </div>
          </div>
        </div>
    
        }</main>
        <Footer />
      </div>
  )
}

export default Home