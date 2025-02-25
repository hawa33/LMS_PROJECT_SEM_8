import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { examsData, lessonsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
    className: "hidden md:table-cell",
  },
];

const LessonListPage = () => {
  const renderRow = (item: Lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-SanPurpleLight transition-all"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="md:table-cell">{item.teacher}</td>

      <td className="md:table-cell whitespace-nowrap">
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/lessons/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full ">
              <Image src="/view.png" alt="View" width={16} height={16} />
            </button>
          </Link> */}
          {/* {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-600">
              <Image src="/delete.png" alt="Delete" width={16} height={16} />
            </button>
          )} */}
          {role === "admin" && (
            <>
              <FormModal table="lesson" type="update" data={item} />
              <FormModal table="lesson" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-SanPurpleLight">
                <Image src="/filter.png" alt="Filter" width={20} height={20} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-SanPurpleLight">
                <Image src="/sort.png" alt="Sort" width={20} height={20} />
              </button>
              {/* <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-SanPurpleLight">
                <Image src="/plus.png" alt="Add" width={20} height={20} />
              </button> */}
              {role === "admin" && 
              <FormModal table="lesson" type="create" />}
            </div>
          </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={lessonsData} />

        {/* PAGINATION */}
        <Pagination />
      </div>
    </div>
  );
};

export default LessonListPage;
