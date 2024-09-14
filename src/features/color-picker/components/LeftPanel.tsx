import { FC, PropsWithChildren } from "react";

export const LeftPanel: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-[65%] p-8 bg-gray-100">{children}</div>;
};
