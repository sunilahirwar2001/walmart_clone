//  import React from "react";
//  import Header from "./components/header/Header";
// import MainContent from "./components/mainsection/MainContent";
// import Cart from "./components/cart/Cart";
// import {Link} from 'react-router-dom'
// import {
//   BrowserRouter,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Outlet,
//   Route,
//   Routes,
//   RouterProvider,
//   ScrollRestoration,
// } from "react-router-dom";

//  const App =() => {

//   // const Layout =()=>{
//   //   return(
//   //     <div>
//   //   <Header/>
//   //   <MainContent/>
//   //   </div>
//   //   )
//   // }


//   // const router = createBrowserRouter(
//   //   createRoutesFromElements(
//   //     <Route path="/" element={<Layout/>}>
      
//   //    <Route   path="/mainsection" element={<MainContent/>}    />
//   //    <Route path="/cart" element={<Cart />} />

//   //     </Route>
//   //   )
//   // );
//   return (
//     <div className="font-bodyFont bg-gray-100">
// {/* <RouterProvider router={router}></RouterProvider> */}
// <BrowserRouter>
// <Header/>
// <Routes>
// <Route  path="/cart"   element={<Cart/>}/>

//    <Route  path="/mainsection"   element={<MainContent/>}/>
 
// </Routes>
// </BrowserRouter>

//     </div>
//   );
// }
// export default App;


import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import MainContent from "./components/mainsection/MainContent";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <div className="font-bodyFont bg-gray-100">
      <Header />
      <Routes>
        <Route path="" element={<MainContent />} />
        <Route path="/mainsection" element={<MainContent />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
