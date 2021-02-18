import { connect } from "react-redux";
import  deleteCart from '../actions/deleteCartAction';
import  updateQuantity from '../actions/changeQuantityAction';


const cart = (props)=> {
  const handleClick = (id) => {
    props.deleteCart(id);
  }

  const decreaseQuantity = (id, quantity) => {
    if(quantity > 1){
      props.updateQuantity(id, quantity -1);
    }
  }
  const increaseQuantity = (id, quantity) => {
      props.updateQuantity(id, quantity +1);
  }
  const { carts } = props;
    return (
      <div className='cart-container'>
      {carts && carts.length ? (
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
                <div className="quantity">
                  <span onClick={()=>decreaseQuantity(cart.id, cart.quantity)}>&#60;</span>
                  <span>{cart.quantity}</span>
                  <span onClick={()=>increaseQuantity(cart.id, cart.quantity)}>&#62;</span>
                </div>
                <div className="del-btn">
                   <button onClick={()=>handleClick(cart.id)}>X</button>
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


const mapStateToProps= (state)=> {
  return {
      carts: state.carts
  }
}

const mapActionsToProps = (dispatch) => {
  return {
  deleteCart: (id) => {dispatch(deleteCart(id))},
  updateQuantity: (id, quantity) => {dispatch(updateQuantity(id, quantity))}
  }
}


export default  connect(mapStateToProps, mapActionsToProps)(cart)