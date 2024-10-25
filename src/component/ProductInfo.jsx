import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../assets/data";

function ProductInfo() {
  const { id } = useParams();
  console.log("id====",id);
  const newId=parseInt(id)
  console.log(newId)

  const [product, setProduct] = useState({});
  const [relevantProducts, setRelevant] = useState([]); 

  console.log("items ========= ",items)
  function currentProduct(){
    const filterItems=items.filter((products)=> products.id==id)
     setProduct(filterItems[0])
  }
 useEffect(() => {
    currentProduct()
  }, [id]); 

  return (
    <>
    <div className="w-[50vw] p-3">
        <img src={product.imgSrc} className="w-[50%]" />
        <h1 className="text-xl">{product.title}</h1>
        <p className="text-sm text-gray-500">{product.description}</p>
        
    </div>
       
    </>
  );
}

export default ProductInfo;
