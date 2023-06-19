import './styles/home.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { getProductsThunk } from "../store/slices/products.slice";
import ProductCard from "../components/ProductCard";

const Home = () => {

    const dispatch = useDispatch();
    const { categoryId, products } = useSelector(state => state)

    useEffect( () => {
        dispatch( getProductsThunk( categoryId ) )
    }, [categoryId])


    return (
        <div className='home'>
            <main className="card-container">
                {
                    products?.map( product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </main>
        </div>
    )
}

export default Home