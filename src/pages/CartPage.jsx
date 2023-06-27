import { useSelector } from "react-redux"
import CarElement from "../components/cart/CarElement"


const CartPage = () => {
    const cart=useSelector(states=>states.cart)

const totalPrice=cart.reduce((acc,cv)=>{
  const subtotal=cv.quantity*cv.product.price
  return acc+subtotal
},0)
    
  return (
    <div>
        <h2>Cart</h2>
        <div>
          {
            cart.map(prod=>(
              <CarElement
              key={prod.id}
              prod={prod}
              />
            ))

          }

        </div>
        <footer>
          <div>
            <span>total:</span><span>{totalPrice}</span>
          </div>
        </footer>
    </div>
  )
}

export default CartPage