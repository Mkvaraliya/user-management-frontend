import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import UsersTable from "../components/admin/UsersTable";
import Pagination from "../components/admin/Pagination";
import { toast } from "react-hot-toast";
import {
  fetchUsers,
  toggleUserStatus,
  deleteUser,
} from "../api/admin";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const loadUsers = async () => {
    const res = await fetchUsers({ page, limit, search });
    setUsers(res.data.data.users);
    setTotalPages(res.data.data.totalPages);
  };

  useEffect(() => {
    loadUsers();
  }, [page, search]);

  const handleToggle = async (id) => {
    try {
      setUsers((prev) =>
        prev.map((u) =>
          u._id === id ? { ...u, isActive: !u.isActive } : u
        )
      );

      await toggleUserStatus(id);
      toast.success("User status updated successfully");
    } catch (err) {
      toast.error("Failed to update user status");
      loadUsers(); // rollback
    }
  };

  const handleDelete = (id) => {
  toast((t) => (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium">
        Are you sure you want to delete this user?
      </p>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="px-3 py-1.5 text-sm rounded-md
                     bg-slate-200 hover:bg-slate-300
                     dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          Cancel
        </button>

        <button
          onClick={async () => {
            try {
              await deleteUser(id);

              setUsers((prev) => prev.filter((u) => u._id !== id));

              toast.dismiss(t.id);
              toast.success("User deleted successfully");
            } catch (err) {
              toast.dismiss(t.id);
              toast.error("Failed to delete user");
            }
          }}
          className="px-3 py-1.5 text-sm rounded-md
                     bg-red-500 hover:bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  ), {
    duration: 6000,
  });
};




  return (
    <AdminLayout>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Users</h2>

        <input
          type="text"
          placeholder="Search name or email..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="
            w-96 px-4 py-2.5
            rounded-lg text-sm
            border border-slate-300 dark:border-slate-600
            bg-white dark:bg-slate-800
            text-slate-900 dark:text-slate-100
            placeholder-slate-400 dark:placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          "
        />

      </div>

      <UsersTable
        users={users}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </AdminLayout>
  );
};

export default AdminDashboard;
