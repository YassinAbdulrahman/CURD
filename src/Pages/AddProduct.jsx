import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title , setTitle] = useState("");
  const [price , setPrice] = useState(0);

  let navigate = useNavigate()

  const formSubmit = (e) =>{
     e.preventDefault();
     fetch('http://localhost:900/Products', {
      method: 'POST',
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
      navigate('/products')
      );
  }

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="Producttitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="Producttitle"
            aria-describedby="Product Title"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Productprice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="Productprice"
            aria-describedby="Product Price"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
