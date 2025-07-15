import Card from "./Card";
import { products } from "@/data/products.js";
import { useState } from "react";
import { Button } from "./ui/button.jsx";
import ProductDetail from "./ProductDetail.jsx";

function Container(){
    const [selectedProduct, setSelectedProduct] = useState();
    return(
        <>
            {selectedProduct && (<ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)}/>)}
            <div id="featured" className="main-container bg-gray-100 p-10 flex flex-wrap gap-12 justify-center">
                <h1 className="w-full text-center text-4xl font-bold mb-4">Featured Items</h1>
                {products.slice(0, 4).map(product=><Card key={product.id} onClick={() => setSelectedProduct(product)} product={product}></Card>)}
                <div className="flex justify-center items-center">
                    <a href="/shop"><Button className="text-[1.1rem] p-6 rounded-sm cursor-pointer" >View All</Button></a>
                </div>
            </div>
        </>
    );
}

export default Container