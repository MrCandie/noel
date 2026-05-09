import { Users, Link2 } from "lucide-react";

export default function StatsCard() {
  return (
    <div className="w-full px-4 mt-6 font-sans">
      <h2 className="text-[10px] font-semibold text-[#0E0319] mb-3">
        Network Stats
      </h2>

      <div className="w-full flex items-center gap-4">
        <div
          style={{ boxShadow: "0px 1px 2px 2px #00000026" }}
          className="flex-1 bg-white border-[1.5px] border-[#0E0319] rounded-[50px] py-4 px-4 md:px-8 flex items-center justify-between"
        >
          {/* Leads */}
          <div className="flex items-center gap-3">
            <Users size={24} strokeWidth={1.5} className="text-[#120D1D]" />
            <div>
              <div className="flex items-baseline">
                <span className="text-[#EE8821] text-[20px] font-bold leading-none">
                  45k
                </span>
              </div>
              <p className="text-[#727677] text-[13px] font-normal">Leads</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link2
              size={24}
              strokeWidth={1.5}
              className="text-[#120D1D] rotate-[-45deg]"
            />
            <div>
              <div className="flex items-baseline">
                <span className="text-[#0496FF] text-[20px] font-bold leading-none">
                  75k
                </span>
              </div>
              <p className="text-[#727677] text-[13px] font-normal">
                Connections
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-[20px] h-[20px] rounded-full border-2 border-white overflow-hidden bg-gray-200"
                >
                  <img
                    src={`https://i.pravatar.cc/100?u=network${i}`}
                    alt="Network member"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#555] font-medium mt-1 whitespace-nowrap">
              200k+ People
            </p>
          </div>

          <button
            style={{ boxShadow: "0px 1px 2px 2px #00000026" }}
            className="bg-[#D1BEF5] text-[#262A27] text-[8px] font-bold px-4 py-2.5 rounded-[20px] shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Active Members
          </button>
        </div>
      </div>
    </div>
  );
}
