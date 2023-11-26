import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { resetCart,incrementsitem,decrementitem,deleteItem} from '../../redux/walmartSlice';
import { Link } from 'react-router-dom';
const Cart = () => {
    const products  =  useSelector((state)=>state.walmart.products);
    console.log("hello Cart")
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState('');
    console.log(products);
      useEffect(() => {
        let Total = 0;
        products.forEach((item) => {
          Total += item.price * item.quantity;
        });
        setTotalPrice(Total);
      }, [products]);
        
  return (
  
    <div className='w-full bg-gray-100 p-4'>
     
    {
     products.length > 0 ? (
       <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>
       <div className='w-full h-full bg-white px-4 col-span-4'>
         <div className='font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
           <h2 className='text-3xl font-medium'>Shopping Cart</h2>
           <h4 className='text-xl font-semibold'>Subtitle</h4>
         </div>
         <div>
           {products.map((item) => (
             <div key={item.id} className='w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6'>
               <div className='w-full'>
                 {/* <img className='w-full h-44 object-contain' src={item.thumbnail} alt='ProductImg' /> */}
                 <img className='w-full h-44 object-contain' src={item.image} alt='ProductImg' />
                
               </div> 
               <div>
                 <h2 className='font-semibold text-lg'>{item.title}</h2>
                 <p className='pr-10 text-sm'>{item.description.substring(0,100)}</p>
                 <p className='text-base'>
                   Unit Price {" "}<span className='font-semibold'></span>${item.price}
                 </p>
               </div>
               <div className='flex items-center'>
                 <p>Qty:</p>
                 <p 
                  onClick={()=>dispatch(decrementitem(item.id))}
                   
                 className='cursor-pointer bg-gray-200 rounded-md hover:bg-gray-400 duration-300'>-</p>
                 <p>{item.quantity}</p>
                 <p 
                 onClick={()=>dispatch(incrementsitem(item.id))}
                 
                 className='cursor-pointer bg-gray-200 rounded-md hover:bg-gray-400 duration-300'>+</p>
             
       <button 
         onClick={()=>dispatch(deleteItem(item.id))}
       
       className='w-full font-titleFont font-medium text-base bg-gradient-to-tr
   from-red-400 to-red-200 border hover:from-red-300 hover:to-red-
   border-red-1000 hover:border-red-700 active:bg-gradient-to-bl
   active: from bg-red-400 active:to-red-500 duration-200 py-1 rounded-md mt-3'>Delete Item</button>
               </div>
               <div>
         <p  className='text-lg font-titleFont font-semibold'    >{item.price*item.quantity.toFixed(3)}</p>
               </div>
             </div>
           
            
           ))}
         </div>
         <div className='w-full py-2'>
           <button 
           className='px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500
           text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide'
   
         onClick={()=>dispatch(resetCart())}
      
      > Clear Cart  </button>
       </div>
       
       </div>
       <div className='w-full h-full bg-white col-span-1'>
         <div>
           <p className='flex gap-2 items-start col-span-1 flex items-center p-4'>
             <span>
               <CheckCircleIcon className
               ='bg-white text-green-500 rounded-full'/>
             </span> {" "}
             Your order Qualify for FREE Shipping this option at checkout .See details
           
           </p>
           <div>
       <p className='font-semibold px-10 py-1 gap-1 flex items-center justify-between'>
       Total:<span className='text-lg font-bold '>${totalPrice}</span>
       </p>
       </div>
       <Link to ='/payment'>
            <button className='w-full font-titleFont font-medium text-base bg-gradient-to-tr
   from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-
   border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
   active: from bg-yellow-400 active:to-yellow-500 duration-200 py-1 rounded-md mt-3'>Proceed to Buy</button>
      </Link>
         </div>
       </div>
       </div>
     
   
   
   
   
   
   
     ):<div className='flex justify-center items-center gap-4 py-10 '>
    <div>
   
   {/* <img  className='w-80 rounded-lg p-4 mx-auto'
   
    src={emptyCart} alt='emptyCartImg' />
    */}
     </div>
     <div className='w-96 bg-white flex flex-col items-center rounded-md shadow-lg'>  
     <h1 className='font-titleFont text-xl font-bold'>Your Cart feels lonely </h1>
     <p className='text-sm text-center'>
       {" "}
       Your Shopping cart lives to serve . Give it purpuse -fill it with books ,electronic,video,etc and make it happy.
     </p>
     <Link to='/'>
     <button  
     className='w-full font-titleFont font-medium text-base bg-gradient-to-tr
     from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-
     border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
     active: from bg-yellow-400 active:to-yellow-500 duration-200 py-1 rounded-md mt-3'> Continue Shopping</button>
     </Link>
       </div>
   
       </div>
    }
       </div>
     );
   };
   
   export default Cart;
 

      

































