export default function SearchInput({ value, onChange }) {
    return (
      <div className="mb-8">
        <p className="text-sm text-purple-500 mb-1">
          ค้นหาที่เที่ยว
        </p>
  
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          className="
            w-full
            border-b
            text-gray-500
            text-center
            border-gray-300
            py-2
            focus:outline-none
            focus:border-red-500
          "
        />
      </div>
    );
  }
  