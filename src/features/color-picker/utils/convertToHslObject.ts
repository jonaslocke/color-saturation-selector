import { HslColor } from "@/lib/HslColorPicker";
import { ColorState } from "../types";

export const convertToHslObject = (state: ColorState): HslColor => {
  return {
    h: state.hue,
    s: state.saturation,
    l: state.lightness,
  };
};
