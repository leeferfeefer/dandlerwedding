import React from 'react';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./pages/Home";
import { RSVP } from "./pages/RSVP";
import { Registry } from "./pages/Registry";
import { ComingSoon } from "./pages/ComingSoon";

export const Router = () => {

  React.useEffect(() => {
    document.title = "Dan + Chandler = Dandler"
  }, []);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="comingsoon" element={<ComingSoon />}/>
          <Route path="home" element={<Home />} />
          <Route path="rsvp" element={<RSVP />} />
          <Route path="registry" element={<Registry />} />
        </Routes>
    </BrowserRouter>
  );
};