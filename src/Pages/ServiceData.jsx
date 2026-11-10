import React from 'react';

export default function ServiceData() {
  const serviceData = [
    {
      icon: <ion-icon name="car"></ion-icon>,
      title: "Free Shipping",
      subtitle: "Free delivery on eligible orders, straight to your doorstep.",
      bg: "#fdefe6",
    },
    {
      icon: <ion-icon name="card"></ion-icon>,
      title: "Safe Payment",
      subtitle: "Enjoy a secure and convenient checkout experience.",
      bg: "#ceebe9",
    },
    {
      icon: <ion-icon name="shield-half-outline"></ion-icon>,
      title: "Secure Payment",
      subtitle: "Your payment details are handled securely during checkout.",
      bg: "#e2f2b2",
    },
    {
      icon: <ion-icon name="headset"></ion-icon>,
      title: "Back Guarantee",
      subtitle: "Shop confidently with our easy return and refund policy.",
      bg: "#d6e5fb",
    },
  ];

  return (
    <div className="flex flex-wrap gap-20 justify-center py-10 px-4 ">
      {serviceData.map((item, index) => (
        <div key={index} className='w-90 h-55 rounded-lg flex flex-col justify-center text-center p-5 transform hover:-translate-y-1'
        style={{ backgroundColor: item.bg }}>
          <div   className='bg-white w-12 h-12 rounded-full flex mx-auto  items-center justify-center text-3xl text-black mb-4 '>
            {item.icon}
          </div>
          <h1 className='text-lg font-bold text-black mb-2'>{item.title}</h1>
          <p className='text-gray-800'>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
