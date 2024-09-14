import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ColorPalettes: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Palettes</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Color palettes are collections of colors that work well together. They
          can be used to create harmonious designs and ensure consistency across
          various elements.
        </p>
        <div className="mt-4 flex space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded"></div>
          <div className="w-8 h-8 bg-blue-500 rounded"></div>
          <div className="w-8 h-8 bg-green-500 rounded"></div>
          <div className="w-8 h-8 bg-yellow-500 rounded"></div>
        </div>
      </CardContent>
    </Card>
  );
};
