import { useState, useEffect } from "react";
import axios from "axios"

import "./products.css"
import { Link } from "react-router-dom";

const Productshome = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data))
    },[])

    return data.map((product) => {
        return (
            <div className='card' key={product.id}>
                <img className='card-image' src={product.img} alt='img-product-card' />
                <h3 className='card-title'>{product.name}</h3>
                <h4 className="card-price">{product.price}$</h4>
                <Link to={`/product/${product.id}`}>Ver mas</Link>
            </div>
        )
    })
}

export default Productshome