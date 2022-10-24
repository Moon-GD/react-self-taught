import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import NotFound from "./NotFound";
import Links from "./Links";
import NavLinks from "./NavLink";

function App() {
  return (
    <BrowserRouter>
      <Links></Links>
      <hr></hr>
      <NavLinks></NavLinks>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:ID" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
