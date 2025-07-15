import Navbar from "@/components/Navbar";
import QuantitySelector from "@/components/QuantitySelector";
import { useContext,useState } from "react";
import { CartContext } from "@/components/CartContext";
import { Button } from "@/components/ui/button";


function Cart(){
	const {cartItems,removeFromCart,getTotal,getSubtotal,getDiscount} = useContext(CartContext);
	const [showConfirmation, setShowConfirmation] = useState(false);//for delete confirmation
	return(
		<div className=""> 
			<Navbar/>
            <h1 className="w-full text-center text-2xl font-bold mt-8">Your Cart ({cartItems.length} items)</h1>
			<div className="relative p-6 sm:p-10 flex flex-col items-center gap-8 text-[#1E1E1E]">
				{cartItems.map((cartProduct) => (
					<div key={`${cartProduct.id}-${cartProduct.selectedSize}`}
						className="relative w-full md:max-w-[70%] flex flex-col sm:flex-row justify-between items-center border border-zinc-200 shadow-md hover:shadow-lg p-5 sm:px-5 px-10 rounded-sm gap-6">
						<div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
							<img src={cartProduct.url} alt="image" className="sm:h-36 h-40  w-auto rounded-sm"/>
							<div className="text-center sm:text-left">
								<div className="font-medium">{cartProduct.name}</div>
								<div>Size: <span className="font-medium">{cartProduct.selectedSize}</span></div>
								<div> ₹<span className="font-medium text-[1.12rem]">{cartProduct.price}</span>{" "}<s className="text-sm text-gray-600">₹{cartProduct.originalPrice}</s></div>
							</div>
						</div>
						<div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
							<QuantitySelector id={cartProduct.id} selectedSize={cartProduct.selectedSize} quantity={cartProduct.quantity} />
							<button className="sm:static absolute top-4 right-4 rounded-sm bg-white border border-zinc-300 shadow cursor:pointer transition-all duration-150"
							onClick={() =>{ removeFromCart(cartProduct.id, cartProduct.selectedSize); setShowConfirmation(true); setTimeout(() => setShowConfirmation(false), 1000);}}>
								<span className="text-[1.4rem] text-zinc-500 mdi mdi-trash-can-outline px-2 py-1"></span>
							</button>
						</div>
					</div>
				))}
				{showConfirmation && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-zinc-500 text-white px-4 py-2 rounded-md text-sm shadow-lg animate-fadeIn z-50">
                    Removed from cart
                </div>
                )}
			</div>
			

			{cartItems.length>0?

			(<div className="w-[75%] md:w-[65%] sm:w-8/10 border-t border-zinc-400 mb-8 py-8 mx-auto  flex flex-col gap-5 items-center md:items-end">

				<div className="flex flex-col gap-3 text-zinc-800 w-full max-w-80">
					<div className="flex justify-between text-lg">
						<span>Subtotal</span>
						<span className="font-semibold">₹{getSubtotal(cartItems)}</span>
					</div>

					<div className="flex justify-between text-lg text-red-600">
						<span>Discount</span>
						<span className="font-semibold">– ₹{getDiscount(cartItems)}</span>
					</div>

					<div className="border-t border-zinc-400 pt-3 flex justify-between text-xl font-bold text-zinc-900">
						<span>Total</span>
						<span>₹{getTotal(cartItems)}</span>
					</div>					
					<div className="text-sm text-green-700 text-center">You saved ₹{getDiscount(cartItems)} on this orrder!🎉</div>
					<div className="text-center mt-4">
						<Button className='font-medium px-12 py-4 w-fit  cursor-pointer'><a href="/checkout">CheckOut</a></Button>
					</div>

				</div>
			</div>) 
			:
			(<div>
				<div className="flex flex-col items-center justify-center">
					<img src="/empty-cart.png" className=" h-40 aspect-auto" alt="" />
					<div className="max-w-60 text-center">Your Cart is Empty</div>
				</div>
				<div className="flex justify-center items-center p-8">
					<Button className="text-[1.1rem] p-6 rounded-sm" ><a href="/shop"><span class="mdi mdi-shopping"></span> Return to Shop</a></Button>
				</div>
			</div>)}

		</div>
	);
}
export default Cart