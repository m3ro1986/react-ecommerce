import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import './styles/header.css';
import { setShowAndHide } from '../store/slices/showAndHide.slice';

const Header = () => {

    window.addEventListener ( 'scroll', () => { document.getElementById( 'hdr' ).classList.toggle( 'scroll-bar', window.scrollY > 0 ) })
    const dispatch = useDispatch()
    const { showAndHide } = useSelector( state => state)

    const toggleFilter = () => {
        showAndHide === 'hide' ? dispatch( setShowAndHide('show')) : dispatch( setShowAndHide('hide'))
    }

    return (
        <div id='hdr' className='header'>
            <section>
                <article>
                    <h1>e_commerce</h1>
                    <Form/>
                </article>
                <ul>
                    <li><i className='bx bx-user'></i></li>
                    <li><i className='bx bx-purchase-tag-alt' ></i></li>
                    <li><i className='bx bx-cart'></i></li>
                    <li onClick={toggleFilter}><i className='bx bx-filter-alt'></i></li>
                </ul>
            </section>
            <footer>
                <Form/>
            </footer>
        </div>
    )
}

export default Header