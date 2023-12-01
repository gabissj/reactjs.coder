import { useContext } from 'react'
import { dataContext } from '../context/datacontext'

const Cartitemcounter = ({ product }) => {
    const { cart, setCart, buyProducts } = useContext(dataContext)



    const decrese = () => {
        const productrepeat = cart.find((item) => item.id === product.id)

        productrepeat.quanty !== 1 && setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: productrepeat.quanty - 1} : item)))
    }
    return (
        <>
            <p className='courser-button' onClick={decrese}>-</p>
            <p>{product.quanty}</p>
            <p className='courser-button' onClick={() => buyProducts(product)}>+</p>
        </>
    )
}

export default Cartitemcounter