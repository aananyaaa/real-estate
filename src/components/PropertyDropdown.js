import React, { useContext,useState } from 'react';
import { HouseContext } from './HouseContext';
import {Menu} from '@headlessui/react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'
import { flexbox } from '@mui/system';
import { MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const PropertyDropdown = () => {
  const {property,setProperty,properties} = useContext(HouseContext)
  // console.log(country)
  // console.log(countries);

  const[isOpen, setIsOpen] = useState(false);

  return(
     <Menu as='div'
  className='dropdown relative'>
    <Menu.Button
    className='dropdown-btn w-full text-left'
    onClick={()=>setIsOpen(!isOpen)}>
      <HomeIcon sx={{
        paddingRight: "2px"
          
      }}/>
    
    <div>
    <div className='text-[15px] font-medium leading-tight'>
    {property}
    </div>
    <div className='text-[13px]'>
      select your Property-type
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
      {properties.map((property,index) => {
          return (
            <Menu.Item 
            className='cursor-pointer hover:text-violet-700 transition'
            onClick = { () => setProperty(property)}
            
            as='li'
            key={index}
            > 
              {property}
            </Menu.Item>
          );
      })}

    </Menu.Items>

    </Menu>
    );
};

export default PropertyDropdown;
