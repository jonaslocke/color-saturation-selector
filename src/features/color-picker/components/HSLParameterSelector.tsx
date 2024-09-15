"use client";
import { HslColor } from "@/lib/HslColorPicker";
import { FC } from "react";
import { HSLParametersLabel } from "./HSLParametersLabel";

export const HSLParameterSelector: FC<HslColor> = ({ h, l, s }) => {
  return (
    <div className="space-y-2">
      <HSLParametersLabel
        label="Hue (0-360)"
        parameter={h}
        onChange={() => console.log(1)}
        max={360}
      />
      <HSLParametersLabel
        label="Saturation (0-100)"
        parameter={s}
        onChange={() => console.log(1)}
      />
      <HSLParametersLabel
        label="Lightness (0-100)"
        parameter={l}
        onChange={() => console.log(1)}
      />
    </div>
  );
};
