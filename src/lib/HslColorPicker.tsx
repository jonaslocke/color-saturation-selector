"use client"
import { HTMLAttributes } from "react";
import { HslColor as _HslColor, HslColorPicker,  } from "react-colorful";

export type HslColor = _HslColor;

declare type ColorPickerHTMLAttributes = Omit<
  HTMLAttributes<HTMLDivElement>,
  "color" | "onChange" | "onChangeCapture"
>;
export declare type AnyColor = string | HslColor;
interface ColorPickerBaseProps<T extends AnyColor>
  extends ColorPickerHTMLAttributes {
  color: T;
  onChange: (newColor: T) => void;
}

type Props = Partial<ColorPickerBaseProps<HslColor>>;

export const ColorPickerHsl = (props: Props) => {
  return <HslColorPicker {...props} />;
};
