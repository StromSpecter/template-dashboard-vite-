import {
  RiSearchLine,
  RiMessageLine,
  RiInformationLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Avatar } from "../base/Avatar";
import { NotificationPanel } from "./NotificationPanel";
import { InformationPanel } from "./InformationPanel";
import { ProfilePanel } from "./ProfilePanel";
import type { Notification } from "./NotificationPanel";
import type { Information } from "./InformationPanel";

export type { Notification, Information };

interface HeaderProps {
  onSearchOpen: () => void;
  messageOpen: boolean;
  onToggleMessages: () => void;
  notifications: Notification[];
  infoOpen: boolean;
  onToggleInfo: () => void;
  Informations: Information[];
  profileOpen: boolean;
  onToggleProfile: () => void;
  userName: string;
  userEmail: string;
  onClosePanels: () => void;
}

export function Header({
  onSearchOpen,
  messageOpen,
  onToggleMessages,
  notifications,
  infoOpen,
  onToggleInfo,
  Informations,
  profileOpen,
  onToggleProfile,
  userName,
  userEmail,
  onClosePanels,
}: HeaderProps) {
  return (
    <header className="w-full h-20 p-5 bg-white border-b border-slate-200/80">
      <div className="relative w-full h-full flex items-center justify-end gap-3">
        {/* Search */}
        <button
          onClick={onSearchOpen}
          className="cursor-pointer hover:opacity-70 transition-opacity"
        >
          <RiSearchLine size={20} />
        </button>

        {/* Messages / Notifications */}
        <button
          onClick={onToggleMessages}
          className="relative cursor-pointer rounded-full p-1 hover:bg-slate-100 transition-colors"
        >
          <RiMessageLine size={20} />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
              {notifications.length}
            </span>
          )}
        </button>

        {/* Information */}
        <button
          onClick={onToggleInfo}
          className="relative cursor-pointer rounded-full p-1 hover:bg-slate-100 transition-colors"
        >
          <RiInformationLine size={20} />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 rounded-full bg-sky-500" />
        </button>

        {/* Profile */}
        <button
          onClick={onToggleProfile}
          className="flex items-center gap-3 cursor-pointer border-l-2 pl-5 transition-opacity hover:opacity-80"
        >
          <Avatar fallback={userName.charAt(0)} />
          <span className="hidden md:block">{userName}</span>
          <RiArrowDownSLine size={20} />
        </button>

        {/* Dropdown Panels */}
        <NotificationPanel open={messageOpen} notifications={notifications} />
        <InformationPanel open={infoOpen} items={Informations} />
        <ProfilePanel
          open={profileOpen}
          userName={userName}
          userEmail={userEmail}
        />
      </div>

      {/* Backdrop to close panels */}
      {(messageOpen || infoOpen || profileOpen) && (
        <button
          aria-label="Close panel"
          className="fixed inset-0 z-50 cursor-default"
          onClick={onClosePanels}
        />
      )}
    </header>
  );
}
