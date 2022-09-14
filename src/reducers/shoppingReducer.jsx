import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
    products : [
       { id: 1 , name: "Producto 01" , price: 100}, 
       { id: 2 , name: "Producto 02" , price: 200}, 
       { id: 3 , name: "Producto 03" , price: 300}, 
       { id: 4 , name: "Producto 04" , price: 400}, 
       { id: 5 , name: "Producto 05" , price: 500}, 
       { id: 6 , name: "Producto 06" , price: 600}, 
    ] ,
    cart : []
}

export function shoppingReducer(state,action){
    switch(action.type){
        case (TYPES.ADD_TO_CART):{
            let newItem = state.products.find((product)=> product.id === action.payload)

            let itemInCart = state.cart.find((item)=> item.id === newItem.id)

            return itemInCart?
            {
                ...state,
                cart:state.cart.map((item)=>
                    item.id === newItem.id? {...item, quantity:item.quantity +1 } : item 
                )
            }
            :{
                ...state,
                cart: [...state.cart, { ...newItem, quantity: 1}]
            }
        }

        case (TYPES.REMOVE_TO_CART):{

            
        }

        case (TYPES.REMOVE_ALL):{
            
        }

        case (TYPES.CLEAR_CART):{
            ret
        }

        default:{
            return state
        }
    }
}