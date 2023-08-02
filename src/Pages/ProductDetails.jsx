import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ProductDetails() {
    const [product , setProduct] = useState([])

    const {productID} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:900/Products/${productID}`)
        .then((res) => res.json())
        .then((data) =>  setProduct(data))
    },[])

  return (
    <>
     {product && <h1>{product.title}</h1>}
    </> 
  )
}

export default ProductDetails