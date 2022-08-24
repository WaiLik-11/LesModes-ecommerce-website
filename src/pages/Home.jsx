import React from 'react'
import { Navbar, Announcement, Slider, Categories, Products, News, Footer } from '../components';


const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <News />
            <Footer />
        </div>
    );
};

export default Home