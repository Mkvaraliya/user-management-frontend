const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <p className="text-sm">
        Page {page} of {totalPages}
      </p>

      <div className="flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
