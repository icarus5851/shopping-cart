import React from 'react';

const statesInIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
];

export default function ShippingForm() {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm max-w-5xl mx-auto">
		<h1 className="font-semibold text-2xl underline mb-6">Shipping Details</h1>
		<form className="flex flex-col gap-6">
			<div>
				<h2 className="font-semibold mb-2">Recipient Details</h2>
				<div className="flex flex-wrap gap-6">
					<div className="flex flex-col w-[250px]">
						<label htmlFor="name" className="text-sm text-zinc-700 mb-1">Recipient Name</label>
						<input type="text" id="name" name="name" placeholder='Full Name' className="border px-3 py-2 rounded" />
					</div>
					<div className="flex flex-col w-[250px]">
						<label htmlFor="phone" className="text-sm text-zinc-700 mb-1">Phone Number</label>
						<input type="tel" id="phone" name="phone" placeholder='10 digit number' className="border px-3 py-2 rounded" />
					</div>
				</div>
			</div>


			<div>
				<h2 className="font-semibold mb-2">Address Details</h2>
				<div className="flex flex-wrap gap-6">

					<div className="flex flex-col w-[250px] sm:max-w-1/2 ">
						<label htmlFor="street" className="text-sm text-zinc-700 mb-1">Address1</label>
						<input type="text" id="street" placeholder='House/Block No. , Society Name' name="street" className="border px-3 py-2 rounded" />
					</div>

					<div className="flex flex-col flex-grow w-[250px] sm:min-w-1/2">
						<label htmlFor="area" className="text-sm text-zinc-700 mb-1">Address2</label>
						<input type="text" id="area" name="area" placeholder='Area/Locality, LandMark' className="border px-3 py-2 rounded" />
					</div>

					<div className="flex flex-col flex-grow w-[250px] sm:min-w-[200px]">
						<label htmlFor="city" className="text-sm text-zinc-700 mb-1">City</label>
						<input type="text" id="city" name="city" placeholder='District' className="border px-3 py-2 rounded" />
					</div>

					<div className="flex flex-col flex-grow w-[250px] sm:min-w-[220px]">
						<label htmlFor="state" className="text-sm text-zinc-700 mb-1">State</label>
						<select id="state" name="state" className="border px-3 py-2 rounded bg-white">
							<option value="">Select State</option>
							{statesInIndia.map(state => (
							<option key={state} value={state}>{state}</option>
							))}
						</select>
					</div>

					<div className="flex flex-col w-[200px] sm:min-w-[200px]">
						<label htmlFor="pincode" className="text-sm text-zinc-700 mb-1">Pincode</label>
						<input type="text" id="pincode" placeholder='6 digit pin' name="pincode" className="border px-3 py-2 rounded" />
					</div>

					<div className="flex flex-col sm:w-[300px]">
						<label htmlFor="country" className="text-sm text-zinc-700 mb-1">Country</label>
						<input type="text" id="country" name="country" value="India" disabled className="border px-3 py-2 rounded bg-gray-100" />
					</div>
				</div>
			</div>

			<div className="flex items-center gap-3 mt-2">
				<input type="checkbox" id="giftwrap" name="giftwrap" className="w-5 h-5" />
				<label htmlFor="giftwrap" className="text-sm text-zinc-800">Add Gift Wrap</label>
			</div>

		</form>
	</div>
  );
}
