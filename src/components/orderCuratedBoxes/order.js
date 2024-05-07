import * as React from "react";
import Navbar from "../navBar/navbar";

const Order = () => {
    return (
        <div>
            <h1 className="page-title">Order Boxes</h1>
            <div className="topnav" id="myTopnav">
                <Navbar/>
            </div>
            <div className="choice-title">
                <h1> What would you like?</h1>
            </div>
            <div className="select-menu">
                <div className="select-box">
                    <label className="choice1-label">
                        Strawberries:
                    </label>
                    <select className="sel-options">
                        <option value="0"> </option>
                        <option value="1">Option1</option>
                        <option value="2">Option2</option>
                        <option value="3">Option3</option>
                    </select>
                    <label className="flavor1-label">
                        Flavor:
                    </label>
                    <select className="sel-flavor">
                        <option> </option>
                        <option>Dark Chocolate</option>
                        <option>Milk Chocolate</option>
                        <option>Custon</option>
                    </select>
                </div>
                <div className="select-box"> 
                    <label className="choice2-label">
                        Pretzels:
                    </label>
                    <select className="sel-options">
                        <option value="0"> </option>
                        <option value="1">Option1</option>
                        <option value="2">Option2</option>
                        <option value="3">Option3</option>
                    </select>
                    <label className="flavor2-label">
                        Flavor:
                    </label>
                    <select className="sel-flavor">
                        <option> </option>
                        <option>Dark Chocolate</option>
                        <option>Milk Chocolate</option>
                        <option>Custon</option>
                    </select>
                </div>
                <div className="select-box">
                    <label className="choice3-label">
                        Oreos:
                    </label>
                    <select className="sel-options">
                        <option value="0"> </option>
                        <option value="1">Option1</option>
                        <option value="2">Option2</option>
                        <option value="3">Option3</option>
                    </select>
                    <label className="flavor3-label">
                        Flavor:
                    </label>
                    <select className="sel-flavor">
                        <option> </option>
                        <option>Dark Chocolate</option>
                        <option>Milk Chocolate</option>
                        <option>Custon</option>
                    </select>
                </div>
                <div>
                    <button className="sub-btn">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Order;
