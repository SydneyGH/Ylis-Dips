import * as React from "react";
import Navbar from "../navBar/navbar";
import { useState } from "react";


const Contact = () => {
    const [formData, setFormData] = useState({name: "", message: ""});

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Thank you ${formData.name} your message stating "${formData.message}" has been sent to the Yli's Dips Team.`
      );
  };


    return (
        <div>
            <h1 className="page-title">Contact me</h1>
                <Navbar/>
            <div className="contact">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">First and Last Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Please enter your name"/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Please enter a message"/>

                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Contact;