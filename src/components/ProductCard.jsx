import './styles/productCard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSimilarProductsThunk } from '../store/slices/similarProducts.slice';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const goProductInfo = () => {
        dispatch( getSimilarProductsThunk(product.categoryId))
        navigate(`/product/${product.id}`)
    }

    return (
        <div className="product-card" onClick={goProductInfo}>
            <header>
                <img src={product.images[0].url} alt="" />
            </header>
            <main>
                <section>
                    <h2>{product.brand}</h2>
                    <span>{product.title}</span>
                </section>
                <footer>
                    <article>
                        <span>Price: </span>
                        <span>${product.price}</span>
                    </article>
                    <i className='bx bxs-plus-circle'></i>
                </footer>
            </main>
        </div>
    )
}

export default ProductCard