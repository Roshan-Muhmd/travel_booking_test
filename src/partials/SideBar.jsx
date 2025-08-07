import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <nav className="p-4 space-y-2">
        <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-200">
          Dashboard
        </Link>
        <Link to="/users" className="block p-2 rounded hover:bg-gray-200">
          Users
        </Link>
        <Link to="/settings" className="block p-2 rounded hover:bg-gray-200">
          Settings
        </Link>
        <Link to="/properties" className="block p-2 rounded hover:bg-gray-200">
          Properties
        </Link>
        <Link to="/logout" className="block p-2 rounded hover:bg-gray-200">
          Logout
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
