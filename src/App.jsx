import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import { Routes, Route } from "react-router-dom";
import Products from './Pages/Products';
import Sidebar from './components/Sidebar'
import AddProduct from './Pages/AddProduct';
import ProductDetails from './Pages/ProductDetails';
import EditProduct from './Pages/EditProduct';
function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className="row m-0" >
      <div className="col-md-2 Sidebar">
        <Sidebar />
      </div>
      <div className="col-md-10 right-side">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products/:productID" element={<ProductDetails />} />
        <Route path="products/:productid" element={<EditProduct />} />
        <Route/>
      </Routes>
      </div>
    </div>
    </div>
  )
}

export default App
