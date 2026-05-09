import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const data = [
  { day: "Mon", val: 56, bg: 85 },
  { day: "Tue", val: 89, bg: 100 },
  { day: "Wed", val: 44, bg: 65 },
  { day: "Thur", val: 67, bg: 90 },
  { day: "Fri", val: 59, bg: 85 },
  { day: "Sat", val: 87, bg: 100 },
  { day: "Sun", val: 100, bg: 100 },
];

export default function RoadSlopeChart() {
  return (
    <div className=" bg-[#F5F5F5] flex items-center justify-center p-6 font-sans">
      <div className="relative w-[531px] h-[331px]">
        <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#C8DBD7]">
          <div className="absolute top-0 left-0 w-[118px] h-[56px] bg-[#F5F5F5] rounded-br-[28px] z-10" />
        </div>

        <div className="absolute top-[5px] left-[0px] z-20">
          <button
            style={{ boxShadow: "0px 1px 2px 2px #00000026" }}
            className="h-[38px] px-6 rounded-[20px] bg-[#D1BEF5] shadow-[0_2px_4px_rgba(0,0,0,0.08)] flex items-center gap-4"
          >
            <span className="text-[10px] font-[700] text-[#262A27] tracking-[-0.2px]">
              More
            </span>

            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#1A1325"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="absolute top-[18px] left-[148px] z-20">
          <div className="bg-white h-[30px] px-4 rounded-full flex items-center justify-center shadow-[0_2px_5px_rgba(0,0,0,0.06)]">
            <span className="text-[10px] font-[700] text-[#000]">7 days</span>
          </div>
        </div>

        <div className="absolute left-[14px] right-[18px] top-[72px] bottom-[24px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: -18,
                bottom: 0,
              }}
              barCategoryGap="26%"
            >
              <CartesianGrid
                vertical={false}
                stroke="rgba(20,20,20,0.10)"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                dy={10}
                tick={{
                  fill: "#2A2A2A",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              />

              <YAxis
                domain={[0, 100]}
                ticks={[25, 50, 75, 100]}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#2A2A2A",
                  fontSize: 13,
                  fontWeight: 700,
                }}
                tickFormatter={(v) => `${v}%`}
              />

              <Bar
                dataKey="bg"
                barSize={44}
                radius={[999, 999, 999, 999]}
                fill="#B4C5C3"
              />

              <Bar dataKey="val" barSize={44} radius={[999, 999, 999, 999]}>
                {data.map((_, i) => (
                  <Cell key={i} fill="#12001F" />
                ))}

                <LabelList
                  dataKey="val"
                  content={({ x, y, width, value }) => (
                    <text
                      x={(x as number) + (width as number) / 2}
                      y={(y as number) + 22}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize={11}
                      fontWeight={800}
                    >
                      {value}%
                    </text>
                  )}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
