import { Outlet } from "react-router";
import { NavLink } from "react-router";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
