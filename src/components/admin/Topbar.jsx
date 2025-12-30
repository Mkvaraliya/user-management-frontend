import { useAuth } from "../../context/AuthContext";
import ThemeToggle from "../ThemeToggle";

const Topbar = () => {
    const { user, logout } = useAuth();

    return (
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            <div className="h-full max-w-7xl mx-auto px-8 flex items-center justify-between">

                {/* LEFT */}
                <div>
                    <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                        Users Management
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        Manage Data
                    </p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-5">

                    {/* SHOW THEME TOGGLE ONLY FOR ADMIN */}
                    {user?.role === "admin" && <ThemeToggle />}

                    {user?.role === "admin" && (
                        <div className="h-6 w-px bg-slate-300 dark:bg-slate-700" />
                    )}

                    <div className="flex pl-4 items-center gap-3">
                        <div className="text-right leading-tight">
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                                {user?.fullName}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                                {user?.role}
                            </p>
                        </div>

                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm">
                            {user?.fullName?.charAt(0)}
                        </div>
                    </div>

                    <button
                        onClick={logout}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
