import { useContext } from "react";
import { dataContext } from "../context/datacontext";
import { Link } from "react-router-dom"

import Totalitems from "../cartcontent/totalitems"

import "./navbar.css"

const Navbar = () => {
    const { cart } = useContext(dataContext)
    return (
        <div className="nav-container">
            <nav className="navbar">
                <Link to={"/"}>
                    <h1 className="navbar-logo">La Unica</h1>
                </Link>
                    <Link className="seeCarrito" to={"/cart"}>
                        🛒
                        {cart.length > 0 ? <Totalitems /> : null }
                    </Link>
            </nav>
        </div>
    )
}

export default Navbar