import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type DressStyleCardProps = {
  title: string;
  url: string;
  className?: string;
};

const DressStyleCard = ({ title, url, className }: DressStyleCardProps) => {
  return (
    <Link
      href={url}
      className={cn([
        "w-full md:h-full rounded-[20px] bg-neutral-300 bg-center text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.35)] shadow-[inset_0_110px_70px_-40px_rgba(0,0,0,0.45)] hover:scale-[1.02] transition-transform duration-500 text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover",
        className,
      ])}
    >
      {title}
    </Link>
  );
};

export default DressStyleCard;
