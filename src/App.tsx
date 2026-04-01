import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(
    () => window.innerWidth >= 1024,
  );
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const largeScreen = window.innerWidth >= 1024;

  return (
    <div className="flex w-full h-screen">
      {/* SIDEBAR */}
      <aside
        className={`
          bg-red-500 h-full transition-all duration-300 relative z-10
          ${sidebarOpen ? "w-64" : "w-20"}
        `}
      >
        {/* Toggle button */}
        <button
          onClick={toggleSidebar}
          className="
            absolute top-4 -right-4 bg-red-600 text-white p-2 rounded-full shadow
            flex items-center justify-center
          "
        >
          {sidebarOpen ? (
            <RiArrowLeftSLine size={20} />
          ) : (
            <RiArrowRightSLine size={20} />
          )}
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main
        className={`${largeScreen ? "flex-1" : "fixed pl-20"} h-full w-full bg-blue-500 text-white flex flex-col`}
      >
        {/* HEADER */}
        <header className="w-full h-20 bg-green-500 p-5">
          <div className="bg-red-500 w-full h-full"></div>
        </header>
      </main>
    </div>
  );
}

export default App;
