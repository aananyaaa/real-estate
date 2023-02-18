import React, { useContext } from 'react';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropIcon from '@mui/icons-material/Crop';



//will receive a prop of each house
const House = ({house}) => {
  const {image,type,country,address,bedrooms,bathrooms,
  surface,price} = house;
  console.log(house)
  return (
    <div className='bg-white shadow-1  mb-5 p-5 rounded-lg  rounded-tl-[90px]  w-full max-w-[325px] mx-auto cursor-pointer hover:shadow-2xl transition'>
    <img  className = 'mb-8'  src={image} alt="image of house"/>
    <div className='mb-4 flex gap-x-1 text-sm'>
      <div className='bg-violet-600 rounded-full text-white px-3'>{type}</div>
      <div className='bg-emerald-600 rounded-full text-white px-3'>{country}</div>
    </div>
    <div className='text-lg font-semibold max-width-[230px'>{address}</div>
    <div className='flex gap-x-4 my-4'>
      <div className='flex items-center'>
        <div>
          <BedIcon/>
        </div>
        <div>
          {bedrooms}
        </div>
      </div>
    
      <div className='flex items-center'>
        <div>
          <BathtubIcon/>
        </div>
        <div>
          {bathrooms}
        </div>
      </div>
      <div className='flex items-center'>
        <div>
          <CropIcon/>
        </div>
        <div>
          {surface}
        </div>
      </div>
    </div>
    <div  className='text-lg text-emerald-600 '>{price}</div>
    </div>

  );
};

export default House;
