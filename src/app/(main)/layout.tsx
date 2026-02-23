import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import { Background, Flex } from "@once-ui-system/core";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GLAZZONE — Electronic Solutions",
  description:
    "Engineering-grade display technology — TFT LCD, resistive and capacitive touch panels.",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      fillWidth
      fillHeight
      direction="column"
      background="page"
      style={{ minHeight: "100vh" }}
    >
      <Background
        position="fixed"
        dots={{ display: false }}
        grid={{ display: false }}
        gradient={{
          display: true,
          tilt: 0,
          height: 60,
          width: 80,
          x: 70,
          y: -10,
          colorStart: "brand-background-strong",
          colorEnd: "static-transparent",
        }}
        mask={{ cursor: false }}
      />

      <Navigation />

      <Flex
        as="main"
        direction="column"
        fillWidth
        flex={1}
        style={{ alignItems: "center" }}
      >
        {children}
      </Flex>

      <Footer />
    </Flex>
  );
}
