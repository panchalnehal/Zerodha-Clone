import React from 'react';
import LeftSection from './LeftSection';
import Hero from '.Hero';
import Universe from './Universe';
import RightSection from './RightSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Products() {
    return ( 
        <>
        <LeftSection/>
        <Hero/>
        <Universe/>
        <RightSection/>
        <Footer/>
        <Navbar/>
        </>
     );
}

export default Products;