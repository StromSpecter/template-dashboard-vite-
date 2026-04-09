import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { cn } from "../../lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  title,
  value,
  subtitle = "In the last 1 month",
  icon,
  className,
}: StatCardProps) {
  const defaultIcon = <RiArrowRightLine size={18} />;

  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl border border-slate-200 shadow-sm",
        "hover:text-white hover:bg-gradient-to-r from-slate-900 to-slate-700",
        "w-full h-30 p-4 overflow-hidden transition-all duration-300 cursor-pointer",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-white break-words">
          {title}
        </p>
        <div className="flex items-center justify-center w-10 h-10 border border-slate-200/80 rounded-full shrink-0 bg-white group-hover:-rotate-45 transform transition-all duration-300">
          <div className="text-slate-900 group-hover:text-slate-900">
            {icon || defaultIcon}
          </div>
        </div>
      </div>
      <p className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-white">
        {value}
      </p>
      <p className="mt-1 text-sm text-slate-500 group-hover:text-white break-words absolute bottom-0 left-0 p-4">
        {subtitle}
      </p>
    </div>
  );
}
