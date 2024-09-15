import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FC } from "react";

type Props = {
  parameter: number;
  label: string;
  min?: number;
  max?: number;
  onChange: () => void;
};

export const HSLParametersLabel: FC<Props> = ({
  parameter,
  label,
  min = 0,
  max = 100,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="hue">{label}</Label>
      <Input
        id={label}
        type="number"
        min={min}
        max={max}
        value={parameter}
        onChange={onChange}
      />
    </div>
  );
};
