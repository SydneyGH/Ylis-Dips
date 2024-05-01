import * as React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                    <Link to="./order" className="col" id="order">Order Curated Boxes</Link>
                    <Link to="./build"  className="col" id="build">Build Your Own</Link>
                    <Link to="./contact"  className="col" id="contact">Contact Me</Link>
                </div>
            </nav>
            <div class="dips-pics">
                <img src={require("./imgs/Breakable_heart.jpg")} alt="Breakable_heart" height="300" width="300" />
                <img src={require("./imgs/Cheesecake_Shooters.jpg")} alt="Cheesecake_Shooters" height="300" width="300" />
                <img src={require("./imgs/Chocolate_covered_oreos.jpg")} alt="Chocolate_covered_oreos" height="300" width="300" />
                <img src={require("./imgs/Chocolate_covered_pretezels.jpg")} alt="Chocolate_covered_pretezels" height="300" width="300" />
                <img src={require("./imgs/Chocolate_covered_strawberries.jpg")} alt="Chocolate_covered_strawberries" height="300" width="300" />
                <img src={require("./imgs/Churro_cheesecake.jpg")} alt="Churro_cheesecake" height="300" width="300" />
                <img src={require("./imgs/Red_velvet_cookies.jpg")} alt="Red_velvet_cookies" height="300" width="300" />
                <img src={require("./imgs/Spongecake.jpg")} alt="Spongecake" height="300" width="300" />
            </div> 
        </div> 
    );
}

export default HomeNavbar;