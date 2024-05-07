import * as React from "react";
import Navbar from "../navBar/navbar";

const Contact = () => {
    return (
        <div>
            <h1 className="page-title">Contact me</h1>
                <Navbar/>
            <div className="contact">
                <form action="action">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your first name..."/>

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lasttname" placeholder="Your last name..."/>

                    <label for="subject">Comments</label>
                    <textarea name="subject" id="subject" placeholder="What questions do you have?"/>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;