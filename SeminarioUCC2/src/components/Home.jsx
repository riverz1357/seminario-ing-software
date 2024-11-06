import React from 'react';
import Banner from './Banner';
import About from './About';
import InfoView from './InfoView';
import Calender from './Calender';
import Map from './Map';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <InfoView />
            <br/>
            <br/>
            <Calender />
            <Map/>
            <br/>
            <br/>
            <br/>
            <br/>   
            <br/>
            <br/>
            <Footer/>     
        </div>
    );
};

export default Home;