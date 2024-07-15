import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy, useEffect, useState, useContext } from 'react';
import Navibar from "./Common/Navibar/Navibar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MyLoader from "./Common/MyLoader/MyLoader.jsx";
import AutoNavigateContext from './Common/Contexts/Contexts.jsx';


const Home = lazy(() => import('./Links/Home/Home.jsx'));
const About = lazy(() => import('./Links/About/About.jsx'));
const NotFound = lazy(() => import('./Links/NotFound/NotFound.jsx'));
const SecRow = lazy(() => import('./Links/SecRow/SecRow.jsx'));
const ThirdRow = lazy(() => import('./Links/ThirdRow/ThirdRow.jsx'));
const Section = lazy(() => import('./Links/Section/Section.jsx'));
const Last = lazy(() => import('./Links/Last/Last.jsx'));
const Credits = lazy(() => import('./Links/Credits/Credits.jsx'));

const App = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(0);
  const { isAutoNavigate } = useContext(AutoNavigateContext);

  const pages = ["/",'/secrow', '/thirdrow', "/section", "/last"];

  useEffect(() => {
    let interval;
    if (isAutoNavigate) {
      interval = setInterval(() => {
        setCurrentPage(prevPage => {
          const nextPage = (prevPage + 1) % pages.length;
          navigate(pages[nextPage]);
          return nextPage;
        });
      }, 6000); // Navigate every 10 seconds
    }

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoNavigate, navigate]);

  return (
    <main>
      <Navibar />
      <Container>
        <Suspense fallback={<MyLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/secrow" element={<SecRow />} />
            <Route path="/thirdrow" element={<ThirdRow />} />
            <Route path="/section" element={<Section />} />
            <Route path="/last" element={<Last />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </main>
  );
};

const AppWrapper = () => (
  <BrowserRouter basename="/reactportfolio">
    <App />
  </BrowserRouter>
);

export default AppWrapper;
