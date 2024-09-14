import { Layout } from "@/components/Layout";
import { RightPanel } from "~/color-picker/components/RightPanel";
import { ColorPalettes } from "~/color-picker/components/ColorPalettes";
import { ColorPicker } from "~/color-picker/components/ColorPicker";
import { ColorSaturation } from "~/color-picker/components/ColorSaturation";
import { LeftPanel } from "~/color-picker/components/LeftPanel";

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
