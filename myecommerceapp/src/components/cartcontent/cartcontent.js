import { useContext } from "react";
import { dataContext } from "../context/datacontext";
import Navbar from "../navbar/navbar";

import Cartelements from "./cartelements"
import Carttotal from "./carttotal"

const Cartcontent = () => {
    const { cart } = useContext(dataContext)
    return (
        <>
            <Navbar />
            {cart.length > 0 ? (
                <>
                    <Cartelements />
                    <Carttotal />
                </>
            ) : (
                <h2 className="cart-message-center">Your cart is empty</h2>
            )}
        </>
    )
}

export default Cartcontent