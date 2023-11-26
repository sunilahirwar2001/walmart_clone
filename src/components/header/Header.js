// import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import GridViewIcon from '@mui/icons-material/GridView';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
// const Header = () => {
//      return (
//     <div className='flex'>
//       <h1 className='w-full font-extrabold  mx-auto p-8 font-medium'>Walmart</h1>
//       <img src='https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg'/>
//      <GridViewIcon/>
//      <h3>Department</h3>
//       <MiscellaneousServicesIcon/>

//       <h3>Services</h3>
//       <input type='text' placeholder='Search Walmart'/>
// <SearchIcon/>
//  <FavoriteBorderIcon/>
//       <button>Recorder
//         <span>MY Items</span>
//       </button>
//       <button>Sign in <h4>Account</h4></button>
//          <AddShoppingCartIcon/>
//     </div>
//   )
// }
// export default Header

// import React from 'react';
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import GridViewIcon from '@mui/icons-material/GridView';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
// import { Button } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// const Header = () => {
//   return (
//     <div>
//     <div className='flex items-center justify-between p-4 bg-blue-800 text-white'>
//       <div className='flex items-center space-x-4'>
//         <img
//           src='https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg'
//           alt='Walmart Logo'
//           className='w-12 h-12'
//         />
//         <div className='flex items-center space-x-2 group'>
//           <GridViewIcon className='text-2xl' />
//           <Button variant="contained" className='text-sm group-hover:bg-gray-600 group-hover:text-white transition duration-300'>Departments</Button>
//         </div>
//         <div className='flex items-center space-x-2 group'>
//           <MiscellaneousServicesIcon className='text-2xl' />
//           <Button variant="contained" className='text-sm group-hover:bg-gray-600 group-hover:text-white transition duration-300'>Services</Button>
//         </div>
//       </div>

//       <div className='flex items-center space-x-4'>
//         <input
//           type='text'
//           placeholder='Search Walmart'
//           className='p-2 border border-gray-600 rounded'
//         />
//         <SearchIcon className='text-2xl' />
//         <FavoriteBorderIcon className='text-2xl' />
//         <Button className='text-white hover:bg-gray-600 hover:text-white transition duration-300 group'>
//           Recorder
//           <span className='ml-1'>MY Items</span>
//         </Button>
//         <Button className='text-white hover:bg-gray-600 hover:text-white transition duration-300 group'>
//           Sign in <h4 className='text-sm'>Account</h4>
//         </Button>
//         <div className='relative group'>
//           <AddShoppingCartIcon className='text-2xl' />
//           <div className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs group-hover:block hidden'>2</div>
//         </div>
//       </div>
//         <hr></hr>
//         <div>
//           <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png' />
//                <button>How do you want your items</button> 
//                <ArrowDropDownIcon/>
//                <LocationOnIcon/>
//                <span class="mw-none-m mh2-m truncate" data-qm-mask="true">Sacramento, 95829</span>
//             <HomeIcon/>
//             <span>Palika bazar </span>
//             <div>
//               <button>Black friday deals</button>
//               <button>Grocerty Essentials</button>
//               <button>Christmas soap</button>
//               <button>Gift Finder</button>
//               <button>Electronics</button>
//             </div>
//         </div>
//     </div>
//     </div>
//   );
// };

// export default Header;










import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GridViewIcon from '@mui/icons-material/GridView';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div>
      {/* Upper Navbar */}
      <div className='flex items-center justify-between p-4 bg-blue-800 text-white'>
        <div className='flex items-center space-x-4'>
          <img
            src='https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg'
            alt='Walmart Logo'
            className='w-12 h-12'
          />
          <div className='flex items-center space-x-2 group'>
            <GridViewIcon className='text-2xl' />
            <Button variant="contained" className='text-sm group-hover:bg-gray-600 group-hover:text-white transition duration-300'>Departments</Button>
          </div>
          <div className='flex items-center space-x-2 group'>
            <MiscellaneousServicesIcon className='text-2xl' />
            <Button variant="contained" className='text-sm group-hover:bg-gray-600 group-hover:text-white transition duration-300'>Services</Button>
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          <input
            type='text'
            placeholder='Search Walmart'
            className='p-2 border border-gray-600 rounded'
          />
          <SearchIcon className='text-2xl' />
          <FavoriteBorderIcon className='text-2xl' />
          <Button className='text-white hover:bg-gray-600 hover:text-white transition duration-300 group'>
            Recorder
            <span className='ml-1'>MY Items</span>
          </Button>
          <Button className='text-white hover:bg-gray-600 hover:text-white transition duration-300 group'>
            Sign in <h4 className='text-sm'>Account</h4>
          </Button>
          <div className='relative group'>
            <AddShoppingCartIcon className='text-2xl' />
            <div className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs group-hover:block hidden'>2</div>
          </div>
        </div>
        <hr></hr>

        {/* New Line Start */}
        {/* <div className='flex items-center space-x-4'>
          <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png' alt='Phone Image' />

          <div className='flex items-center space-x-2'>
            <button>How do you want your items</button>
            <ArrowDropDownIcon />
            <LocationOnIcon />
            <span className='truncate mw-none-m mh2-m' data-qm-mask='true'>
              Sacramento, 95829
            </span>
            <HomeIcon />
            <span>Palika bazar</span>
          </div>

          <div className='flex items-center space-x-4'>
            <button>Black friday deals</button>
            <button>Grocery Essentials</button>
            <button>Christmas soap</button>
            <button>Gift Finder</button>
            <button>Electronics</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
