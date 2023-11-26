import React from 'react';
import { useSelector } from 'react-redux';

// const Successfully = () => {
//   const selectedProduct = useSelector((state) => state.walmart.selectedProduct);

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Successfully Purchased</h2>
//       {selectedProduct ? (
//         <div>
//           <img
//             className="w-full h-64 object-cover mb-4"
//             src={selectedProduct.image}
//             alt={selectedProduct.title}
//           />
//           <h3 className="text-xl font-bold mb-2">{selectedProduct.title}</h3>
//           <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
//           <p className="text-lg font-bold">Price: ${selectedProduct.price}</p>
//           <p className="text-green-600 font-semibold mt-4">Thank you for your purchase!</p>
//         </div>
//       ) : (
//         <p>No product selected for purchase.</p>
//       )}
//     </div>
//   );
// };

// export default Successfully;

// Successfully.js

// import React from 'react';
// import { useSelector } from 'react-redux';

// const Successfully = () => {
//   const selectedProduct = useSelector((state) => state.walmart.selectedProduct);

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Successfully Purchased</h2>
//       {selectedProduct ? (
//         <div>
//           <img
//             className="w-full h-64 object-cover mb-4"
//             src={selectedProduct.image}
//             alt={selectedProduct.title}
//           />
//           <h3 className="text-xl font-bold mb-2">{selectedProduct.title}</h3>
//           <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
//           <p className="text-lg font-bold">Price: ${selectedProduct.price}</p>
//           <p className="text-green-600 font-semibold mt-4">Thank you for your purchase!</p>
//         </div>
//       ) : (
//         <p>No product selected for purchase.</p>
//       )}
//     </div>
//   );
// };

// export default Successfully;


// Successfully.js

const Successfully = () => {
    const selectedProduct = useSelector((state) => state.walmart.selectedProduct);
  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Successfully Purchased</h2>
        {selectedProduct ? (
          <div>
            {/* Render product details */}
            <img
              className="w-full h-64 object-cover mb-4"
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
            <h3 className="text-xl font-bold mb-2">{selectedProduct.title}</h3>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-bold">Price: ${selectedProduct.price}</p>
            <p className="text-green-600 font-semibold mt-4">Thank you for your purchase!</p>
          </div>
        ) : (
          // Handle case when product is not available
          <p>No product selected for purchase.</p>
        )}
      </div>
    );
  };
  
  export default Successfully;
  