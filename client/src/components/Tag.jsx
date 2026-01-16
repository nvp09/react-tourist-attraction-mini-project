export default function Tag({ label, onClick }) {
    return (
      <button
        onClick={() =>
          onClick((prev) =>
            prev.includes(label) ? prev : `${prev} ${label}`.trim()
          )
        }
        className="text-sm text-blue-500 underline"
      >
        {label}
      </button>
    );
  }
  