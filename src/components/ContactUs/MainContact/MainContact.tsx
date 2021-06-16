import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactSlider from '../ContactSlider/ContactSlider';
import ContactStory from '../ContactStory/ContactStory';

const MainContact = () => {
    return (
        <div>
            <ContactForm></ContactForm>
            <ContactStory></ContactStory>
            <ContactSlider></ContactSlider>
        </div>
    );
};

export default MainContact;