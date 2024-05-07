import * as React from "react";
import Navbar from "../navBar/navbar";

const Build = () => {
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
                    <label className="strawberry-label">
                        Choose 1st option:
                    </label>
                        <select>
                            <option></option> 
                            <option>Strawberry</option> 
                            <option>Oreo</option>
                            <option>Pretzel</option>
                        </select>
                    <label>
                        Choose Amount:
                    </label>
                        <select>
                            <option></option> 
                            <option>6</option> 
                            <option>12</option>
                        </select>
                </div>
                <div className="select-box">
                    <label className="strawberry-label">
                        Choose 2nd option:
                    </label>
                        <select>
                            <option></option> 
                            <option>Strawberry</option> 
                            <option>Oreo</option>
                            <option>Pretzel</option>
                        </select>
                    <label>
                        Choose Amount:
                    </label>
                        <select>
                            <option></option> 
                            <option>6</option> 
                            <option>12</option>
                        </select>
                </div>
                <div className="select-box">
                    <label className="strawberry-label">
                        Choose 3rd option:
                    </label>
                        <select>
                            <option></option> 
                            <option>Strawberry</option> 
                            <option>Oreo</option>
                            <option>Pretzel</option>
                        </select>
                    <label>
                        Choose Amount:
                    </label>
                        <select>
                            <option></option> 
                            <option>6</option> 
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