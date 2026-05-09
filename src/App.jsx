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
import {
  Search,
  Bell,
  Sliders,
  LayoutGrid,
  MessageCircle,
  RefreshCw,
  SearchCode,
  Users,
} from "lucide-react";
import "./app.css";
import { Header } from "./components/header";
import StatsCard from "./components/stats-card";
import ProfileList from "./components/profile-list";
import Chart from "./components/chart";

const data = [
  { day: "Mon", val: 56 },
  { day: "Tue", val: 89 },
  { day: "Wed", val: 44 },
  { day: "Thur", val: 67 },
  { day: "Fri", val: 59 },
  { day: "Sat", val: 87 },
  { day: "Sun", val: 100 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#120D1D] max-w-md mx-auto overflow-hidden shadow-2xl relative">
      <div className="px-2">
        <Header />
      </div>

      <StatsCard />

      <Chart />
      <div className="px-4">
        <div
          style={{
            boxShadow: "0px 1px 2px 0px #0000004D",

            // boxShadow: "0px 4px 7px 3px #00000026",
          }}
          className="bg-[#EFEFEF] rounded-full p-2 flex justify-between shadow-inner"
        >
          <button className="w-full flex items-center justify-center py-3 text-xs font-medium text-[#000]">
            Directory
          </button>
          <button className="w-full flex items-center justify-center py-3 text-xs font-bold bg-[#D1BEF5] text-[#0E0319] rounded-full shadow-sm">
            Smart matches
          </button>
          <button className="w-full flex items-center justify-center py-3 text-xs font-medium text-[#000]">
            Active Leads
          </button>
        </div>
      </div>

      {/* Profile List Section */}
      <ProfileList />

      {/* Custom Bottom Nav */}
    </div>
  );
};

export default Dashboard;
