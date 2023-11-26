import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../../redux/walmartSlice';
import { Link } from 'react-router-dom';
  const Payment = () => {
  const products = useSelector((state) => state.walmart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Payment.js

const handleSubmit = () => {
    const lastPurchasedItem = products[products.length - 1];
  
    // Dispatch the action to set the selected product
    dispatch(setSelectedProduct(lastPurchasedItem));
      navigate('/');
      alert("Successfully purchased");
    // Navigate to the successfully purchased page

  };
  

    return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form  onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email Id *
          </label>
          <input
            required
            type="email"
            placeholder="Enter Your Email Address"
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Mobile Number *
          </label>
          <input
            required
            type="text"
            placeholder="Enter Your Mobile"
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Street *
          </label>
          <input
            required
            type="text"
            placeholder="Enter Street"
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Society / Village *
          </label>
          <input
            required
            type="text"
            placeholder="Enter Village/ Society"
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Pin Code *
          </label>
          <input
            required
            maxLength="6"
            type="text"
            placeholder="Enter Pin Code"
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            District *
          </label>
          <input
            maxLength="6"
            type="text"
            placeholder="Enter District"
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            State *
          </label>
          <input
            required
            maxLength="6"
            type="text"
            placeholder="Enter State"
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block mb-1">
            Card Number *
          </label>
          <input
            required
            type="number"
            maxLength='16'
            placeholder="Enter Card Number"
            inputmode="numeric" // to show numeric keyboard on mobile devices
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            form="none"
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Cancel Payment
          </button>

       
          <button 
        //    onClick= {() =>  dispatch(
        //     addToCartItems({
        //        id: item.id,
        //        title: item.title,
        //        description: item.description,
        //        image:item.image,
        //        price: item.price,
        //        quantity: 1,
        //      })
        //    )}
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Payment
             {/* {handleSubmit ? null : <Link to="/"><img src=" https://c8.alamy.com/comp/2JAHHK1/payment-completed-on-the-screen-as-symbol-of-online-transaction-2JAHHK1.jpg" /></Link>} */}
      </button>
        </div>
      </form>
    </section>
  );
};

export default Payment;
