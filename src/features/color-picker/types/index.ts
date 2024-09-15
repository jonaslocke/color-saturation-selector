import { HslColor } from "@/lib/HslColorPicker";
interface ColorState {
  hue: number;
  saturation: number;
  lightness: number;
}

enum ColorActionType {
  CHANGE_HUE = "CHANGE_HUE",
  CHANGE_SATURATION = "CHANGE_SATURATION",
  CHANGE_LIGHTNESS = "CHANGE_LIGHTNESS",
  CHANGE_ALL = "CHANGE_ALL",
  RESET = "RESET",
}

interface ChangeHueAction {
  type: ColorActionType.CHANGE_HUE;
  payload: number; // The new hue value
}

interface ChangeSaturationAction {
  type: ColorActionType.CHANGE_SATURATION;
  payload: number; // The new saturation value
}

interface ChangeLightnessAction {
  type: ColorActionType.CHANGE_LIGHTNESS;
  payload: number; // The new lightness value
}

interface ChangeAllAction {
  type: ColorActionType.CHANGE_ALL;
  payload: HslColor;
}

interface ResetAction {
  type: ColorActionType.RESET;
}

type ColorAction =
  | ChangeHueAction
  | ChangeSaturationAction
  | ChangeLightnessAction
  | ChangeAllAction
  | ResetAction;

export type { ColorAction, ColorState };

export { ColorActionType };
