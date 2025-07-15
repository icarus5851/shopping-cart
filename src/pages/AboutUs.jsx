import React from 'react';
import Navbar from '@/components/Navbar';

function AboutUs() {
  return (
    <div className='bg-zinc-300'>
      <Navbar />
      <section className="flex justify-center items-start px-4  py-10">
        <div className="max-w-4xl">
          <h1 className="text-center text-4xl font-bold mb-8">
            About Us
          </h1>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-indigo-600">Aura Attire</span> – where fashion meets soul. 
              Based in the heart of <span className="font-medium text-gray-700">Mumbai, Maharashtra</span>, 
              we’re more than just a clothing brand — we’re a movement towards mindful fashion.
            </p>

            <p>
              At Aura Attire, every piece is a reflection of elegance, comfort, and personality. 
              We blend modern design with a hint of Indian ethos, ensuring each collection is not only stylish but also meaningful.
            </p>

            <p>
              ✦ <strong>Premium Fabrics:</strong> We handpick quality materials that are soft on your skin and durable for everyday wear.<br />
              ✦ <strong>Ethical Production:</strong> Our production is transparent and sustainable, supporting local artisans and fair practices.<br />
              ✦ <strong>Inclusive Designs:</strong> We believe fashion should be for everyone — our styles fit diverse body types and preferences.<br />
              ✦ <strong>Customer-First Approach:</strong> From orders to returns, your satisfaction is our priority.
            </p>

            <p>
              Thank you for being a part of our journey. Whether you’re dressing up or winding down, Aura Attire helps you express your true self — with confidence, with comfort, and with class.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
