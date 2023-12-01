import Navbar from "../navbar/navbar"
import Banner from "../banner/banner"
import Products from "../Products/products"

const Home = () => {
    return (
        <>
        <Navbar />
        <Banner/>
        <div className='product-card-container'>
            <Products />
        </div>
        </>
    )
}

export default Home