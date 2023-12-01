import { useContext, useState, useEffect } from "react";
import { dataContext } from "../context/datacontext";
import axios from "axios"

import "./products.css"

const Products = () => {
    const [data, setData] = useState([])
    const { buyProducts } = useContext(dataContext)

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data))
    },[])

    return data.map((product) => {
        return (
            <div className='card' key={product.id}>
                <img className='card-image' src={product.img} alt='img-product-card' />
                <h3 className='card-title'>{product.name}</h3>
                <h4 className="card-price">{product.price}$</h4>
                <button onClick={() => buyProducts(product)}>BUY</button>
            </div>
        )
    })
}

export default Products