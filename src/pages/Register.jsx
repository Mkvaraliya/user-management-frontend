import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { register, user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register(form);
      // ❌ no navigate here
    } catch (err) {
      setError("Password Format is Incoorect");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded w-96 shadow"
      >
        <h2 className="text-2xl font-semibold mb-1 text-center">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          Sign up to get started
        </p>

        <div className="min-h-[40px] mb-2">
          {error && (
            <div className="rounded bg-red-100 text-red-700 p-2 text-sm">
              ⚠️ {error}
            </div>
          )}
        </div>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700
                     focus:ring-2 focus:ring-green-500 focus:outline-none"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700
                     focus:ring-2 focus:ring-green-500 focus:outline-none"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password (min 8 chars)"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700
                     focus:ring-2 focus:ring-green-500 focus:outline-none"
          onChange={handleChange}
          required
        />

        <button
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded
                     hover:bg-green-700 disabled:opacity-50
                     disabled:cursor-not-allowed"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
