"use client";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: "Total",
    count: 250,
    fill: 'white',
  },
  {
      name: "Girls",
      count: 50,
      fill: '#FAD643',
    },
    {
      name: "Boys",
      count: 200,
      fill: '#A0DAFB',
    },
];


const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full p-4 shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="relative w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt='MaleFemale' width={50} height={50}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "/>
      </div>

      {/* Bottom Stats */}
      <div className="flex justify-around mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-SanSky rounded-full"></div>
          <div>
            <h1 className="font-bold text-sm">1,256</h1>
            <h2 className="text-xs text-gray-500">Boys (55%)</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-SanYellow rounded-full"></div>
          <div>
            <h1 className="font-bold text-sm">1,256</h1>
            <h2 className="text-xs text-gray-500">Girls (45%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
