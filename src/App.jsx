import ThemeToggle from "./components/ThemeToggle";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center">
      {/* <ThemeToggle /> */}
      <AppRoutes />
    </div>
  );
}

export default App;
