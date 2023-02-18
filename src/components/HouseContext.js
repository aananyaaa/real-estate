import { CloseOutlined, Create } from '@mui/icons-material';
import Reac,{useState,useContext,useEffect,createContext} from 'react';
import {housesData} from '../data';



export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const[houses,setHouses] = useState(housesData);
  const[price,setPrice] = useState('price-range (any)');
  const[country, setCountry] = useState('location (any)');
  const[countries, setCountires] = useState([]);
  const[property, setProperty] = useState('PropertyType (any)');
  const[properties, setProperties] = useState([]);
  const[loading,setLoading] = useState(false);

  useEffect(()=>{
    const allCountries = houses.map((house) =>{
      return house.country;
    });
    // console.log(allCountries)
    const uniqueCountries = ['location (any)', ...new Set(allCountries)]
    // console.log(uniqueCountries);



    setCountires(uniqueCountries);
  },[]);


  useEffect(()=>{
    const allProperties = houses.map((house) =>{
      return house.type;
    });
    // console.log(allCountries)
    const uniqueProperties = ['PropertyType (any)', ...new Set(allProperties)]
    // console.log(uniqueCountries);



    setProperties(uniqueProperties);
  },[]);
 
  const handleClick = () =>{
    setLoading(true);
    //console.log(country,property,price);

    const isDefault = (str)=>{
      return str.split(' ').includes('(any)');
    }
    // console.log(isDefault(country))

    // console.log(price)
    const minPrice = (parseInt(price.split(' ')[0]))
    console.log(minPrice)
    const maxPrice = (parseInt(price.split(' ')[2]))
    console.log(maxPrice) 

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price)
      

        //all values selected
      if(house.country === country && house.type === property && housePrice>=minPrice && housePrice<=maxPrice)
      {
        
        return house;
        
      }


      //if all default values
      if(isDefault(country) && isDefault(property) && isDefault(price))
      {
        return house;
      }

      //if country is not default
      if(!isDefault(country) && isDefault(property) && isDefault(price))
      {
        return house.country===country;
      }
      //property not defualt
      if(isDefault(country) && !isDefault(property) && isDefault(price))
      {
        return house.type===property;
      }
      //price not defautl
      if(isDefault(country) && isDefault(property) && !isDefault(price))
      {
        if(housePrice>=minPrice && housePrice<=maxPrice){
          return house
        }
      }
      //if country and property not defualt
      if(!isDefault(country) && !isDefault(property) && isDefault(price))
      {
        return house.country === country && house.type===property
      }

      //if property and price are not default
      if(isDefault(country) && !isDefault(property) && !isDefault(price))
      {
         if(housePrice>=minPrice && housePrice<=maxPrice)
         {
        return house.type === property 
         }
      }
       //if price and country are not default
       if(!isDefault(country) && isDefault(property) && !isDefault(price))
       {
          if(housePrice>=minPrice && housePrice<=maxPrice)
          {
         return house.country===country
          }
       }
    });

    setTimeout(() => {
      return newHouses.length<1?setHouses([]) : setHouses(newHouses);
      setLoading(false);
    },1000);





  
  };
  


  return (
  <HouseContext.Provider value={{
   houses,
   setHouses,
   price,
   setPrice,
   country,
   setCountry,
   countries,
   setCountires,
   property,setProperty,
   properties,
   setProperties,
   handleClick,
   loading,
   setLoading
  }}
    >
      {children}
  </HouseContext.Provider>

  );
};

export default HouseContextProvider;
