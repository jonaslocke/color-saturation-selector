import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ColorSaturation: FC = ({}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Saturation</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Color saturation refers to the intensity or purity of a color. Highly
          saturated colors are vivid, while less saturated colors appear more
          muted or grayish.
        </p>
      </CardContent>
    </Card>
  );
};
