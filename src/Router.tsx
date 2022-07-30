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
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export const Router = () => {
  const [ isopen, setisopen ] = React.useState(false);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <BrowserRouter>
      <NavBar onHamburgerClick={toggle}/>
      <HamburgerMenu isOpen={isopen} toggle={toggle} />
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