import { RiUser3Line, RiSettings3Line, RiLogoutBoxRLine } from "react-icons/ri";
import { Avatar } from "../base/Avatar";

interface ProfilePanelProps {
  open: boolean;
  userName: string;
  userEmail: string;
  onProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
}

export function ProfilePanel({
  open,
  userName,
  userEmail,
  onProfile,
  onSettings,
  onLogout,
}: ProfilePanelProps) {
  if (!open) return null;

  return (
    <div
      className="fixed left-24 right-4 top-24 z-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:absolute md:left-auto md:right-0 md:top-[calc(100%+12px)] md:w-72"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-4">
        <Avatar fallback={userName.charAt(0)} />
        <div>
          <p className="text-sm font-semibold text-slate-900">{userName}</p>
          <p className="text-xs text-slate-500">{userEmail}</p>
        </div>
      </div>
      <div className="p-2">
        <button
          onClick={onProfile}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 cursor-pointer"
        >
          <RiUser3Line size={18} className="text-slate-500" />
          <span>Akun Profile</span>
        </button>
        <button
          onClick={onSettings}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 cursor-pointer"
        >
          <RiSettings3Line size={18} className="text-slate-500" />
          <span>Setting</span>
        </button>
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-red-500 transition-colors hover:bg-red-50 cursor-pointer"
        >
          <RiLogoutBoxRLine size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
