import { ADD_TO_CART, TOGGLE_AMOUNT, REMOVE_ITEM, CLEAR_CART, COUNT_CART_TOTALS } from "../actions";

const cart_reducer = ((state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { id, color, amount, product } = action.payload
            const temp_product = state.cart.find((item) => item.id === id + color)
            if (temp_product) {
                let newAmount = temp_product.amount + amount;
                if (newAmount > temp_product.max) {
                    newAmount = temp_product.max
                }
                return {
                    ...state, amount: newAmount,

                }

            } else {
                const newProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    price: product.price,
                    image: product.images[0].url,
                    max: product.stock
                }
                return {
                    ...state, cart: [...state.cart, newProduct]
                }
            }
        }
        case TOGGLE_AMOUNT: {
            const { id, value } = action.payload
            const tempCart = state.cart.map((item) => {
                if (item.id === id) {
                    if (value === "inc") {
                        let newAmount = item.amount + 1
                        if (newAmount > item.max) {
                            newAmount = item.max
                        }
                        return { ...item, amount: newAmount }
                    }
                    if (value === "dec") {
                        let newAmount = item.amount - 1
                        if (newAmount < 1) {
                            newAmount = 1
                        }
                        return { ...item, amount: newAmount }
                    }
                } else {
                    return item
                }
            })
            return {
                ...state, cart: tempCart
            }
        }
        case REMOVE_ITEM: {
            const newCart = state.cart.filter((item) => item.id !== action.payload)
            return {
                ...state, cart: newCart
            }
        }
        case CLEAR_CART: {
            return {
                ...state, cart: []
            }
        }
        case COUNT_CART_TOTALS: {
            const { total_items, total_amount } = state.cart.reduce(
                
                (total, item) => {
                    const {amount, price} = item
                    total.total_items += amount
                    total.total_amount += price*amount
                    return total
                },
                {
                    total_items: 0,
                    total_amount: 0
                }
            )
            return {
                ...state, total_items: total_items, total_amount: total_amount
            }

        }
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
    }
})


export default cart_reducer;