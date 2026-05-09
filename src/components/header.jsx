import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#0B0712] text-white p-8 px-10 rounded-[10px] relative overflow-hidden flex justify-between items-center h-[94px]">
      <div className="z-10">
        <h1 className="text-[24px] text-[#F3F0E9] font-extrabold leading-tight tracking-tight">
          Hello, Kwame!
        </h1>
        <p className="text-[#F3F0E9] text-[13px] mt-1 font-medium">
          Good morning!
        </p>
      </div>

      <div className="flex items-center gap-6 z-10">
        <div className="relative">
          <Bell size={20} strokeWidth={1.5} className="text-white opacity-90" />
          <span className="absolute top-1 right-0.5 w-2 h-2 bg-[#A855F7] rounded-full"></span>
        </div>

        <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-none relative">
          <div className="absolute inset-0 bg-[#D4E96D]"></div>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kwame"
            alt="Profile"
            className="relative z-10 w-full h-full object-cover mt-2"
          />
        </div>
      </div>

      <div className="absolute top-1/2 -left-6 w-12 h-12 bg-[#F5F5F5] rounded-full -translate-y-1/2"></div>
      <div className="absolute top-1/2 -right-6 w-12 h-12 bg-[#F5F5F5] rounded-full -translate-y-1/2"></div>
    </header>
  );
}
