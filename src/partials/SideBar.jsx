import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-40 bg-white border-r hidden md:block">
      <nav className="p-4 space-y-2">
        <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-200">
          Dashboard
        </Link>
        <Link to="/users" className="block p-2 rounded hover:bg-gray-200">
          Users
        </Link>
        <Link to="/inventory" className="block p-2 rounded hover:bg-gray-200">
          Inventory
        </Link>
        <Link to="/bookings" className="block p-2 rounded hover:bg-gray-200">
          Bookings
        </Link>
        <Link to="/logout" className="block p-2 rounded hover:bg-gray-200">
          Logout
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
