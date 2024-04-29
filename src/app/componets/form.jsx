'use client'

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './form.css'

// form
export const Form = () => {
  const formRef = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  // sends email
  const sendEmail = (e) => {
  e.preventDefault();
  // ffrom DOM
  const form = e.target;
  const nameInput = form.querySelector("#user_name");
  const emailInput = form.querySelector("#user_email");
  const messageInput = form.querySelector("#message");

  // get data from email JS
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  // start email JS with public key
  emailjs.init(publicKey);

  //input fields
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // send
  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      // if success, change button style
      console.log("Message Sent Successfully");
      form.reset(); 
      setIsMessageSent(true);

      // resets the state after 3 seconds
      setTimeout(() => {
        setIsMessageSent(false);
      }, 3000);
    })
    
    .catch((error) => {
      console.log(error);
      console.log("Something went wrong");
      setIsMessageSent(false);
    });
  };

  return (
    <form id="contact-form" className='form' ref={formRef} onSubmit={sendEmail}>
      <p type="Full Name"><input id="user_name" placeholder="Write your name here.." name="name" autoComplete="true" /></p>
      <p type="Email"><input id="user_email" placeholder="Let us know how to contact you back.." name="email" autoComplete="true" /></p>
      <p type="Message"><input id="message" placeholder="What would you like to tell us.." name="message"></input></p>
      <button type="submit" className={isMessageSent ? "success" : ""}>{isMessageSent ? "Message Sent Successfully" : "Send Message" }</button>
    </form>
  );
};

export default Form;
