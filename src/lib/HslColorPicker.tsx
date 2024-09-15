"use client";
import { colord } from "colord";
import { HTMLAttributes, useMemo } from "react";
import { HslColor as _HslColor, RgbaStringColorPicker } from "react-colorful";

export type HslColor = _HslColor;

declare type ColorPickerHTMLAttributes = Omit<
  HTMLAttributes<HTMLDivElement>,
  "color" | "onChange" | "onChangeCapture"
>;
declare type AnyColor = string | HslColor;

interface ColorPickerBaseProps<T extends AnyColor>
  extends ColorPickerHTMLAttributes {
  color: T;
  onChange: (newColor: T) => void;
}

interface Props
  extends Omit<Partial<ColorPickerBaseProps<string>>, "color" | "onChange"> {
  color: HslColor;
  onChange: (hslValue: HslColor) => HslColor;
}

export const ColorPickerHsl = (props: Props) => {
  if (!props.color) {
    throw new Error("requires color");
  }
  const color = String(props.color);
  const rgbaString = useMemo(() => {
    return color.startsWith("rgba") ? color : colord(color).toRgbString();
  }, [color]);
  const rgbaStringColorPickerProps = Object.entries(props).reduce<
    Partial<ColorPickerBaseProps<string>>
  >((acc, [key, value]) => {
    if (key === "color") {
      return acc;
    }

    acc[key as keyof ColorPickerBaseProps<string>] = value;

    return acc;
  }, {});

  return (
    <RgbaStringColorPicker color={rgbaString} {...rgbaStringColorPickerProps} />
  );
};
