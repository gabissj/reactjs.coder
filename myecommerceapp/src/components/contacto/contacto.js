import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



import "./contacto.css"

const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e16oq5l', 'template_sfnn2if', form.current, 'zgq-PWkr-Azeh-Dc3')
            .then((result) => {
                console.log(result.text);
                form.current.reset()
            },
            (error) => {
                console.log(error.text);
            });
    };
    return (
        <form ref={form} onSubmit={sendEmail} className="field">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>

    )
}

export default Contacto