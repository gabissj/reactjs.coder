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
                <Link to={"/Granja"}>
                    <h1 className="navbar-category">Granja</h1>
                </Link>
                <Link to={"/Carniceria"}>
                    <h1 className="navbar-category">Carniceria</h1>
                </Link>
                <Link to={"/Verduleria"}>
                    <h1 className="navbar-category">Verduleria</h1>
                </Link>
                <Link to={"/Almacen"}>
                    <h1 className="navbar-category">Almacén</h1>
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