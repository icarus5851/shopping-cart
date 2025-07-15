import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import React, { useState } from 'react';
import { products } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

function Shop(){
    const [selectedProduct, setSelectedProduct] = useState();

    return(
        <>
            <Navbar/>
            <div className="text-center mt-6 mb-2">
            <h1 className="text-4xl font-bold tracking-wide text-zinc-800">SHOP</h1>
            <p className="text-zinc-500 text-base mt-2 max-w-xl mx-auto px-4">
                Discover our curated collection of premium fashion — where style meets comfort.
            </p>
            </div>

            {selectedProduct && (<ProductDetail
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />)}
            <div className="p-10 flex flex-wrap gap-12 justify-center">
                {products.map(product => (
                    <Card key={product.id}  product={product} 
                    onClick={() => setSelectedProduct(product)} ></Card>
                ))}
            </div>
            

        </>
    );
}
export default Shop