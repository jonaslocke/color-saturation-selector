import { useReducer } from "react";
import { ColorAction, ColorActionType, ColorState } from "../types";

const colorReducer = (state: ColorState, action: ColorAction): ColorState => {
  switch (action.type) {
    case ColorActionType.CHANGE_HUE:
      return { ...state, hue: action.payload };
    case ColorActionType.CHANGE_SATURATION:
      return { ...state, saturation: action.payload };
    case ColorActionType.CHANGE_LIGHTNESS:
      return { ...state, lightness: action.payload };
    case ColorActionType.CHANGE_ALL:
      return {
        ...state,
        hue: action.payload.h,
        saturation: action.payload.s,
        lightness: action.payload.l,
      };
    case ColorActionType.RESET:
      return { hue: 0, saturation: 0, lightness: 0 };

    default:
      return state;
  }
};

const initialColorState: ColorState = {
  hue: 10,
  saturation: 20,
  lightness: 30,
};

const useColorReducer = () => {
  const [state, dispatch] = useReducer(colorReducer, initialColorState);

  return { state, dispatch };
};

export default useColorReducer;
