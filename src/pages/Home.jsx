import Container from "@/components/Container"
import Hero from "@/components/Hero"
import Review from "@/components/Review"

function Home(){
	return ( 
		<div>
			<a href="/shop" className="relative block bg-black text-white overflow-hidden h-8 w-full cursor-pointer">
				<div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full">
					<div className="scrolling-text whitespace-nowrap text-xs tracking-wider font-medium uppercase flex gap-12 min-w-max px-4">
					{Array.from({ length: 20 }).map((_, i) => (
						<span key={i}>Get luxury fashion at unmatched quality</span>
					))}
					</div>
				</div>
			</a>
			<Hero/>
			<Container/>
			<Review/>
		</div>
  	)
}

export default Home
