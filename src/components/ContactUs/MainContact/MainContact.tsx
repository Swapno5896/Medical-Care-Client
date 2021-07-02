import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactMap from '../ContactMap/ContactMap';
import ContactSlider from '../ContactSlider/ContactSlider';
import ContactStory from '../ContactStory/ContactStory';

const MainContact = () => {
    return (
        <div>
            <ContactMap />
            <ContactForm></ContactForm>
            <ContactStory></ContactStory>
            <ContactSlider></ContactSlider>
        </div>
    );
};

export default MainContact;