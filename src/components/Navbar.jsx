import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <h1 className="font-bold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm">
          {user?.fullName} ({user?.role})
        </span>
        <ThemeToggle />
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
