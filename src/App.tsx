import { useEffect, useState } from "react";
import { Header, SearchOverlay, Sidebar } from "./components/ui";
import type { Information, Notification } from "./components/ui";

const notifications: Notification[] = [
  {
    title: "Pesanan baru masuk",
    detail: "3 transaksi baru perlu dikonfirmasi.",
    time: "2 menit lalu",
  },
  {
    title: "Jadwal meeting tim",
    detail: "Meeting sprint review dimulai pukul 13:00.",
    time: "30 menit lalu",
  },
  {
    title: "Tagihan bulanan",
    detail: "Invoice langganan dashboard jatuh tempo besok.",
    time: "1 jam lalu",
  },
];

const Informations: Information[] = [
  {
    title: "Sistem maintenance",
    detail: "Pembaruan server dijadwalkan malam ini pukul 23:00.",
    category: "System",
  },
  {
    title: "Fitur analitik baru",
    detail: "Panel performa mingguan sekarang tersedia di dashboard.",
    category: "Update",
  },
  {
    title: "Panduan penggunaan",
    detail: "Dokumentasi modul laporan sudah diperbarui.",
    category: "Docs",
  },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(
    () => window.innerWidth >= 1024,
  );
  const largeScreen = window.innerWidth >= 1024;

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageOpen, setMessageOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const closePanels = () => {
    setMessageOpen(false);
    setInfoOpen(false);
    setProfileOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const openSearch = () => {
    closePanels();
    setSearchOpen(true);
  };

  const toggleMessages = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setInfoOpen(false);
    setProfileOpen(false);
    setMessageOpen((prev) => !prev);
  };

  const toggleInformation = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setMessageOpen(false);
    setProfileOpen(false);
    setInfoOpen((prev) => !prev);
  };

  const toggleProfile = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setMessageOpen(false);
    setInfoOpen(false);
    setProfileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
        closePanels();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex w-full h-screen">
      <SearchOverlay
        open={searchOpen}
        onClose={closeSearch}
        query={searchQuery}
        onQueryChange={setSearchQuery}
      />

      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />

      <main
        className={`${largeScreen ? "flex-1" : "fixed pl-20"} h-full w-full bg-slate-50 flex flex-col`}
      >
        <Header
          onSearchOpen={openSearch}
          messageOpen={messageOpen}
          onToggleMessages={toggleMessages}
          notifications={notifications}
          infoOpen={infoOpen}
          onToggleInfo={toggleInformation}
          Informations={Informations}
          profileOpen={profileOpen}
          onToggleProfile={toggleProfile}
          userName="John Doe"
          userEmail="john.doe@example.com"
          onClosePanels={closePanels}
        />
      </main>
    </div>
  );
}

export default App;
