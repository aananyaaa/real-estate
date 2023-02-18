import React, { useContext,useState } from 'react';
import { HouseContext } from './HouseContext';
import {Menu} from '@headlessui/react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'
import { flexbox } from '@mui/system';
import { MenuItem } from '@mui/material';

const CountryDropdown = () => {
  const {country,setCountry,countries} = useContext(HouseContext)
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
    {country}
    </div>
    <div className='text-[13px]'>
      select your place
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
      {countries.map((country,index) => {
          return (
            <Menu.Item 
            className='cursor-pointer hover:text-violet-700 transition'
            onClick = { () => setCountry(country)}
            
            as='li'
            key={index}
            > 
              {country}
            </Menu.Item>
          );
      })}

    </Menu.Items>

    </Menu>
    );
};

export default CountryDropdown;
