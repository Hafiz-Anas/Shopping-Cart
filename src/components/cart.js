import { PureComponent } from "react";
import { connect } from "react-redux";
import  deleteCart from '../actions/deleteCart';


class cart extends PureComponent {
  handleClick = (id) => {
    this.props.deleteCart(id);
  }
  render () {
    const { carts } = this.props;
    return (
      <div className='cart-container'>
      {carts.length ? (
        carts.map(cart => {
          return (
            <div className="cart-section">
              <div className="cart" key={cart.id}>
                <div className="title-price">
                  <h2>{cart.title}</h2>
                  <p>Price: <span>{cart.price}</span></p>
                </div>
                <div className="img">
                   <img src={cart.img}/>
                </div>
                <div className="quantity">1</div>
                <div className="del-btn">
                   <button onClick={()=>this.handleClick(cart.id)}>X</button>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <div className="center"><h4>Your Cart is Empty</h4></div>
      )}
    </div>  
    )
  }
}


const productsFromStore= (state)=> {
  return {
      carts: state.carts
  }
}

const deletingCart = (dispatch) => {
  return {
  deleteCart: (id) => {dispatch(deleteCart(id))}
  }
}

export default  connect(productsFromStore, deletingCart)(cart)