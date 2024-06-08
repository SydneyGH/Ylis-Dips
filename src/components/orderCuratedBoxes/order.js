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
                    <label className="choice-label">
                        Treats
                    </label>
                    <select className="sel-options">
                        <option value="0">Select Treat</option>
                        <option value="1">Strawberry</option>
                        <option value="2">Pretzels</option>
                        <option value="3">Oreos</option>
                    </select>
                    <label className="choice-label">
                        Amount
                    </label>
                    <select className="sel-amount">
                        <option value="0">Select Amount</option>
                        <option value="1">6</option>
                        <option value="2">8</option>
                        <option value="3">12</option>
                    </select>
                    <label className="choice-label">
                        Flavor
                    </label>
                    <select className="sel-flavor">
                        <option>Select Flavor</option>
                        <option>Dark Chocolate</option>
                        <option>Milk Chocolate</option>
                        <option>Custom</option>
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
