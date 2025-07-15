import Navbar from "./Navbar.jsx";

function Hero() {
    return (
        <div className="relative bg-[url(/heromob2.jpg)] sm:bg-[url(/heromob.jpg)] md:bg-[url(/hero.jpg)] bg-cover bg-right sm:bg-center bg-no-repeat min-h-screen w-full overflow-hidden flex flex-col
        before:absolute before:inset-0 before:bg-[#CCC8C5]/60 before:content-[''] before:z-0 md:before:hidden">
            <Navbar />

            <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 h-full px-4 sm:px-8 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16 max-w-[95%] sm:max-w-[65%] md:max-w-[65%]">
                <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900">
                    Where Style Speaks Volumes
                </h1>

                <p className="mt-2 text-[0.94rem]  sm:text-base md:text-lg text-zinc-950">
                    Discover a curated collection of modern and sophisticated apparel designed to enhance your individual aura. Explore our latest arrivals and find pieces that speak to your unique style and elevate your everyday wardrobe.
                </p>

                <div className="flex gap-6 sm:gap-2 w-full">
                    <a href="#featured" className="bg-zinc-900 border-2 border-zinc-900 p-2 rounded-sm text-white hover:bg-zinc-800">
                        Start Shopping
                    </a>
                    <a href="/cart" className="border-2 border-zinc-950 p-2 px-6 rounded-sm hover:bg-zinc-800 hover:text-white">
                        Go to Cart
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
