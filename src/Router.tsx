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
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="wedding" element={<Wedding />} />
          <Route path="rsvp" element={<RSVP />} />
          <Route path="travel" element={<Travel />} />
          <Route path="registry" element={<Registry />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
    </BrowserRouter>
  );
};