import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-1.5 ring-gray-300 px-3 py-1.5 focus-within:ring-SanPurpleLight transition-all">
      <Image src="/search.png" alt="Search Icon" width={14} height={14} className="opacity-80" />
      <input
        type="text"
        placeholder="Search..."
        className="min-w-[150px] w-[200px] p-1.5 bg-transparent outline-none text-sm placeholder-gray-400"
        aria-label="Search"
      />
    </div>
  );
};

export default TableSearch;
