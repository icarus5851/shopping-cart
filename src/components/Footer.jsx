function Footer() {

	return (
		<footer className="bg-zinc-900 text-gray-100 px-6 pt-9 ">
			<div className="max-w-7xl mx-auto flex justify-between flex-wrap gap-12 pb-8">
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-bold uppercase">Aura Attire</h3>
					<p className="text-sm text-gray-400">
						Premium clothing to express your unique style.
					</p>
					<div className="flex mt-4 space-x-4 text-2xl text-gray-300">
						<a href="#"><span className="mdi mdi-instagram text-pink-500 transition-colors" /></a>
						<a href="#"><span className="mdi mdi-facebook text-blue-600 transition-colors" /></a>
						<a href="#"><span className="mdi mdi-twitter text-sky-400 transition-colors" /></a>
						<a href="#"><span className="mdi mdi-linkedin text-blue-500 transition-colors" /></a>
					</div>
				</div>
				
				<div>
					<h3 className="text-lg font-bold mb-3">Products</h3>
					<ul className="space-y-2 text-sm text-gray-400">
						<li><a href="#" className="hover:text-blue-500 transition-colors">New Arrivals</a></li>
						<li><a href="#" className="hover:text-blue-500 transition-colors">Tops</a></li>
						<li><a href="#" className="hover:text-blue-500 transition-colors">Bottoms</a></li>
						<li><a href="#" className="hover:text-blue-500 transition-colors">Accessories</a></li>
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-3">Company</h3>
					<ul className="space-y-2 text-sm text-gray-400">
						<li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
						<li><a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
						<li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
						<li><a href="#" className="hover:text-blue-500 transition-colors">Press</a></li>
					</ul>
				</div>


				<div>
					<h3 className="text-lg font-bold mb-3">Services</h3>
					<ul className="space-y-2 text-sm text-gray-400">
						<li><a href="#" className="hover:text-blue-500 transition-colors">FAQ</a></li>
						<li><a href="#" className="hover:text-blue-500 transition-colors">Shipping & Returns</a></li>
						<li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
						<li><a href="#" className="hover:text-blue-500 transition-colors">Terms & Conditions</a></li>
					</ul>
				</div>
			</div>


			<div className="border-t border-zinc-700 p-2 text-center text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Aura Attire. All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;
