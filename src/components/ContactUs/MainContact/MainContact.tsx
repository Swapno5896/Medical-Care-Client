import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactMap from '../ContactMap/ContactMap';
import ContactSlider from '../ContactSlider/ContactSlider';
import ContactStory from '../ContactStory/ContactStory';

const MainContact = () => {
    return (
        <>
            <ContactMap />
            <ContactForm></ContactForm>
            <ContactStory></ContactStory>
            <ContactSlider></ContactSlider>
        </>
    );
};

export default MainContact;