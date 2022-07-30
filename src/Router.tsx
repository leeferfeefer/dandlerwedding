import React from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { RSVP } from "./pages/RSVP/RSVP";
import { Registry } from "./pages/Registry/Registry";
import { Wedding } from './pages/Wedding/Wedding';
import { Travel } from './pages/Travel/Travel';
import { Gallery } from './pages/Gallery/Gallery';
import { Test } from './pages/Test/Test';
import { NavBar } from "./components/NavBar/NavBar";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// import Sidebar from "./components/Sidebar/Sidebar";
// import Navbar from "./components/Navbar/Navbar";

export const Router = () => {
  const [ isopen, setisopen ] = React.useState(false);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <BrowserRouter>
      <NavBar onHamburgerClick={toggle}/>

      {/* <NewNavBar toggle={toggle} /> */}
      {/* <Sidebar isopen={isopen} toggle={toggle} /> */}

      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wedding" element={<Wedding />} />
        <Route path="rsvp" element={<RSVP />} />
        <Route path="travel" element={<Travel />} />
        <Route path="registry" element={<Registry />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};