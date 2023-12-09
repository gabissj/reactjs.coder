import { useEffect } from "react"

const itemlistcontainer = () => {

    useEffect(() => {
        fetch('')
        .then(res=>res.json())
        .then(json=>console.log(json))
        .catch(error => console.error(error))
    }, [])

    return (
        <div>itemlistcontainer</div>
    )
}

export default itemlistcontainer