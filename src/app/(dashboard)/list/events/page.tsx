import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data"; // Assuming the data is imported from the correct location
import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Event Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const EventListPage = () => {
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-SanPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className=" md:table-cell">{item.date}</td>
      <td className=" md:table-cell">{item.startTime}</td>
      <td className=" md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/events/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full">
              <Image src="/view.png" alt="View" width={16} height={16} className="bg-transparent p-0"  />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-600 p-1">
              <Image src="/delete.png" alt="Delete" width={16} height={16} />
            </button>
          )} */}
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
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
          <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-SanPurple">
                <Image src="/filter.png" alt="Filter" width={20} height={20} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-SanPurple">
                <Image src="/sort.png" alt="Sort" width={20} height={20} />
              </button>
              {/* <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-SanPurple">
                <Image src="/plus.png" alt="Add" width={20} height={20} />
              </button> */}
              {role === "admin" &&
               <FormModal table="event" type="create" />
               }
            </div>
          </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={eventsData} />

        {/* PAGINATION */}
        <Pagination />
      </div>
    </div>
  );
};

export default EventListPage;
