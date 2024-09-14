import React, { FC, PropsWithChildren } from "react";

export const RightPanel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-[35%] p-8 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Color Information</h2>
      <div className="space-y-6">{children}</div>
    </div>
  );
};
