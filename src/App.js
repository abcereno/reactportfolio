import React from "react";
import Home from "./Links/Home/Home";
import About from "./Links/About/About";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Navibar from "./Common/Navibar/Navibar";
import Footer from "./Common/Footer/Footer";
import NotFound from "./Links/NotFound/NotFound";
import Affiliate from "./Links/Affiliates/Affiliate";
function App() {
  return (
      <Router>
      <Navibar/>
      <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/affiliates' element={<Affiliate />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
      </Container>
      <Footer/>
      </Router>
  );
}

export default App;
