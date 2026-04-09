import { cn } from "../../lib/utils";

interface ProjectCardProps {
  name: string;
  status: "Running" | "Pending" | "Completed";
  progress: number;
  members: number;
  className?: string;
}

const statusStyles = {
  Running: "bg-blue-100 text-blue-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Completed: "bg-green-100 text-green-800",
};

export function ProjectCard({
  name,
  status,
  progress,
  members,
  className,
}: ProjectCardProps) {
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
        <span
          className={cn(
            "text-xs px-2 py-1 rounded-full font-medium",
            statusStyles[status],
          )}
        >
          {status}
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600">{progress}% Complete</span>
          <span className="text-xs text-slate-500">{members} members</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-slate-900 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
