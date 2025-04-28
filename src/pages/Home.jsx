import { React } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <div>Write a bunch of good stuff about my app here!</div>
        <div>Some psycho actually liked my app! Here are the reviews!</div>
        <div>
          Some other additional info about my app! Like, it's free except for
          the database you are using!
        </div>
        <Link to="/db/register">
          <button>Sign Up!</button>
        </Link>
      </div>
      <footer>
        <small>Some copyright secret small stuff here</small>
      </footer>
    </div>
  );
}

export default Home;
