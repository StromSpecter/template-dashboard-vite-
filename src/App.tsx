import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { Header, SearchOverlay, Sidebar } from "./components/ui";
import type { Information, Notification } from "./components/ui";
import { Dashboard, Profile } from "./pages";

const Notifications: Notification[] = [
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

interface PageConfig {
  title: string;
  detail: string;
}

const pages: Record<string, PageConfig> = {
  home: {
    title: "Home",
    detail: "Ringkasan performa dan aktivitas terbaru tim Anda.",
  },
  analitics: {
    title: "Analitics",
    detail: "Pantau tren, metrik utama, dan insight bisnis secara real-time.",
  },
  projects: {
    title: "Projects",
    detail: "Kelola progres project, milestone, dan status tiap task.",
  },
  calendar: {
    title: "Calendar",
    detail: "Lihat jadwal meeting, deadline, dan agenda mingguan.",
  },
  reports: {
    title: "Reports",
    detail: "Akses laporan performa dan ekspor data untuk analisis lanjutan.",
  },
  workspace: {
    title: "Workspace",
    detail: "Atur struktur ruang kerja, folder, dan izin kolaborasi.",
  },
  teams: {
    title: "Teams",
    detail: "Kelola anggota tim, role, dan produktivitas lintas divisi.",
  },
  settings: {
    title: "Settings",
    detail: "Konfigurasi preferensi akun, notifikasi, dan integrasi sistem.",
  },
};

function PageContent({ title, detail }: PageConfig) {
  return (
    <section className="px-6 py-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="mt-2 text-slate-600">{detail}</p>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="px-6 py-6 h-full flex items-center justify-center">
      <div className="rounded-2xl border border-rose-200 bg-rose-50 px-8 py-10 text-center max-w-md w-full">
        <p className="text-5xl font-extrabold text-rose-600 leading-none">
          404
        </p>
        <h2 className="mt-3 text-xl font-semibold text-rose-900">
          Page Not Found
        </h2>
        <p className="mt-2 text-sm text-rose-700">
          Halaman yang Anda cari belum tersedia atau path tidak dikenali.
        </p>
      </div>
    </section>
  );
}

function App() {
  const navigate = useNavigate();
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
          notifications={Notifications}
          infoOpen={infoOpen}
          onToggleInfo={toggleInformation}
          Informations={Informations}
          profileOpen={profileOpen}
          onToggleProfile={toggleProfile}
          userName="John Doe"
          userEmail="john.doe@example.com"
          onProfile={() => {
            closePanels();
            navigate("/profile");
          }}
          onClosePanels={closePanels}
        />

        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/analitics"
              element={
                <PageContent
                  title={pages.analitics.title}
                  detail={pages.analitics.detail}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <PageContent
                  title={pages.projects.title}
                  detail={pages.projects.detail}
                />
              }
            />
            <Route
              path="/calendar"
              element={
                <PageContent
                  title={pages.calendar.title}
                  detail={pages.calendar.detail}
                />
              }
            />
            <Route
              path="/reports"
              element={
                <PageContent
                  title={pages.reports.title}
                  detail={pages.reports.detail}
                />
              }
            />
            <Route
              path="/workspace"
              element={
                <PageContent
                  title={pages.workspace.title}
                  detail={pages.workspace.detail}
                />
              }
            />
            <Route
              path="/teams"
              element={
                <PageContent
                  title={pages.teams.title}
                  detail={pages.teams.detail}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <PageContent
                  title={pages.settings.title}
                  detail={pages.settings.detail}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
