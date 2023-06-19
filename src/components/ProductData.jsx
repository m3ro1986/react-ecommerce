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
                            <li>-</li>
                            <li>1</li>
                            <li>+</li>
                        </ul>
                    </div>
                </section>
                <button>Add to cart</button>
            </footer>
        </div>
    )
}

export default ProductData