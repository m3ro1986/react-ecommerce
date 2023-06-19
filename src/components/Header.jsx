import Form from './Form';
import './styles/header.css';

const Header = () => {

    window.addEventListener ( 'scroll', () => { document.getElementById( 'hdr' ).classList.toggle( 'scroll-bar', window.scrollY > 0 ) })

    return (
        <div id='hdr' className='header'>
            <section>
                <article>
                    <h1>e_commerce</h1>
                    <Form/>
                </article>
                <ul>
                    <li>U</li>
                    <li>P</li>
                    <li>C</li>
                </ul>
            </section>
            <footer>
                <Form/>
            </footer>
        </div>
    )
}

export default Header