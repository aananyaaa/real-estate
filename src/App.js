import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyDetails from './pages/PropertyDetails';
import Home from './pages/Home'

function App() {
  return (
  <div className='max-w-[1140px] mx-auto bg-white'>
   
    <Header />
    <Routes  >
    <Route path = '/' element = {<Home/>} />
    {/* <Route Path = '/property/:id' */}
    </Routes>
    <Footer />
  </div>
  );
};

export default App;

