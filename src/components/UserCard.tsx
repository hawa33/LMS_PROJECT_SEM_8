import Image from "next/image"

interface UserCardProps {
  type: string;
  count?: number;
  year?: string;
}

const UserCard = ({ 
  type, 
  count = 1234, 
  year = '2024/25' 
}: UserCardProps) => {
  return (
    <div className='rounded-2xl odd:bg-SanPurple even:bg-SanYellow p-4 flex-1 min-w-[130px] shadow-sm'>
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-500 font-semibold">
          {year}
        </span>
        <Image 
         src="/more.png" 
          alt="more options" 
          width={20} 
          height={20} 
          className="cursor-pointer hover:opacity-70 transition-opacity"
        />
      </div>
      <h2 className="capitalize font-medium font-Merriweather text-xs text-gray-500 mb-1">
        {type}
      </h2>
      <h1 className="text-xl font-bold text-gray-800">
        {count.toLocaleString()}
      </h1>
    </div>
  )
}

export default UserCard