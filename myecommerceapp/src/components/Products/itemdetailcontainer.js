import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Itemdetailcontainer = () => {
    const {id} = useParams()
    const {producto, setProducto} = useState()

    useEffect(() => {
        fetch(`${id}`)
        .then(res=>res.json())
        .then(json=> {
            setProducto(json)
            console.log(json);
        })
        .catch(error => console.error(error))
    }, [id])

    return (
        <>
        <h3>Soy el producto{producto?.title}</h3>
        <p>Descripcion: {producto?.description}</p>
        </>
    )
}

export default Itemdetailcontainer