import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MyLoader from "./Common/MyLoader/MyLoader.jsx";
import AbcLoader from "./Common/AbcLoader/AbcLoader.jsx";
import Navibar from "./Common/Navibar/Navibar.jsx";
import Footer from "./Common/Footer/Footer.jsx";
import ScrollTop from "./Links/ScrollTop/ScrollTop.jsx";

const Home = lazy(() => import('./Links/Home/Home.jsx'));
const About = lazy(() => import('./Links/About/About.jsx'));
const NotFound = lazy(() => import('./Links/NotFound/NotFound.jsx'));
const Products = lazy(() => import('./Links/Products/Products.jsx'));
const Cart = lazy(() => import('./Links/Cart/Cart.jsx'));
const ViewProduct = lazy(() => import('./Links/ViewProduct/ViewProduct.jsx'));
const Ecommerce = lazy(() => import('./Links/Ecommerce/Ecommerce.jsx'));
const Fullstack = lazy(() => import('./Links/Fullstack/Fullstack.jsx'));
const Highlevel = lazy(() => import('./Links/Highlevel/Highlevel.jsx'));
const Pamasko = lazy(() => import('./Links/Pamasko/Pamasko.jsx'));
const FormAnya = lazy(() => import('./Links/FormAnya/FormAnya.jsx'));
const FormSebastian = lazy(() => import('./Links/FormSebastian/FormSebastian.jsx'));
const FormAmaya = lazy(() => import('./Links/FormAmaya/FormAmaya.jsx'));

const App = () => {
  const [showHome, setShowHome] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Check if the current path is NotFound route (usually /*)
  const isNotFound = location.pathname === "/*";

  return (
    <main>
      {showHome && <Navibar />}
      <Suspense fallback={<MyLoader />}>
        <Routes>
          <Route path="/" element={showHome ? <Home /> : <AbcLoader />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/pamasko" element={<Pamasko />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/highlevel" element={<Highlevel />} />
          <Route path="/product-catalog" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/view-product/:id" element={<ViewProduct />} />
          <Route path="/anya" element={<FormAnya />} />
          <Route path="/sebastian" element={<FormSebastian />} />
          <Route path="/amaya" element={<FormAmaya />} />
        </Routes>
      </Suspense>
      {!isNotFound && showHome && <Footer />} {/* Don't show Footer on NotFound */}
    </main>
  );
};

const AppWrapper = () => (
  <BrowserRouter
  //  basename="/reactportfolio"
   >
    <ScrollTop />
    <App />
  </BrowserRouter>
);

export default AppWrapper;
