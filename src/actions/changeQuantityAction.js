const changeQuantityAction = (id, quantity) => {
    return {
        type: 'CHANGE_QUANTITY',
        id: id,
        quantity: quantity
    }
}

export default changeQuantityAction;