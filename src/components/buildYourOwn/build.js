import * as React from "react";
import Navbar from "../navBar/navbar";
import { useState } from "react";

const Build = () => {
    const [strawberries, setStrawberries] = useState("");
    const [pretzels, setPretzels] = useState("");
    const [oreos, setOreos] = useState("");
    
    const handleOptionTwo = (e) => {
        setStrawberries(e.target.value);
        setPretzels("");
        setOreos("");
    }

    const handleOptionThree = (e) => {
        setPretzels(e.target.value);
        setOreos("");
    };

    return (
        <div>
            <h1 className="page-title">Build Boxes</h1>
            <div className="topnav" id="myTopnav">
                <Navbar/>
            </div>
            <div className="choice-title">
                <h1> What would you like to create?</h1>
            </div>
            <div className="select-menu">
                <div className="select-box">
                    <label className="choice-label">
                        Choose 1st Treat:
                    </label>
                        <select onChange={handleOptionTwo} value={strawberries}>
                            <option>Select Treat</option> 
                            <option>Strawberry</option> 
                            <option>Oreo</option>
                            <option>Pretzel</option>
                        </select>
                    <label className="choice-label">
                        Choose Flavor:
                    </label>
                        <select>
                            <option>Select Flavor</option> 
                            <option>Dark Chocolate</option>
                            <option>Milk Chocolate</option>
                            <option>Custon</option>
                        </select>
                    <label className="choice-label">
                        Choose Amount:
                    </label>
                        <select>
                            <option>Select Amount</option> 
                            <option>6</option>
                            <option>8</option>  
                            <option>12</option>
                        </select>
                </div>
                <div className="select-box">
                    <label className="choice-label">
                        Choose 2nd Treat:
                    </label>
                        <select value={pretzels} disabled={strawberries === ""} onChange={handleOptionThree}>
                            <option>Select Treat</option>
                            {strawberries === "Strawberry" && (
                                <><option key="Oreo">Oreo</option> 
                                <option key="Pretzel">Pretzel</option></>)}
                            {strawberries === "Oreo" && (
                                <><option key="Strawberry">Strawberry</option> 
                                <option key="Pretzel">Pretzel</option></>)}
                            {strawberries === "Pretzel" && (
                                <><option key="Strawberry">Strawberry</option> 
                                <option key="Oreo">Oreo</option></>)}
                        </select>
                    <label className="choice-label">
                        Choose Flavor:
                    </label>
                        <select>
                            <option>Select Flavor</option> 
                            <option>Dark Chocolate</option>
                            <option>Milk Chocolate</option>
                            <option>Custon</option>
                        </select>
                    <label className="choice-label">
                        Choose Amount:
                    </label>
                        <select>
                            <option>Select Amount</option> 
                            <option>6</option>
                            <option>8</option> 
                            <option>12</option>
                        </select>
                </div>
                <div className="select-box">
                    <label className="choice-label">
                        Choose 3rd Treat:
                    </label>
                        <select value={oreos} disabled={pretzels === ""}>
                            <option>Select Treat</option> 
                            {pretzels === "Strawberry" && (
                                <><option key="Oreo">Oreo</option></>)}
                            {pretzels === "Oreo" && (
                                <><option key="Pretzel">Pretzel</option></>)}
                            {pretzels === "Pretzel" && (
                                <><option key="Strawberry">Strawberry</option></>)}
                        </select>
                    <label className="choice-label">
                        Choose Flavor:
                    </label>
                        <select>
                            <option>Select Flavor</option> 
                            <option>Dark Chocolate</option>
                            <option>Milk Chocolate</option>
                            <option>Custon</option>
                        </select>
                    <label className="choice-label">
                        Choose Amount:
                    </label>
                        <select>
                            <option>Select Amount</option> 
                            <option>6</option>
                            <option>8</option> 
                            <option>12</option>
                        </select>
                </div>
                <div>
                    <button className="sub-btn">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Build;