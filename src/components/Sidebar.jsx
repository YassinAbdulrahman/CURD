import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <>
     <ul className="list-unstyled text-center line-none">
        <li><Link className="text-decoration-none fs-3" to={'/products'}>Products</Link></li>
        <li><Link className="text-decoration-none fs-3" to="/">Categories</Link></li>
     </ul>
    </>
  )
}

export default Sidebar