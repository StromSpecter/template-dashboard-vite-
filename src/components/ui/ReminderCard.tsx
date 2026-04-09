import { Button } from "../base";
import { cn } from "../../lib/utils";

interface ReminderCardProps {
  title: string;
  time: string;
  onButtonClick?: () => void;
  buttonLabel?: string;
  className?: string;
}

export function ReminderCard({
  title,
  time,
  onButtonClick,
  buttonLabel = "Start Meeting",
  className,
}: ReminderCardProps) {
  return (
    <>
      <div className="flex items-start justify-between mb-4">
        <p className="text-lg font-medium text-slate-900">Reminder</p>
      </div>
      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <p className="text-3xl font-semibold text-slate-900">{title}</p>
          <p className="text-slate-500">{time}</p>
        </div>
        <Button
          variant="primary"
          size="md"
          className={cn("w-full rounded-full", className)}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      </div>
    </>
  );
}
