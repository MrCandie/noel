import "./app.css";
import { Header } from "./components/header";
import StatsCard from "./components/stats-card";
import ProfileList from "./components/profile-list";
import Chart from "./components/chart";

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

      <ProfileList />
    </div>
  );
};

export default Dashboard;
