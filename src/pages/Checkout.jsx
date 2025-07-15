import { CartContext } from '@/components/CartContext'
import { Button } from '@/components/ui/button';
import React, { useContext } from 'react'
import ShippingForm from '@/components/ShippingForm';


function Checkout() {
    const {getTotal,getSubtotal,getDiscount,cartItems} = useContext(CartContext); 

return (
    <>
    <header className="text-center w-full text-white p-6 bg-zinc-800 ">
            <h1 className=" logo text-4xl font-extrabold cursor-pointer"><a href="/">Aura Attire</a></h1>
    </header>

    <div className="px-4 sm:px-8 py-8 bg-stone-200 flex flex-wrap sm:items-start justify-center md:flex-nowrap gap-6 md:gap-4">
        <ShippingForm></ShippingForm>

        <div className="flex flex-col gap-3 bg-white rounded-sm shadow-md p-8 h-fit text-zinc-800 w-full max-w-96">
            <button className='bg-transparent border-2 border-zinc-900 p-1.5 rounded-sm cursor-pointer hover:bg-zinc-800 hover:text-white transition-color duration-300 '>
                <a href="/cart">Edit {cartItems.length} Items in Cart</a>
            </button>
            <div className="flex justify-between ">
                <span>Subtotal</span>
                <span className="font-semibold">₹{getSubtotal(cartItems)}</span>
            </div>
            <div className="flex justify-between text-red-600">
                <span>Discount</span>
                <span className="font-semibold">- ₹{getDiscount(cartItems)}</span>
            </div>
            <div className="border-t border-zinc-400 pt-3 flex justify-between font-bold text-zinc-900">
                <span>Total</span>
                <span>₹{getTotal(cartItems)}</span>
            </div>

            <div className="mt-4">
                <h3 className=" font-semibold mb-3">Payment Options:</h3>
                <div className=" flex flex-col gap-3">
                    <label htmlFor="payment-cod" className="flex items-center p-3 border border-zinc-300 rounded-md cursor-pointer hover:bg-zinc-50">
                        <input type="radio" id="payment-cod" name="payment-option" value="cod" className="mr-3 accent-blue-600"/>
                        <span className="text-sm">Cash on Delivery  </span>
                    </label>

                    <label htmlFor="payment-upi" className="flex items-center p-3 border border-zinc-300 rounded-md cursor-pointer hover:bg-zinc-50">
                        <input type="radio" id="payment-upi" name="payment-option" value="upi"  className="mr-3 accent-blue-600"/>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">UPI</span>
                            <img src="/upi1.png" alt="UPI Logo" className="h-4 w-auto"/>
                            <img src="/upi2.png" alt="UPI Logo" className="h-4 w-auto"/>
                            <img src="/upi3.png" alt="UPI Logo" className="h-4 w-auto"/>
                        </div>
                    </label>

                    <label htmlFor="payment-netbanking" className="flex items-center p-3 border border-zinc-300 rounded-md cursor-pointer hover:bg-zinc-50">
                        <input type="radio" id="payment-netbanking" name="payment-option" value="netbanking" className="mr-3 accent-blue-600" />
                        <span className="text-sm">Netbanking</span> &nbsp; <span className="text-[1rem] mdi mdi-bank"></span>
                    </label>


                    <label htmlFor="payment-cards" className="flex items-center p-3 border border-zinc-300 rounded-md cursor-pointer hover:bg-zinc-50"> 
                        <input type="radio" id="payment-cards" name="payment-option" value="cards" className="mr-3 "/>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Credit / Debit Cards</span>
                            <img src="/visa.png" alt="Visa" className="h-6 w-auto"/>
                            <img src="/mastercard.png" alt="Mastercard" className="h-6 w-auto"/>
                        </div>
                    </label>
                </div>
            </div>

        <div className="text-center mt-4">
            <Button className="font-medium px-6 py-4 w-fit cursor-pointer">
                <a href="/checkout">Proceed to Pay  ₹<span className='text-[1rem]'>{getTotal(cartItems)}</span></a>
            </Button>
        </div>
        </div>

    </div>


    </>
    )
}

export default Checkout