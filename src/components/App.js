import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import User from "../data/user";
console.log(User);

function App() {
  return (
    <div>
      <NavBar />
      <Home name="Lisa" city="Denver"/>
      <About bio="I made this!" linkedin="https://linkedin.com/in/liza" github="https://githbub.com/liza"/>
    </div>
  );
}

export default App;
