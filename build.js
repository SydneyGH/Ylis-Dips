import * as React from "react";
import Navbar from "../navBar/navbar";
import { useState } from "react";

const Build = () => {
    const [strawberries, setStrawberries] = useState("");
    const [pretzels, setPretzels] = useState("");
    const [oreos, setOreos] = useState("");
    const [formData, setFormData] = useState({
        treat: "",
        amount: "",
        flavor: "",
        treat1: "",
        amount1: "",
        flavor1: "",
        treat2: "",
        amount2: "",
        flavor2: "",
    })
    
    const handleOptionTwo = (e) => {
        setStrawberries(e.target.value);
        setPretzels("");
        setOreos("");
    }

    const handleOptionThree = (e) => {
        setPretzels(e.target.value);
        setOreos("");
    };

    const onChangeHandler = (event) => {
        setFormData(() => ({ ...formData, [event.target.name]: event.target.value}))
        }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(formData)
        alert(`Your order of ${formData.amount} ${formData.flavor} ${formData.treat}'s, 
        ${formData.amount} ${formData.flavor} ${formData.treat}'s, 
        and ${formData.amount} ${formData.flavor} ${formData.treat}'s has been sent to the Yli's Dips Team.`
    );
    }

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
                <form onSubmit={onSubmitHandler}>
                    <div className="select-box">
                        <label className="choice-label">
                            Choose 1st Treat:
                        </label>
                            <select name="treat" onChange={handleOptionTwo} value={strawberries}>
                                <option value="0">Select Treat</option> 
                                <option value="Strawberry">Strawberry</option> 
                                <option value="Oreo">Oreo</option>
                                <option value="Pretzel">Pretzel</option>
                            </select>
                        <label className="choice-label">
                            Choose Flavor:
                        </label>
                            <select name="flavor" onChange={onChangeHandler}>
                                <option value="0">Select Flavor</option> 
                                <option value="Dark Chocolate">Dark Chocolate</option>
                                <option value="Milk Chocolate">Milk Chocolate</option>
                            </select>
                        <label className="choice-label">
                            Choose Amount:
                        </label>
                            <select name="amount" onChange={onChangeHandler}>
                                <option value="0">Select Amount</option> 
                                <option value="6">6</option>
                                <option value="8">8</option>  
                                <option value="12">12</option>
                            </select>
                    </div>
                    <div className="select-box">
                        <label className="choice-label">
                            Choose 2nd Treat:
                        </label>
                            <select name="treat1" value={pretzels} disabled={strawberries === ""} onChange={handleOptionThree}>
                                <option value="0"> Select Treat</option>
                                {strawberries === "Strawberry" && (
                                    <><option value="Oreo" key="Oreo">Oreo</option> 
                                    <option value="Pretzel" key="Pretzel">Pretzel</option></>)}
                                {strawberries === "Oreo" && (
                                    <><option value="Strawberry" key="Strawberry">Strawberry</option> 
                                    <option value="Pretzel" key="Pretzel">Pretzel</option></>)}
                                {strawberries === "Pretzel" && (
                                    <><option value="Strawberry" key="Strawberry">Strawberry</option> 
                                    <option value="Oreo" key="Oreo">Oreo</option></>)}
                            </select>
                        <label className="choice-label">
                            Choose Flavor:
                        </label>
                            <select name="flavor1" onChange={onChangeHandler}>
                                <option value="0">Select Flavor</option> 
                                <option value="Dark Chocolate">Dark Chocolate</option>
                                <option value="Milk Chocolate">Milk Chocolate</option>
                            </select>
                        <label className="choice-label">
                            Choose Amount:
                        </label>
                            <select name="amount1" onChange={onChangeHandler}>
                                <option value="0">Select Amount</option> 
                                <option value="6">6</option>
                                <option value="8">8</option> 
                                <option value="12">12</option>
                            </select>
                    </div>
                    <div className="select-box">
                        <label className="choice-label">
                            Choose 3rd Treat:
                        </label>
                            <select name="treat2" value={oreos} disabled={pretzels === ""} onChange={onChangeHandler}>
                                <option value="0">Select Treat</option> 
                                {pretzels === "Strawberry" && (
                                    <><option value="Oreo" key="Oreo">Oreo</option></>)}
                                {pretzels === "Oreo" && (
                                    <><option value="Pretzel" key="Pretzel">Pretzel</option></>)}
                                {pretzels === "Pretzel" && (
                                    <><option value="Strawberry" key="Strawberry">Strawberry</option></>)}
                            </select>
                        <label className="choice-label">
                            Choose Flavor:
                        </label>
                            <select name="flavor2" onChange={onChangeHandler}>
                                <option value="0">Select Flavor</option> 
                                <option value="Dark Chocolate">Dark Chocolate</option>
                                <option value="Milk Chocolate">Milk Chocolate</option>
                            </select>
                        <label className="choice-label">
                            Choose Amount:
                        </label>
                            <select name="amount2" onChange={onChangeHandler}>
                                <option value="0">Select Amount</option> 
                                <option value="6">6</option>
                                <option value="8">8</option> 
                                <option value="12">12</option>
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

export default Build;