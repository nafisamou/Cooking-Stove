import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Services from '../../Services/Services';
import SpecialService from '../../Services/SpecialService';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import './Home.css'


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel></Carousel>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <SpecialService></SpecialService>
        </div>
    );
};

export default Home;