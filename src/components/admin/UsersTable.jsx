const UsersTable = ({ users, onToggle, onDelete }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-700/50 border-b">
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium uppercase">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((u) => (
                            <tr key={u._id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30">
                                <td className="px-6 py-4">{u.fullName}</td>
                                <td className="px-6 py-4">{u.email}</td>
                                <td className="px-6 py-4 capitalize">{u.role}</td>
                                <td className="px-6 py-4">
                                    {u.isActive ? "Active" : "Inactive"}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="inline-flex items-center gap-2">
                                        <button
                                            onClick={() => onToggle(u._id)}
                                            className="
                                                px-3 py-1.5 text-xs font-medium rounded-md
                                                bg-amber-500 hover:bg-amber-600
                                                text-white
                                                transition-colors
                                            "
                                        >
                                            Toggle
                                        </button>

                                        <button
                                            onClick={() => onDelete(u._id)}
                                            className="
                                                px-3 py-1.5 text-xs font-medium rounded-md
                                                bg-red-500 hover:bg-red-600
                                                text-white
                                                transition-colors
                                            "
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;
