import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import api from "../api/axios";
import Topbar from "../components/admin/Topbar";

const UserDashboard = () => {
  const { user, setUser } = useAuth();

  const [fullName, setFullName] = useState(user.fullName);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!fullName && !password) {
      toast.error("Nothing to update");
      return;
    }

    setLoading(true);

    try {
      const payload = {};
      if (fullName) payload.fullName = fullName;
      if (password) payload.password = password;

      const res = await api.put("/api/user/profile", payload);

      if (!res?.data?.success) {
        throw new Error("Update failed");
      }


      setUser((prev) => ({
        ...prev,
        ...res.data.data,
      }));

      setPassword("");
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Topbar />

      <main className="px-6 py-8">
  <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            User Profile
          </h1>

          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <form onSubmit={handleUpdate} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="
                    w-full px-4 py-2 rounded-lg
                    bg-white dark:bg-slate-700
                    border border-slate-300 dark:border-slate-600
                    text-slate-900 dark:text-slate-100
                    focus:ring-2 focus:ring-blue-500 focus:outline-none
                  "
                />
              </div>

              {/* Email (read-only) */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="
                    w-full px-4 py-2 rounded-lg
                    bg-slate-100 dark:bg-slate-700
                    border border-slate-300 dark:border-slate-600
                    text-slate-500 dark:text-slate-400
                    cursor-not-allowed
                  "
                />
              </div>

              {/* Role (read-only) */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Role
                </label>
                <input
                  type="text"
                  value={user.role}
                  disabled
                  className="
                    w-full px-4 py-2 rounded-lg
                    bg-slate-100 dark:bg-slate-700
                    border border-slate-300 dark:border-slate-600
                    text-slate-500 dark:text-slate-400
                    capitalize cursor-not-allowed
                  "
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Leave blank to keep current password"
                  className="
                    w-full px-4 py-2 rounded-lg
                    bg-white dark:bg-slate-700
                    border border-slate-300 dark:border-slate-600
                    text-slate-900 dark:text-slate-100
                    focus:ring-2 focus:ring-blue-500 focus:outline-none
                  "
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    px-6 py-2 rounded-lg text-sm font-medium
                    bg-blue-600 hover:bg-blue-700 text-white
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {loading ? "Updating..." : "Update Profile"}
                </button>
              </div>
            </form>
          </div>


          
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
