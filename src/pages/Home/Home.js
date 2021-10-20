import React from 'react';
// import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import HomeDoctor from '../HomeDoctor/HomeDoctor';
import HomePageService from '../HomePageService/HomePageService';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <HomePageService></HomePageService>
            <HomeDoctor></HomeDoctor>

        </div>
    );
};

export default Home;