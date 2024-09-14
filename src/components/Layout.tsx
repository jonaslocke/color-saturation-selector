import { Children, FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  if (!children) {
    throw new Error("at least two children need to be passed");
  }

  const [leftPanel, rightPanel, ...rest] = Children.toArray(children);

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - 65% width */}
      <div className="w-[65%] p-8 bg-gray-100">{leftPanel}</div>

      {/* Right Panel - 35% width */}
      <div className="w-[35%] p-8 bg-white">{rightPanel}</div>
      {rest}
    </div>
  );
};
