import './styles/productData.css'

const ProductData = ({product}) => {

    return (
        <div className='product-data'>
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <footer>
                <section>
                    <article>
                        <span>Price</span>
                        <span>${product?.price}</span>
                    </article>
                    <div>
                        <span>Quantity</span>
                        <ul>
                            <li><i className='bx bxs-minus-circle'></i></li>
                            <li>1</li>
                            <li><i className='bx bxs-plus-circle'></i></li>
                        </ul>
                    </div>
                </section>
                <button>Add to cart</button>
            </footer>
        </div>
    )
}

export default ProductData