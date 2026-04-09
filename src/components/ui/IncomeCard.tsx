import { Badge } from "../base";
import { cn } from "../../lib/utils";

interface IncomeCardProps {
  income: string;
  badge?: {
    text: string;
    variant?: "info" | "success" | "warning" | "error";
  };
  className?: string;
}

export function IncomeCard({ income, badge, className }: IncomeCardProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-2 p-4 bg-white rounded-2xl",
        "border border-slate-200 shadow-sm",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium text-slate-900">Total Income</p>
        {badge && (
          <Badge variant={"info"} className="w-fit">
            {badge.text}
          </Badge>
        )}
      </div>
      <div className="text-3xl font-bold text-slate-900">{income}</div>
    </div>
  );
}
