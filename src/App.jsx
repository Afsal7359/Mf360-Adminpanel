import React,{lazy,Suspense } from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const Shop = lazy(()=> import ('./Components/Shop/Shop'));
const Product = lazy (()=> import('./Components/Product/Product'));
const Area =lazy(()=>import('./Components/Area/Area'));
const Orderslist = lazy(()=> import("./Components/Orders/Orderslist"))
const Dashboard = lazy(() => import('./Components/Pages/Dashboard'));

const App = () => {
  return (
        <Router>
      
    <div className="main-wrapper">
       <Header/>
       <Sidebar/> 
       <div className="page-wrapper">
       <div className="content">
       <Suspense fallback={<div>Loading...</div>}>
       <Routes>
       <Route path="/" element={<Dashboard/>} />
       <Route path="/shop" element={<Shop/>} />
       <Route path="/product" element={<Product/>} />
       <Route path="/area" element={<Area/>} />
       <Route path="/orders" element={<Orderslist/>} />
       </Routes>
       </Suspense>
       </div>
      </div>
    </div>
    <div className="sidebar-overlay" data-reff=""></div>

 

    </Router>
  );
};

export default App;


// ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc