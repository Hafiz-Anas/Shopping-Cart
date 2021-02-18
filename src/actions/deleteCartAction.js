const deleteCart = (id) => {
    return {
        type: 'DELETE_CART',
        id: id
    }
}
export default deleteCart;