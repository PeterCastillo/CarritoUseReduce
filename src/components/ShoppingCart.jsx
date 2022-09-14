import { useReducer } from "react"
import { TYPES } from "../actions/shoppingAction"
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer"

const ShoppingCart = () => {

    const [state,dispatch] = useReducer(shoppingReducer,shoppingInitialState)
    
    const {products,cart} = state

    const handleAdd = (id) => {
        dispatch({type:TYPES.ADD_TO_CART, payload:id})

    }

    const handleDelete = (id , all = false) => {
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL, payload: id });
          } else {
            dispatch({ type: TYPES.REMOVE_TO_CART, payload: id });
          }
    }

    const handleCleanCart = () => {
        dispatch({type:TYPES.CLEAR_CART})
    }

    return (
        <>
            <article>
                <h1>Productos</h1>
                <div>
                    {products.map((product)=>
                        <div key={product.id} style={{border:"solid 2px black", padding:"1rem"}}>
                            <h4>Producto: {product.name}</h4>
                            <h6>Price: {product.price}</h6>
                            <button onClick={()=>handleAdd(product.id)}>Añadir al carrito</button>
                        </div>
                        )}
                </div>
            </article>
            <article>
                <h1>Carrito</h1>
                <div>
                    {cart.length > 0? cart.map((product)=>
                        <div key={product.id} style={{border:"solid 2px black", padding:"1rem"}}>
                            <h4>Producto: {product.name}</h4>
                            <h6>Cantidad: {product.quantity}</h6>
                            <h6>Price: {product.price * product.quantity}</h6>
                            <button onClick={()=>handleDelete(product.id)}>Eliminar uno del carrito al carrito</button>
                            <button onClick={()=>handleDelete(product.id , true )}>Eliminar del carrito al carrito</button>
                        </div>
                        ): <span>Tu carrito esta vacio</span>}
                    <button onClick={handleCleanCart}>Limpiar carrito</button>
                </div>
            </article>
        </>
        )
}

export default ShoppingCart