import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Project></Project>
            <Resume></Resume>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;