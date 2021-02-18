import productOne from '../Imgs/product-1.jpg';
import productTwo from '../Imgs/product-2.jpg';
import productThree from '../Imgs/product-3.jpg';
import productFour from '../Imgs/product-8.jpg';
import productFive from '../Imgs/product-5.jpg';
import productSix from '../Imgs/product-6.jpg';
import productSeven from '../Imgs/product-7.jpg';
import productEight from '../Imgs/product-4.jpg';
import productNine from '../Imgs/product-9.jpg';


const initState = {
    products : [
        {id: 1, title: 'Shop by Category', img: productOne,  price: '$250', pieces: '4', shape: 'Rectangular', material: '90% polyester 10% polyamide', desc: 'Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relations.'},
        {id: 2, title: 'Computers & Accessories', img: productTwo, price: '$30', pieces: '2', shape: 'Rectangular', material: '90% polyester 10% polyamide', desc: 'You can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reademust be related to that idea. In other words, your paragraphs should remind.'},
        {id: 3, title: 'Beauty picks', img: productThree, price: '$45', pieces: '7', shape: 'Exchanged', material: '	Non-woven fabric + pvc', desc: 'Where to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph.'},
        {id: 4, title: 'Find your ideal TV', img: productFour, price: '$20', pieces: '6', shape: 'Exchanged', material: '	Non-woven fabric + pvc', desc: 'Determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph.'},
        {id: 5, title: 'Shop Laptops & Tablets', img: productFive, price: '$300', pieces: '5', shape: 'Rectangular', material: '90% polyester 10% polyamide', desc: 'Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each pip between your thesis and the information.'},
        {id: 6, title: 'Create with strip lights', img: productSix, price: '$125', pieces: '2', shape: 'Rectangular', material: '	Non-woven fabric + pvc', desc: 'Determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must there is a recurrent relationship between your thesis and the information in more.'},
        {id: 7, title: 'Explore home bedding', img: productSeven, price: '$35', pieces: '7', shape: 'Exchanged', material: '	Non-woven fabric + pvc', desc: 'Learn can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that informatioo that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis.'},
        {id: 8, title: 'Shop Laptop', img: productEight, price: '$30', pieces: '3', shape: 'Exchanged', material: '	Non-woven fabric + pvc', desc: 'After you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information iIn other words, your paragraphs shohere is a recurrent thesis and the information in each.'},
        {id: 9, title: 'Create with strip', img: productNine, price: '$12', pieces: '2', shape: 'Exchanged', material: '90% polyester 10% polyamide', desc: 'Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reade must be related to that idea. In other words, your paragrap.'}
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
            case 'DELETE_CART':
                let newCarts = state.carts.filter(cart => {
                    return cart.id !== action.id
                })
                return {
                    ...state,
                    carts: newCarts
                }
            case 'CHANGE_QUANTITY':
                let carts = [...state.carts];
                const index = carts.findIndex(item=>item.id === action.id);
                carts[index].quantity = action.quantity;
                return {
                    ...state,
                    carts: [...carts]
                }
        default:
            return state;
    }

}
      
export default rootReducer;