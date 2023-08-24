import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductId/ProductInfo"
import SimilarProducts from "../components/ProductId/SimilarProducts"
import SliderIms from "../components/ProductId/SliderIms"


const ProducIdPage = () => {

    const {id}=useParams()
    //const baseUrl ='https://ecommerce-crud-xg9z.onrender.com/api/v1'
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const [product,getProductById]=useFetch(baseUrl)

    useEffect(()=>{
        getProductById(`/products/${id}`)
    },[id])

    console.log(product)
  return (
    <div >
      <div className="productpage_home" >
        <div>
        <ProductInfo 
        product={product}
        />
        </div>
        <SliderIms
        product={product}
        />

        <div>

        </div>
      </div>
      <div >

        <SimilarProducts
        product={product}
        />

      </div>
    </div>
  )
}

export default ProducIdPage