import { Layout } from "@/components/Layout";
import { ColorPicker } from "@/features/color-picker/components/ColorPicker";
import { ColorPalettes } from "~/color-picker/components/ColorPalettes";
import { ColorSaturation } from "~/color-picker/components/ColorSaturation";
import { LeftPanel } from "~/color-picker/components/LeftPanel";
import { RightPanel } from "~/color-picker/components/RightPanel";

export default function Home() {
  return (
    <Layout>
      <LeftPanel>
        <ColorPicker />
      </LeftPanel>
      <RightPanel>
        <ColorSaturation />
        <ColorPalettes />
      </RightPanel>
    </Layout>
  );
}
