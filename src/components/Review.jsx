import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Annie",
    rating: 5,
    review: "Absolutely loved the product! The material feels premium and the fit is flawless. Delivery was super quick too.",
    avatar: "https://avatar.iran.liara.run/public/100"
  },
  {
    name: "Veronica",
    rating: 4.5,
    review: "Good experience overall. The fabric is great and the size guide was accurate. Packaging was too good.",
    avatar: "https://avatar.iran.liara.run/public/88"
  },
  {
    name: "Iliana",
    rating: 5,
    review: "Customer service was excellent and the fit is perfect! Easily one of the best online shopping experiences I’ve had.",
    avatar: "https://avatar.iran.liara.run/public/83"
  }
  ,
  {
    name: "Ragini",
    rating: 4.5,
    review: "Aura Attire nailed it! The stitching, fabric, and overall quality are top-notch. Got lots of compliments too.",
    avatar: "https://avatar.iran.liara.run/public/78"
  },
  {
    name: "Neha",
    rating: 5,
    review: "I was skeptical at first, but the dress I ordered turned out amazing. It’s rare to find Indian brands that care this much!",
    avatar: "https://avatar.iran.liara.run/public/56"
  },
    {
    name: "Komal",
    rating: 4.5,
    review: "The clothes are good and looks very premium. High quality Material and perfect sizes. And the delivery is very quick too.",
    avatar: "https://avatar.iran.liara.run/public/55"
  }
];

function Review() {
    return (
        <section className="review-container w-full py-10 px-8 bg-zinc-300 ">
            <h1 className="text-center text-4xl font-bold mb-10">
                Our Reviews
            </h1>

            <div className="flex flex-wrap gap-8 justify-center">
                {reviews.map((product, idx) => (
                <div key={idx} className="bg-white shadow-sm hover:shadow-md rounded-sm hover:scale-105 cursor-pointer transition p-6 w-full sm:w-[45%] md:w-[30%]">
                    <div className="text-yellow-600 text-[1.2rem] mb-2">
                        {[...Array(Math.floor(product.rating))].map((_, i) => (
                            <span key={`full-${i}`} className="mdi mdi-star"></span>
                        ))}
                        {product.rating % 1 ? (
                            <span key="half" className="mdi mdi-star-half-full"></span>
                        ) : (
                            ''
                        )}
                        {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                            <span key={`empty-${i}`} className="mdi mdi-star-outline"></span>
                        ))}
                    </div>

                    <p className="text-gray-700">{`"${product.review}"`}</p>

                    <p className="text-sm font-semibold text-gray-900 mt-4 flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={product.avatar} />
                        <AvatarFallback>{product.name[0]}</AvatarFallback>
                    </Avatar>
                    {product.name}
                    </p>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Review;
