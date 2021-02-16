import React from 'react'
import cart from "../Imgs/shopping_cart.png";

const navbar = () => {
    return (
        <div className='nav-wrapper black darken-2'>
            <div className="container">
               <h1>My Store</h1>
               <img src={cart}/>
            </div>
        </div>
    )
}
export default navbar;