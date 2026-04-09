import { Avatar } from "../base";
import { cn } from "../../lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  members: number;
  avatars?: string[];
  className?: string;
}

export function TeamCard({
  name,
  role,
  members,
  avatars,
  className,
}: TeamCardProps) {
  return (
    <div
      className={cn(
        "p-3 rounded-xl border border-slate-200",
        "hover:bg-slate-50 transition-all cursor-pointer",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <p className="font-medium text-slate-800">{name}</p>
        <span className="text-xs text-slate-500">{members} members</span>
      </div>

      <p className="text-sm text-slate-500 mt-1">{role}</p>

      <div className="flex -space-x-2 mt-3">
        {avatars && avatars.length > 0
          ? avatars
              .slice(0, 3)
              .map((avatar, i) => (
                <Avatar
                  key={i}
                  src={avatar}
                  alt={`Member ${i + 1}`}
                  size="sm"
                />
              ))
          : [0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white"
              />
            ))}
      </div>
    </div>
  );
}
