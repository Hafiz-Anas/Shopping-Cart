import React from 'react'
import cartIcon from "../Imgs/shopping_cart.png";
import productsIcon from "../Imgs/productsIcon.png";
import { NavLink } from "react-router-dom";


const navbar = () => {
    return (
        <div className='nav-wrapper black darken-2'>
            <div className="nav-container container">
                    <h1>My Store</h1>
                <ul className="nav-links">
                    <li><NavLink exact to="/"><img src={productsIcon} /></NavLink></li>
                    <li><NavLink to="/Cart"><img src={cartIcon} /></NavLink></li>
                </ul>    
            </div>
        </div>
    )
}
export default navbar;