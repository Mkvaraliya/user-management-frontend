const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <span className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Loader;
