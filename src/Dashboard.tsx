import { Link } from "react-router";

function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      <div>
        Go to <Link to="/dashboard/settings">Settings</Link>
        {/* Go to <Link to="settings">Settings</Link> */}
      </div>
    </>
  );
}

export default Dashboard;
