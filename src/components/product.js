import React from 'react'
import { connect } from "react-redux";

const product = (props) => {
    const product = props.product;
    return (
        <div className='container'>
            {product ?(
              <div className="single-product">
                  <div className="single-product-img">
                    <img src={product.img} alt=""/>
                  </div>
                  <div className="single-product-desc">
                  <h2>{product.title}</h2>
                  <p className='desc'>{product.desc}</p>
                  <ul>
                    <li>Material: <span>{product.material}</span></li>
                    <li>Pieces: <span>{product.pieces}</span></li>
                    <li>Shape: <span>{product.shape}</span></li>
                  </ul>
                  <p>Price: <span>{product.price}</span></p>
                  </div>
              </div>
            ) : (
            <div>Loading</div>
            )}
        </div>
    )
}

const productFromProducts = (state, ownProps) => {
    let id = ownProps.match.params.product_id;
    return {
        product: state.products.find(product => product.id == id)
    }
}

export default connect(productFromProducts)(product)
