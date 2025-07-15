import React, { useRef,useEffect, useState, useContext } from 'react'
import { CartContext } from './CartContext.jsx';
import { Button } from './ui/button.jsx';
import Carousel from './Carousel.jsx';

function ProductDetail({product, onClose}) {
    const dialogRef = useRef(null);
    const {addToCart}=useContext(CartContext);
    const [showConfirmation, setShowConfirmation] = useState(false);

useEffect(() => {
  const dialog = dialogRef.current;
  if (dialog) {
    dialog.showModal();
  }

  const handleClickOutside = (event) => {
    if (dialog && event.target === dialog) {
      handleClose();
    }
  };

  dialog?.addEventListener("click", handleClickOutside);

  return () => {
    dialog?.removeEventListener("click", handleClickOutside);
  };
}, []);


    const handleClose = ()=>{
        dialogRef.current.close();
        onClose();
    }
    
    useEffect(() => {
        const handleCancel = (e) => e.preventDefault();
        dialogRef.current?.addEventListener('cancel', handleCancel);
        return () => dialogRef.current?.removeEventListener('cancel', handleCancel);
    }, []);

    const [selectedSize,setSelectedSize] = useState('XS');
    const sizeArr =["XS", "S", "M", "L", "XL"];

    return (
        <dialog ref={dialogRef}  className="flex flex-col sm:flex-row w-full max-w-screen-lg max-h-full bg-white backdrop:bg-black/60 text-black overflow-y-auto rounded-none sm:rounded-md">
            <div className='w-full sm:w-1/2 flex-shrink-0'>
                <Carousel images={product.imgArr || [product.url, "././hero6.jpg", "././hero4.jpg"]} />
            </div>
            
            <div className='w-full p-6 sm:p-10 flex flex-col gap-6'>
                <button onClick={handleClose} className="absolute top-2 right-3 cursor-pointer font-bold text-stone-800 hover:text-black text-2xl"><span class="mdi mdi-close-thick"></span></button>
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-2xl font-semibold ">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className=" text-black ">₹ <span className="text-[1.35rem]">{product.price}</span>  
                        &nbsp;<s className="text-sm text-gray-600">₹{product.originalPrice}</s> 
                        <span className="text-orange-600 "> {product.discount}% off</span>
                    </p>
                    <p className='flex items-center gap-2'><span className="text-3xl text-zinc-700 mdi mdi-tshirt-crew"></span> <span>{product.material}</span></p>
                    <p className='flex items-center gap-2'><span className="text-3xl text-zinc-700 mdi mdi-truck-delivery"></span> <span>Free Shipping</span></p>
                    <p className='flex items-center gap-2'><span className="text-3xl text-zinc-700 mdi mdi-refresh"></span> <span>10 Days Return Policy</span></p>
                    <span className="text-yellow-600 text-[1.4rem]">
                        {
                            [...Array(Math.floor(product.rating))].map((_, i) => <span key={`full-${i}`} className="mdi mdi-star"></span>)
                        }
                        {
                            product.rating % 1 ? <span key="half" className="mdi mdi-star-half-full"></span>:'' 
                        }
                        {
                            [...Array(5 - Math.ceil(product.rating))].map((_, i) => <span key={`empty-${i}`} className="mdi mdi-star-outline"></span>)
                        }
                        <span className="text-[1rem] text-gray-500"> ({product.numberOfReview} reviews)</span>
                    </span>


                    <div className='flex items-center gap-2'>
                        <p className=" font-medium text-[1.1rem] ">Size:</p>
                        <div className="flex gap-3">
                            {sizeArr.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-3 py-2 w-12 rounded-full border-2 transition cursor-pointer
                                ${selectedSize === size
                                    ? "bg-gray-700 text-white border-gray-700"
                                    : "bg-transparent text-black border-gray-600"}`}
                            >
                                {size}
                            </button>
                            ))}
                        </div>
                    </div>

                    <Button onClick={()=>{addToCart(product, selectedSize); setShowConfirmation(true); setTimeout(() => setShowConfirmation(false), 1000);}}
                            className="mt-4 bg-zinc-900 border-2 border-zinc-900 p-2 rounded-sm text-white cursor-pointer hover:bg-zinc-800 active:scale-[99%] transition duration-150 w-full text-sm">
                        Add to cart
                    </Button>
                    <a href="/cart"><Button  onClick={() =>{ addToCart(product, selectedSize);}} className="bg-transparent text-zinc-900 border-2 border-zinc-900 p-2 rounded-sm cursor-pointer hover:bg-zinc-800 hover:text-white active:scale-[99%] transition duration-150 w-full text-sm">
                            Buy Now</Button>
                    </a>
                    {showConfirmation && (
                    <div className="fixed -bottom-32 sm:bottom-8 left-1/2 -translate-x-1/2 bg-zinc-500 text-white px-4 py-2 rounded-md text-sm shadow-lg animate-fadeIn z-50">
                        Added to cart
                    </div>
                    )}
                </div>
            </div>
            
        </dialog>
    );
}

export default ProductDetail;
