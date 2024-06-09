import * as React from "react";
import Navbar from "../navBar/navbar";
import { useState } from "react";

const Order = () => {
    const [formData, setFormData] = useState({
        treat: "",
        amount: "",
        flavor: "",
    })

const onChangeHandler = (event) => {
    setFormData(() => ({ ...formData, [event.target.name]: event.target.value}))
    }

const onSubmitHandler = (event) => {
    event.preventDefault()
    alert(`Your order of ${formData.amount} ${formData.flavor} ${formData.treat}'s has been sent to the Yli's Dips Team.`
      );
}
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
                <form onSubmit={onSubmitHandler}>
                    <div className="select-box">
                        <label className="choice-label">
                            Treats
                        </label>
                        <select className="sel-options" name="treat" onChange={onChangeHandler}> 
                            <option value="0">Select Treat</option>
                            <option value="Strawberry">Strawberry</option>
                            <option value="Pretzels">Pretzels</option>
                            <option value="Oreos">Oreos</option>
                        </select>
                        <label className="choice-label">
                            Amount
                        </label>
                        <select className="sel-amount" name="amount" onChange={onChangeHandler}>
                            <option value="0">Select Amount</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                        </select>
                        <label className="choice-label">
                            Flavor
                        </label>
                        <select className="sel-flavor" name="flavor" onChange={onChangeHandler}>
                            <option value="0">Select Flavor</option>
                            <option value="Dark Chocolate">Dark Chocolate</option>
                            <option value="Milk Chocolate">Milk Chocolate</option>
                        </select>
                    </div>
                    <div>
                        <button className="sub-btn">Submit</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Order;
