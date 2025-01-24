import React from 'react';
import Navber from './Navber/Navber';
import BAnner from '../Banner/BAnner';
import Services from '../Services/Services';
import Profession from '../Profession/Profession';
import REview from '../Review/REview';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    return (
        <div>
            <BAnner></BAnner>
            <Services></Services>
            <Profession></Profession>
            <REview></REview>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;