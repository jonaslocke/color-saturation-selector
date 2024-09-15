"use client";
import { ColorPickerHsl, HslColor } from "@/lib/HslColorPicker";
import { FC, useMemo } from "react";
import useColorReducer from "../hooks/useColorReducer";
import { ColorActionType } from "../types";
import { convertToHslObject } from "../utils/convertToHslObject";
import { HSLColorLegend } from "./HSLColorLegend";
import { HSLParameterSelector } from "./HSLParameterSelector";

export const ColorPicker: FC = () => {
  const { state, dispatch } = useColorReducer();

  const hslValue = useMemo(() => convertToHslObject(state), [state]);

  const handleChangeColor = (hslValue: HslColor) => {
    dispatch({ type: ColorActionType.CHANGE_ALL, payload: hslValue });
    return hslValue;
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Color Picker</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <div className="w-full h-64 bg-gray-300 rounded-md flex items-center justify-center px-4">
          <div className="w-1/2">
            <div className="space-y-2">
              <ColorPickerHsl color={hslValue} onChange={handleChangeColor} />
              <HSLColorLegend
                h={state.hue}
                l={state.lightness}
                s={state.saturation}
              />
            </div>
          </div>
          <div className="w-1/2">
            <HSLParameterSelector
              h={state.hue}
              l={state.lightness}
              s={state.saturation}
            />
          </div>
        </div>
      </div>
    </>
  );
};
