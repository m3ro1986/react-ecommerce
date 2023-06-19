import './styles/productInfo.css'
import './styles/home.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setIsLoading } from '../store/slices/isLoading.slice'
import SliderImgs from '../components/sliderImgs'
import ProductData from '../components/ProductData'
import ProductCard from '../components/ProductCard'

const ProductInfo = () => {

    const dispatch = useDispatch()
    const { similarProducts } = useSelector(state => state)
    const { id } = useParams()
    const [productInfo, setProductInfo] = useState(null)

    useEffect(() => {
        dispatch(setIsLoading(true))
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => setProductInfo(res.data))
            .catch(() => alert('error fetching productInfo'))
            .finally(() => dispatch(setIsLoading(false)))
    }, [id])



    console.log(productInfo)

    return (
        <div className='product-info'>
            <header className='product-info__header'>
                <SliderImgs product={productInfo} />
                <ProductData product={productInfo} />
            </header>
            <footer>
                <h3>Discover similar products</h3>
                <div className='card-container'>
                    {
                        similarProducts?.map(similar => (
                            productInfo?.id !== similar.id && <ProductCard key={similar.id} product={similar} />
                        ))
                    }
                </div>
            </footer>
        </div>
    )
}

export default ProductInfo