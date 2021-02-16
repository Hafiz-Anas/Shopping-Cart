import cart from '../Imgs/shopping_cart.png';
import productOne from '../Imgs/product-1.jpg';
import productTwo from '../Imgs/product-2.jpg';
import productThree from '../Imgs/product-3.jpg';
import productFour from '../Imgs/product-4.jpg';
import productFive from '../Imgs/product-5.jpg';
import productSix from '../Imgs/product-6.jpg';


const initState = {
    products : [
        {id: 1, title: 'Shop by Category', img: productOne,  price: '$22'},
        {id: 2, title: 'Computers & Accessories', img: productTwo, price: '$30'},
        {id: 3, title: 'Beauty picks', img: productThree, price: '$45'},
        {id: 4, title: 'Find your ideal TV', img: productFour, price: '$50'},
        {id: 5, title: 'Shop Laptops & Tablets', img: productFive, price: '$300'},
        {id: 6, title: 'Create with strip lights', img: productSix, price: '$125'}
    ],
    carts:[]
}

const rootReducer = (state = initState, action)=> {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                carts: [
                    ...state.carts,
                    {
                        ...action.product,
                        quantity: 1
                    }
                ]
            };
    
        default:
            return state;
    }
}

export default rootReducer;