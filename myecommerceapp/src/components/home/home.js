import Navbar from "../navbar/navbar"
import Banner from "../banner/banner"
import Productshome from "../Products/productshome"

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <div className='product-card-container'>
                <Productshome />
            </div>
        </>
    )
}

export default Home