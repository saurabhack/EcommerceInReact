import {items} from "../assets/data"
import { Link } from "react-router-dom"
function Products({item}){
    return(
        <>
        <div className="p-4 ">
            <h1 className="text-2xl font-semibold">Products</h1>
        </div>
        
        <div className="flex w-[100vw]  justify-center">
        <div className=" grid grid-cols-3 gap-20 ">
            {
                item.map((data,i)=>{
                    return <div key={i} className="w-[260px] flex flex-col shadow-lg hover:shadow-gray-500 cursor-pointer gap-4 border p-2" >
                    <div className="w-full">
                        <Link to={`/product/${data.id}`}>
                        <img src={data.imgSrc} alt="" />
                        </Link>
                    </div>
                    <div >
                        <h1 className="text-xl font-bold">{data.title}</h1>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">{data.description}</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-green-500 p-2 rounded-xl text-white">
                        ₹{data.price}
                        </button >
                        <button className="bg-yellow-600  p-2 rounded-xl">Add to Cart</button>
                    </div>
                </div>  
                })
            }
        </div>
        </div>
        </>
    )
}
export default Products