import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Button } from "./ui/button";

import { useState, useContext,useEffect } from "react";
import { CartContext } from "./CartContext.jsx";
import Login from "./Login.jsx";
import Signup from "./SignUp.jsx";




function Navbar(){
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.length;

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    
    useEffect(() => {
        if (isMobile) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isMobile]);

    return(
        <header className="flex flex-wrap transparent py-5 px-7 justify-between items-center text-zinc-800 ">   
            <h1 className=" logo lg:text-4xl text-[2rem] scale-105 text-zinc-700 font-extrabold cursor-pointer">
                <a href="/" >Aura <span className="text-zinc-950"> Attire. </span></a>
            </h1>

            <NavigationMenu className={"hidden md:flex nav-menu"}>
                <NavigationMenuList>
                    <NavigationMenuLink href="/">
                        Home
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/shop">
                        Shop
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/contact">
                        Contact
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/about">
                        About
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex justify-center items-center gap-3">
                <a className="relative" href="/cart">
                    <span className="mdi mdi-cart pr-4 text-[1.7rem] md:text-3xl cursor-pointer"></span>
                    {cartCount > 0 && (
                    <span className="absolute -top-1.6 right-2 bg-red-500 text-white text-[0.65rem] px-1.5 py-0.5 rounded-full">
                        {cartCount}
                    </span>
                    )}
                </a>
                <Button onClick={() => setShowLogin(true)} className='hidden md:inline-block cursor-pointer rounded-sm'>
                    Login
                </Button>
                <button onClick={() => setIsMobile((prev) => !prev)}
                    className="md:hidden cursor-pointer focus:outline-none group relative w-6 h-8">
                    <span className={`block absolute h-0.5 w-8 bg-black transform transition duration-300 ease-in-out ${isMobile ? "rotate-45 top-3.5" : "top-2"}`}/>
                    <span className={`block absolute h-0.5 w-8 bg-black transition duration-300 ease-in-out ${isMobile ? "opacity-0" : "top-4"}`}/>
                    <span className={`block absolute h-0.5 w-8 bg-black transform transition duration-300 ease-in-out ${isMobile ? "-rotate-45 top-3.5" : "top-6"}`}/>
                </button>
            </div>

            {isMobile && (
            <div className="fixed md:hidden overflow-y-auto top-[6.2rem] left-0 w-full h-[calc(100vh-6.2rem)] z-40 bg-white/70 backdrop-blur-sm flex flex-col justify-between px-6 py-8 animate-fadeIn">
                <NavigationMenu className='w-full flex items-start justify-start'>
                    <NavigationMenuList className="flex flex-col w-full items-start gap-2 text-xl font-medium text-zinc-800">
                        <NavigationMenuLink href="/" className="w-full px-3 py-2 rounded active:bg-[#f9f6f1] transition-all">
                            Home
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/shop" className="w-full px-3 py-2 rounded active:bg-[#F9F6F1] transition-all">
                            Shop
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/contact" className="w-full px-3 py-2 rounded active:bg-[#F9F6F1] transition-all">
                            Contact
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/about" className="w-full px-3 py-2 rounded active:bg-[#F9F6F1] transition-all">
                            About
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex flex-col w-full gap-3 border-t shadow-md hover:shadow-lg p-4 mb-20">
                    <Button onClick={() => { setIsMobile(false); setShowLogin(true);}} className='cursor-pointer rounded-sm mt-4'>
                    Login
                    </Button>
                    <Button onClick={() =>{setIsMobile(false); setShowSignup(true);}} className='bg-transparent text-zinc-900 border-2 border-zinc-900 p-2 rounded-sm cursor-pointer hover:bg-zinc-800 hover:text-white active:scale-[99%] transition duration-150 w-full text-sm'>
                    SignUp
                    </Button>
                </div>
            </div>
            )}

            {showLogin && (<Login onClose={() => setShowLogin(false)} switchToSignup={() => { setShowLogin(false); setShowSignup(true); }} />)}
            {showSignup && (<Signup onClose={() => setShowSignup(false)}/>)}
            
        </header>

    );
}
export default Navbar