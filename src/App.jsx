import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ProductInfo from './pages/ProductInfo'
import Filter from './components/Filter'


function App() {

    return (
        <>  
            <Header/>
            <Filter/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:id' element={<ProductInfo/>}/>
            </Routes>
            
        </>
    )
}

export default App
