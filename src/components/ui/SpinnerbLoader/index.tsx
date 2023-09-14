import React from "react";
import s from "./SpinnerbLoader.module.css";
import cn from "clsx";

const SpinnerbLoader = ({ className }: { className?: string }) => {
  return <span role="status" aria-label="Loading" className={cn(s.Loader, className)} />;
};

export default SpinnerbLoader;
