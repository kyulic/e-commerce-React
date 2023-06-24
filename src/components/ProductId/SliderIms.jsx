import React, { useState } from 'react'
import './styles/SliderImg.css'

const SliderIms = ({product}) => {

    const [indexImg, setIndexImg] = useState(0)
    const styleMovible={
        transform: `translateX(calc((-${indexImg}*100%))`
    }

    const handlePrevius=()=>{
        if(indexImg-1>=0){
            setIndexImg(indexImg-1)

        }else{
            setIndexImg(2)
        }

    }

    const handleNext=()=>{
        if(indexImg+1<=2){
            setIndexImg(indexImg+1)

        }else{
            setIndexImg(0)
        }
    }
  return (
    <div className='slider'>
        <button onClick={handlePrevius} className='slider_btn slider_left'>&lt;</button>
        <div className='slider_movible'>
            {
                product?.images.map(imgInfo=>(
                    <div  className='slider_img_container' key={imgInfo.id}>
                        <img className='slider_img' src={imgInfo.url} alt="" />
                    </div>
                ))
            }

        </div>
        <button onClick={handleNext} className='slider_btn slider_right'>&gt;</button>
        
        
        
        
        
        </div>
  )
}

export default SliderIms