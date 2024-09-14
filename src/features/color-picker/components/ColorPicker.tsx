import { FC } from "react";

export const ColorPicker: FC = () => {
  return (
    <div className="w-[65%] p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Color Picker</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="w-full h-64 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-gray-600">Color Picker Placeholder</span>
        </div>
      </div>
    </div>
  );
};
