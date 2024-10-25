import { useState } from "react"
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar'
import Products from './component/Products'
import ProductInfo from "./component/ProductInfo"
import SearchItem from "./component/SearchItem"
import { items } from "./assets/data"
function App() {
  const [data,setData]=useState([...items])
  return (
    <>
    <Router>
    <Navbar setData={setData}/>
      <Routes>
      <Route path="/" element={<Products item={data}/>}/>
      <Route path="/product/:id" element={<ProductInfo/>}/>
      <Route path="/search/:term" element={<SearchItem/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
