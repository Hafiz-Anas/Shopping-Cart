import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import  addProductToCart from '../actions/productAction';
import { Link } from "react-router-dom";

class products extends PureComponent {
    
    handleClick = (product) => {
        this.props.addProductToCart(product);
    }
    
    isAdded = (id) => {
        return !!this.props.carts.find(item => item.id === id)
    }
    render() {
        const { products } = this.props;
        const productsList = products.length ? (
        products.map(product => {
          return (
            <div className="product" key={product.id}>
                <div className="header"> 
                    <Link to={'/' + product.id}><h2>{product.title}</h2></Link>
                </div>
                <div className="Img">
                    <Link to={'/' + product.id}><img src={product.img}/></Link>
                </div>
                <div className="footer">
                    <p>Price: <span>{product.price}</span></p>
                    {!this.isAdded(product.id) && (
                        <button onClick={()=>this.handleClick(product)}>Add to Cart</button>
                    )}
                </div>
            </div>
          )
        })
      ) : (
        <div className="center">No products yet</div>
      );

    return (
        <div className="container">
            <h2 className='center'>Our Products</h2>
            <div className="products">
               { productsList }
            </div>
        </div>
    )
    }
    
}

const productsFromReducer = (state)=> {
    return {
        products: state.products,
        carts: state.carts
    }
}

const dispatchToProps = (dispatch) => {
    return {
        addProductToCart: (product) => {dispatch(addProductToCart(product))}
    }
}

export default connect(productsFromReducer, dispatchToProps)(products);
