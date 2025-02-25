const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4 border-collapse">
      <thead>
        <tr className="text-gray-500 text-sm border-b border-gray-300">
          {columns.map((col) => (
            <th key={col.accessor} className={`px-4 py-2 text-left ${col.className || ""}`}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
