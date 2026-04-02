import { useEffect, useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
  query: string;
  onQueryChange: (value: string) => void;
}

export function SearchOverlay({
  open,
  onClose,
  query,
  onQueryChange,
}: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl mx-4 rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(40px)",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4">
          <RiSearchLine size={22} className="text-white opacity-80 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Spotlight Search"
            className="flex-1 bg-transparent text-white text-xl placeholder-white/50 outline-none"
          />
          {query && (
            <button
              onClick={() => onQueryChange("")}
              className="text-white/60 hover:text-white text-sm px-2 py-0.5 rounded bg-white/10 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
