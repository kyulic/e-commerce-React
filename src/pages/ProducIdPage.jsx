import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductId/ProductInfo"
import SimilarProducts from "../components/ProductId/SimilarProducts"
import SliderIms from "../components/ProductId/SliderIms"


const ProducIdPage = () => {

    const {id}=useParams()
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const [product,getProductById]=useFetch(baseUrl)

    useEffect(()=>{
        getProductById(`/products/${id}`)
    },[id])

    console.log(product)
  return (
    <div>
        <ProductInfo 
        product={product}
        />
        <SliderIms
        product={product}
        />
        <SimilarProducts
        product={product}
        />
    </div>
  )
}

export default ProducIdPage