import { useState } from "react"


const ProductInfo = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    //los dos handleAdd son lo mismo
    // const handleAdd=()=>setQuantity(quantity+1)

    const handleMinus=()=>{
        if(quantity-1>=1){
            setQuantity(state=>state-1)}
        }
        
        
    const handleAdd=()=>setQuantity(state=>state+1)


  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <ul>
                <li><span>price</span>
                <span>{product?.price}</span>
                </li>
                <li><span>Quantity</span>
                <div onClick={handleMinus}>-</div>
                <div>{quantity}</div>
                <div onClick={handleAdd}>+</div>
                
                </li>
            </ul>
            <button>Add to cart <i className='bx bx-cart'></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo