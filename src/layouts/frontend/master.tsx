import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const NotFound = () => <h1>404 - Not Found</h1>;


const Master : React.FC=()=>{
        return <>
   return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
    </>;

}

export default Master;