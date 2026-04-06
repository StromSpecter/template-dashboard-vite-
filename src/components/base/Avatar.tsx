import { type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  fallback?: string;
}

const sizeStyles: Record<AvatarSize, string> = {
  sm: "w-7 h-7 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
  xl: "w-24 h-24 text-lg",
};

export function Avatar({
  src,
  alt,
  size = "md",
  fallback,
  className,
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn(
        "rounded-full bg-black flex items-center justify-center overflow-hidden shrink-0",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt ?? ""} className="w-full h-full object-cover" />
      ) : (
        <span className="text-white font-medium select-none">
          {fallback ?? ""}
        </span>
      )}
    </div>
  );
}
