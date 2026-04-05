import { type ReactNode } from "react";
import { NavLink } from "react-router";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiBarChartBoxLine,
  RiCalendarTodoLine,
  RiCompass3Line,
  RiFileChartLine,
  RiFolderSettingsLine,
  RiHome5Line,
  RiSettings4Line,
  RiUserStarLine,
} from "react-icons/ri";
import type { IconType } from "react-icons";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  children?: ReactNode;
}

interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon: IconType;
}

const sidebarMenus: { main: MenuItem[]; tools: MenuItem[] } = {
  main: [
    { id: "home", label: "Home", path: "/", icon: RiHome5Line },
    {
      id: "analytics",
      label: "Analytics",
      path: "/analitics",
      icon: RiBarChartBoxLine,
    },
    {
      id: "projects",
      label: "Projects",
      path: "/projects",
      icon: RiCompass3Line,
    },
    {
      id: "calendar",
      label: "Calendar",
      path: "/calendar",
      icon: RiCalendarTodoLine,
    },
  ],
  tools: [
    {
      id: "reports",
      label: "Reports",
      path: "/reports",
      icon: RiFileChartLine,
    },
    {
      id: "workspace",
      label: "Workspace",
      path: "/workspace",
      icon: RiFolderSettingsLine,
    },
    { id: "teams", label: "Teams", path: "/teams", icon: RiUserStarLine },
    {
      id: "settings",
      label: "Settings",
      path: "/settings",
      icon: RiSettings4Line,
    },
  ],
};

export function Sidebar({ open, onToggle, children }: SidebarProps) {
  const renderMenuGroup = (title: string, menus: MenuItem[]) => (
    <div className="space-y-2">
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 px-2 transition-all duration-300 ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}`}
      >
        {title}
      </p>
      <div className="space-y-1">
        {menus.map((menu, index) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.id}
              to={menu.path}
              end={menu.path === "/"}
              className={({ isActive }) =>
                `group relative w-full overflow-hidden rounded-xl flex items-center ${open ? "justify-start px-3" : "justify-center px-0"} py-2.5 cursor-pointer transition-all duration-300 border ${isActive ? "border-slate-900 bg-slate-900 text-white shadow-[0_10px_25px_-15px_rgba(15,23,42,0.8)]" : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`
              }
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`absolute inset-y-0 left-0 w-1 rounded-r-full transition-all duration-300 ${isActive ? "bg-white/85" : "bg-slate-900/0 group-hover:bg-slate-900/45"}`}
                  />
                  <span
                    className={`flex items-center justify-center min-w-9 h-9 rounded-lg transition-all duration-300 ${isActive ? "bg-white/12" : "group-hover:bg-white"}`}
                  >
                    <Icon size={19} />
                  </span>

                  <span
                    className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${open ? "ml-3 opacity-100 translate-x-0" : "w-0 opacity-0 -translate-x-2"}`}
                  >
                    {menu.label}
                  </span>

                  {!open && (
                    <span className="pointer-events-none absolute left-[4.1rem] top-1/2 -translate-y-1/2 rounded-md bg-slate-900 text-white text-xs px-2 py-1 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                      {menu.label}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );

  return (
    <aside
      className={`bg-white h-full transition-all duration-300 relative z-10 border-r border-slate-200/80 ${open ? "w-72" : "w-24"}`}
    >
      <button
        onClick={onToggle}
        className="absolute top-7 -right-7 bg-slate-900 text-white p-2 rounded-full shadow-md hover:scale-110 active:scale-95 transition-transform duration-200 flex items-center justify-center cursor-pointer"
      >
        {open ? (
          <RiArrowLeftSLine size={20} />
        ) : (
          <RiArrowRightSLine size={20} />
        )}
      </button>

      <div className="h-full flex flex-col p-4 gap-5">
        <div className="relative min-h-14 flex items-center rounded-2xl bg-linear-to-r from-slate-900 to-slate-700 text-white px-3 overflow-hidden">
          <span className="absolute -top-8 -right-6 h-16 w-16 rounded-full bg-white/10" />
          <div className="min-w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-sm font-bold">
            DB
          </div>
          <div
            className={`ml-3 transition-all duration-300 ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 w-0"}`}
          >
            <p className="text-xs text-slate-200">Dashboard</p>
            <h3 className="text-sm font-semibold tracking-wide">Insight Hub</h3>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {renderMenuGroup("Main", sidebarMenus.main)}
          {renderMenuGroup("Tools", sidebarMenus.tools)}
        </div>

        {children}
      </div>
    </aside>
  );
}
