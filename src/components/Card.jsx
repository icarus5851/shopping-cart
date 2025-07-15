import { Button } from "./ui/button";

function Card({product,onClick}){

    return(
        <>
            <div className="group relative flex flex-col gap-2 max-w-[330px] lg:w-[22%] md:w-3/12 sm:w-2/5 flex-grow  font-medium bg-transparent shadow-md rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className="aspect-[4/5] w-full overflow-clip">
                    <img src={product.url} alt={product.alt} 
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"/>
                </div>
                <div className="p-4 w-full">
                    <h3 className="  text-gray-900 text-[1.1rem]">{product.name}</h3>
                    <p className="mt-1 text-black">₹ <span className="text-[1.25rem]">{product.price}</span>  
                            &nbsp;    <s className="text-sm text-gray-600">₹{product.originalPrice}</s> 
                            <span className="text-teal-800 "> {product.discount}% off</span>
                    </p>
                    <span className="text-yellow-600 text-[1.2rem]">
                        {
                            [...Array(Math.floor(product.rating))].map((_, i) => <span key={`full-${i}`} className="mdi mdi-star"></span>)
                        }
                        {
                            product.rating % 1 ? <span key="half" className="mdi mdi-star-half-full"></span>:'' 
                        }
                        {
                            [...Array(5 - Math.ceil(product.rating))].map((_, i) => <span key={`empty-${i}`} className="mdi mdi-star-outline"></span>)
                        }
                        <span className="text-[0.9rem] text-gray-500"> ({product.numberOfReview} reviews)</span>
                    </span>
                    
                    <Button onClick={onClick} className="mt-4 rounded-sm bg-zinc-900 text-white cursor-pointer hover:bg-black transition duration-150 w-full text-sm">
                        View Details
                    </Button>
                </div>
            </div>
          
        </>
    );
}

export default Card