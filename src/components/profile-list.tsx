import React, { useState } from "react";
import {
  Search,
  Sliders,
  LayoutGrid,
  MessageCircle,
  RefreshCw,
  SearchCode,
  Users,
} from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Thabo Molefe",
    location: "Johannesburg, South Africa",
    rating: "4.6",
    title: "CFO",
    industry: "Renewable Energy",
    avatarBg: "bg-[#FFF9C4]",
    avatarSeed: "Thabo",
  },
  {
    id: 2,
    name: "Thabo Molefe",
    location: "Johannesburg, South Africa",
    rating: "4.6",
    title: "CFO",
    industry: "Renewable Energy",
    avatarBg: "bg-[#9C27B0]",
    avatarSeed: "Molefe",
  },
];

export default function ProfileList() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full rounded-t-[40px] mt-6 mx-auto min-h-screen relative font-sans overflow-x-hidden bg-white">
      <div className="w-full px-1">
        <div className="bg-[#120D1D] rounded-t-[40px] px-5 pt-6 pb-[120px] min-h-[calc(100vh-16px)]">
          {/* Header row */}
          <div className="flex items-center gap-3 mb-6">
            {/* Title */}
            <div className="whitespace-nowrap">
              <p className="text-white text-[11px] italic font-light m-0 leading-[1.3]">
                Let's find your
              </p>
              <p className="text-white text-[20px] italic font-black m-0 tracking-tight leading-[1.2] uppercase">
                next deal
              </p>
            </div>

            {/* Search input */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#2A2435] border-none rounded-full py-[11px] pl-5 pr-11 text-white text-sm outline-none caret-white placeholder-gray-400"
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white flex">
                <Search size={18} />
              </div>
            </div>

            {/* Sliders icon */}
            <div className="text-white flex-shrink-0 flex cursor-pointer">
              <Sliders size={20} className="rotate-90" />
            </div>
          </div>

          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="border-t border-[#2a2435] pt-4 mb-4"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-2xl overflow-hidden ${profile.avatarBg} flex-shrink-0 flex items-end justify-center`}
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.avatarSeed}`}
                    alt={profile.name}
                    className="w-full mt-2"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-bold text-lg m-0 mb-[2px]">
                        {profile.name}
                      </h3>
                      <div className="flex items-center text-[#888] text-[10px]">
                        <span className="mr-1">📍</span>
                        {profile.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <span className="text-white font-bold text-base">
                        {profile.rating}
                      </span>
                      <span className="text-[#00FFA3] text-lg">★</span>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <div>
                      <p className="text-[#00FFA3] text-[8px] font-bold uppercase m-0 mb-[2px] tracking-wider">
                        Title
                      </p>
                      <p className="text-white text-sm font-bold m-0 uppercase">
                        {profile.title}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#00FFA3] text-[8px] font-bold uppercase m-0 mb-[2px] tracking-wider">
                        Industry
                      </p>
                      <p className="text-white text-sm font-bold m-0 uppercase">
                        {profile.industry}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] z-50 h-[88px]">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 390 88"
        >
          <path
            d="M0 18 L138 18 C153 18 160 46 195 46 C230 46 237 18 252 18 L390 18 L390 88 L0 88 Z"
            fill="#000"
          />
        </svg>

        <div className="relative h-full flex items-center justify-between px-7 z-10">
          <div className="bg-[#00FFA3] rounded-xl p-2 flex cursor-pointer hover:opacity-90 transition-opacity">
            <LayoutGrid size={24} className="text-black" />
          </div>

          <div className="text-white flex cursor-pointer hover:text-[#00FFA3] transition-colors">
            <MessageCircle size={24} />
          </div>

          {/* Center float button */}
          <div className="absolute left-1/2 top-[-16px] -translate-x-1/2 z-20">
            <div className="w-[72px] h-[72px] bg-white rounded-full p-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-[#e5e5e5] flex items-center justify-center">
                <RefreshCw size={32} className="text-[#2D4F4F]" />
              </div>
            </div>
          </div>

          <div className="text-white flex cursor-pointer ml-[60px] hover:text-[#00FFA3] transition-colors">
            <SearchCode size={24} />
          </div>

          <div className="text-white flex cursor-pointer hover:text-[#00FFA3] transition-colors">
            <Users size={24} />
          </div>
        </div>
      </nav>
    </div>
  );
}
