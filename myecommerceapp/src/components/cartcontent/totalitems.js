import { useContext } from "react";
import { dataContext } from "../context/datacontext";

const Totalitems = () => {
    const { cart } = useContext(dataContext)

    const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0)
    return (
        <span className="cart-items-total">{itemsQuanty}</span>
    )
}

export default Totalitems