import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ProductInfo from './pages/ProductInfo'


function App() {

    return (
        <>  
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:id' element={<ProductInfo/>}/>
            </Routes>
            
        </>
    )
}

export default App
