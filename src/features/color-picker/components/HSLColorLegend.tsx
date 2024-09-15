import { HslColor } from "@/lib/HslColorPicker";
import { FC } from "react";

export const HSLColorLegend: FC<HslColor> = ({ h, l, s }) => {
  return (
    <div className="text-sm text-gray-600">
      HSL: {h}, {s}%, {l}%
    </div>
  );
};
