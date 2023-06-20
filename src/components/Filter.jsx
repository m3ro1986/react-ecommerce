import './styles/filter.css'
import { useDispatch, useSelector } from 'react-redux'
import { setShowAndHide } from '../store/slices/showAndHide.slice'
import { useNavigate } from 'react-router-dom'
import { getProductsThunk } from '../store/slices/products.slice'

const Filter = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { showAndHide } = useSelector( state => state)

    const toggleFilter = () => {
        showAndHide === 'hide' ? dispatch( setShowAndHide('show')) : dispatch( setShowAndHide('hide'))
    }

    const filterByCategory = (category) => {
        dispatch( getProductsThunk(category) )
        navigate('/')
        toggleFilter()
    }

    return (
        <div className={`filter ${showAndHide}`}>
            <i className='bx bx-right-arrow-alt' onClick={toggleFilter}></i>
            <section>
                <h2>filter by category</h2>
                <ul>
                    <li onClick={ () => filterByCategory('') }>All</li>
                    <li onClick={ () => filterByCategory(1) }>Stoves</li>
                    <li onClick={ () => filterByCategory(2) }>Smart TV</li>
                    <li onClick={ () => filterByCategory(3) }>Phones</li>
                    <li onClick={ () => filterByCategory(4) }>laptops</li>
                </ul>
            </section>
        </div>
    )
}

export default Filter