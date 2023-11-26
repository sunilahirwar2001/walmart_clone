import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const MainContent = () => {
    const products = useSelector((state)=>state.walmart.products);
     const dispatch = useDispatch();
    console.log(products);
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    let getting = await fetch("https://fakestoreapi.com/products/");
    let response = await getting.json();
    setData(response);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item) => (
            <div key={item.id} className="bg-white p-2 shadow rounded">
              <img className="w-52 h-64 mx-auto mb-4" src={item.image} alt={item.title} />
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-2">{item.category}</p>
              <p className="text-lg font-semibold mb-2">${item.price}</p>
              <p className="text-gray-600">{item.description.substring(0,50)}</p>
              <button
        //  onClick={()=>dispatch(({
        //   id:item.id,
        //   title:item.title,
        //   description:item.description,
        //   price:item.price,
        //   image:item.image,

        //   quantity:1,
        //  }))}
        className='  font-titleFont font-medium text-base bg-gradient-to-tr
        from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-
        border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
        active: from bg-yellow-400 active:to-yellow-500 duration-200 py-1 rounded-md mt-3'>Add to Cart
        </button>
           
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;

