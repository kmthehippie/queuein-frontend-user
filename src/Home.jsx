import { React, useState, useParams } from "react";
import Nav from "./components/Nav.jsx";

function Home() {
  const someFunction = () => {
    console.log("Hey we hit Sign Up Button!");
  };

  return (
    <div>
      <Nav />
      <div>
        <div>Write a bunch of good stuff about my app here!</div>
        <div>Some psycho actually liked my app! Here are the reviews!</div>
        <div>
          Some other additional info about my app! Like, it's free except for
          the database you are using!
        </div>
        <button type="button" onClick={someFunction}>
          Sign Up!
        </button>
      </div>
      <footer>
        <small>Some copyright secret small stuff here</small>
      </footer>
    </div>
  );
}

export default Home;
