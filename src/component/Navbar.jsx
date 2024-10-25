import { Link } from "react-router-dom"
import { items } from "../assets/data"
import { useNavigate } from "react-router-dom"
import {useState} from "react"
function Navbar({setData}){
    const [search,setSearch]=useState("")
    const navigator=useNavigate()
    function handleChange(e){
        e.preventDefault();
        navigator(`/search/${search}`)
    }
    function filterByPrice(element){
        const data=items.filter((product)=>{
            return product.price>=element
        })
        console.log("data===",data)
        setData([...data])
    }
    function filterByCategory(category){
        const data=items.filter((product)=>{
            return product.category.toLowerCase()>=category.toLowerCase()
        })
        setData([...data])
    }
    return(
        <>
        <div className="w-[100vw] h-[10vh] bg-purple-700 flex justify-between items-center">
            <div className="p-2">
                <h1 className="text-xl text-white font-semibold ">
               <Link to={'/'}>
               E-com
               </Link>
                </h1>            
            </div>
            <div>
                <form onSubmit={handleChange}>
                <input onChange={(e)=>{setSearch(e.target.value)}} className="w-[300px] p-3 focus:outline-none" type="text" placeholder="search your products"  />
                </form>
                
            </div>
            <div className="pr-4">
                <h1 className="text-xl text-white font-semibold">Cart</h1>
            </div>
        </div>
        <div className="w-[100vw] p-4 bg-pink-700 text-white  flex justify-between">
            <div className="cursor-pointer" onClick={()=>{filterByCategory("filter")}}>Filter</div>
            <div className="cursor-pointer" onClick={()=>{filterByCategory("")}}>NoFilter</div>
            <div className="cursor-pointer" onClick={()=>{filterByCategory("Mobiles")}}>Mobiles</div>
            <div className="cursor-pointer" onClick={()=>{filterByCategory("Laptops")}}>Laptops</div>
            <div className="cursor-pointer" onClick={()=>{filterByCategory("tablets")}}>tablets</div>
            <div className="cursor-pointer" onClick={()=>{filterByPrice("2999")}}>{">=2999"}</div>
            <div className="cursor-pointer" onClick={()=>{filterByPrice("4999")}}>{">=4999"}</div>
            <div className="cursor-pointer" onClick={()=>{filterByPrice("6999")}}>{">=6999"}</div>
            <div className="cursor-pointer" onClick={()=>{filterByPrice("8999")}}>{">=8999"}</div>

            <div></div>
        </div>
        </>
    )
}
export default Navbar