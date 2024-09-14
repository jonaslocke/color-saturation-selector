import { Children, FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  if (!children) {
    throw new Error("at least two children need to be passed");
  }

  const [leftPanel, rightPanel, ...rest] = Children.toArray(children);

  return (
    <div className="min-h-screen flex">
      {leftPanel}

      {rightPanel}
      {rest}
    </div>
  );
};
