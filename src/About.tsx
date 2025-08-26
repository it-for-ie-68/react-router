import { NavLink, Link } from "react-router";

function About() {
  return (
    <>
      <div>About Page</div>
      <div>
        Go <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default About;
