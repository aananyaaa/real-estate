import React, { useContext } from 'react';
// import dropDowns
import CountryDropdown from './CountryDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import PropertyDropDown from './PropertyDropdown'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { HouseContext } from './HouseContext';

const Search = () => {
  const {handleClick} = useContext(HouseContext)
  const {houses} = useContext(HouseContext)
  console.log(houses)
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative
    lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur
    rounded-lg'>
      <CountryDropdown/>
      <PriceRangeDropdown/>
      <PropertyDropDown/>
      <button
      onClick = {()=>
        handleClick()
      }
      className='bg-violet-700 hover:bg-violet-900 text-white transition w-full lg:max-w-[170px] h-16 rounded-lg'>
        <SearchIcon/>
      </button>

    </div>
  )
}



export default Search;
