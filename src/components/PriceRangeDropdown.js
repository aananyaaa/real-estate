import React, { useContext,useState } from 'react';
import { HouseContext } from './HouseContext';
import {Menu} from '@headlessui/react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'
import { flexbox } from '@mui/system';
import { MenuItem } from '@mui/material';
import { PriceCheckRounded } from '@mui/icons-material';


const PriceRangeDropdown = () => {
  
  
  const prices =[
    {
      val:'price (any)'
    },
    {
      val:'100000 - 1300000'
    },
    {
      val:'130000 - 1600000'
    },
    {
      val:'160000 - 1900000'
    },
    {
      val: '190000 - 2100000'
    },
    {
      val:'210000 - 2400000'
    },
    {
      val:'240000 - 2700000'
    },
  ]


  const {price,setPrice} = useContext(HouseContext)
  // console.log(country)
  // console.log(countries);

  const[isOpen, setIsOpen] = useState(false);

  return(
     <Menu as='div'
  className='dropdown relative'>
    <Menu.Button
    className='dropdown-btn w-full text-left'
    onClick={()=>setIsOpen(!isOpen)}>
      <LocationOnIcon sx={{
        paddingRight: "2px"
          
      }}/>
    
    <div>
    <div className='text-[15px] font-medium leading-tight'>
    {price}
    </div>
    <div className='text-[13px]'>
      select your price range
    </div>
    </div>
    {isOpen?(
      <RiArrowUpSLine
      className="dropdown-icon-secondary"/>
    ):(
      <RiArrowDownSLine
      className="dropdown-icon-secondary"/>
    )
  }
   
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {prices.map((price,index) => {
          return (
            <Menu.Item 
            className='cursor-pointer hover:text-violet-700 transition'
            onClick = { () => setPrice(price.val)}
            
            as='li'
            key={index}
            > 
              {price.val}
            </Menu.Item>
          );
      })}

    </Menu.Items>

    </Menu>
    );
};

export default PriceRangeDropdown;