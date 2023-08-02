import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

function EditProduct() {
    const [title , setTitle] = useState("");
    const [price , setPrice] = useState(0);
    
    const {productid} = useParams();

    const formSubmit = (e) =>{
        e.preventDefault();
        fetch(`http://localhost:900/Products/${productid}`, {
          method: 'PUT',
         body: JSON.stringify({
           title,
           price,
         }),
         headers: {
           'Content-type': 'application/json; charset=UTF-8',
         },
       })
         .then((response) => response.json())
         .then((json) => 
         console.log(json),
         Navigate('/products')
         );
    }

  return (
    <div>
        <h2>EditProduct</h2>
        <p>{productid}</p>
    </div>
  )
}

export default EditProduct