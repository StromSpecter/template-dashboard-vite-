import { type ReactNode } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  children?: ReactNode;
}

export function Sidebar({ open, onToggle, children }: SidebarProps) {
  return (
    <aside
      className={`bg-white h-full transition-all duration-300 relative z-10 ${open ? "w-64" : "w-20"}`}
    >
      <button
        onClick={onToggle}
        className="absolute top-4 -right-4 bg-black text-white p-2 rounded-full shadow flex items-center justify-center cursor-pointer"
      >
        {open ? (
          <RiArrowLeftSLine size={20} />
        ) : (
          <RiArrowRightSLine size={20} />
        )}
      </button>
      {children}
    </aside>
  );
}
