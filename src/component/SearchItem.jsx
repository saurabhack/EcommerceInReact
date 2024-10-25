import { useParams } from "react-router-dom"
import { items } from "../assets/data"
import { useEffect, useState } from "react"
import Products from "./Products"
function SearchItem(){
    const [data,setData]=useState([])
    const {term} = useParams()
    console.log("term =====",term)
    useEffect(()=>{
        const filterData = items.filter((product) => 
            product.title.toLowerCase().includes(term.toLowerCase())
        );
    console.log("Filtered data ==== ",filterData)
    setData(filterData)

    },[term,items])

    return(
        <>
        <Products item={data}/>
        </>
    )
}
export default SearchItem