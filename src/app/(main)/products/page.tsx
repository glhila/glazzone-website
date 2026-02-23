import React from "react";
import { Heading, Flex, Text, Button, Tag, Icon, Grid } from "@once-ui-system/core";

export const metadata = {
  title: "Products — GLAZZONE Electronic Solutions",
  description: "TFT LCD modules, resistive and capacitive touch panels, OLED and character LCD displays.",
};

const productList = [
  {
    icon: "monitor",
    category: "TFT LCD Modules",
    tag: "Most Popular",
    description: "Full-colour TFT LCD panels across a wide size range with RGB, LVDS, and MIPI interfaces.",
    specs: ["Multiple size options", "RGB / LVDS / MIPI", "Custom brightness & viewing angle", "Wide temperature range"],
  },
  {
    icon: "fingerprint",
    category: "Resistive Touch Panels",
    tag: "Industrial",
    description: "4-wire and 5-wire resistive overlays for industrial, rugged, and stylus-operated environments.",
    specs: ["4-wire and 5-wire", "Glove & stylus compatible", "Custom FPC cable length", "Matches all LCD sizes"],
  },
  {
    icon: "touchpad",
    category: "Capacitive Touch Panels",
    tag: "Multi-Touch",
    description: "PCAP touch panels with multi-touch and gesture support. High optical clarity.",
    specs: ["Multi-touch & gestures", "Glove-compatible options", "Custom driver IC", "Single & multi-touch"],
  },
  {
    icon: "layoutTemplate",
    category: "Character LCD Modules",
    tag: "Standard",
    description: "16×2, 20×4, and other formats with parallel, SPI, or I2C interfaces.",
    specs: ["16×2, 20×4 and more", "Parallel / SPI / I2C", "Optional backlight", "Low power consumption"],
  },
  {
    icon: "grid",
    category: "Graphic LCD Modules",
    tag: "Embedded",
    description: "Monochrome and COG graphic modules for embedded and industrial systems.",
    specs: ["Monochrome & COG types", "Wide temp range", "Low power", "SPI / parallel interface"],
  },
  {
    icon: "sun",
    category: "OLED Displays",
    tag: "High Contrast",
    description: "OLED modules with exceptional contrast and fast response for instruments and wearables.",
    specs: ["High contrast ratio", "Fast response", "SPI / I2C interface", "Compact form factors"],
  },
];

export default function Products() {
  return (
    <Flex fillWidth direction="column" style={{ alignItems: "center" }} flex={1}>

      {/* Header */}
      <Flex
        fillWidth
        direction="column"
        style={{ alignItems: "center", textAlign: "center", maxWidth: "800px" }}
        paddingX="l"
        paddingTop="104"
        paddingBottom="xl"
        gap="m"
      >
        <Tag label="Product Range" variant="brand" />
        <Heading variant="display-strong-l">Display Modules & Touch Panels</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: "560px" }}>
          Engineering-grade display components sourced from trusted manufacturers.
          Photos and full specifications coming soon — contact us for datasheets and pricing.
        </Text>
      </Flex>

      {/* Product grid */}
      <Flex
        fillWidth
        paddingX="l"
        paddingBottom="xl"
        style={{ justifyContent: "center" }}
      >
        <Grid columns="2" gap="m" style={{ maxWidth: "1100px", width: "100%" }}>
          {productList.map((product) => (
            <Flex
              key={product.category}
              fillWidth
              direction="column"
              gap="m"
              style={{
                border: "1px solid var(--neutral-border-weak)",
                background: "var(--neutral-background-weak)",
                overflow: "hidden",
              }}
            >
              {/* Image placeholder */}
              <Flex
                style={{
                  aspectRatio: "16/7",
                  background: "var(--neutral-background-strong)",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  borderBottom: "1px solid var(--neutral-border-weak)",
                }}
              >
                <Flex
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(var(--neutral-border-weak) 1px, transparent 1px), linear-gradient(90deg, var(--neutral-border-weak) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    opacity: 0.4,
                  }}
                />
                <Flex direction="column" gap="xs" style={{ alignItems: "center", position: "relative", zIndex: 1 }}>
                  <Icon name={product.icon} size="l" onBackground="neutral-weak" />
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    Product photo coming soon
                  </Text>
                </Flex>
              </Flex>

              {/* Content */}
              <Flex direction="column" gap="m" padding="l">
                <Flex style={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Heading variant="heading-strong-m">{product.category}</Heading>
                  <Tag label={product.tag} variant="neutral" />
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {product.description}
                </Text>
                <Flex
                  direction="column"
                  gap="xs"
                  padding="m"
                  style={{
                    background: "var(--neutral-background-strong)",
                    border: "1px solid var(--neutral-border-weak)",
                  }}
                >
                  {product.specs.map((spec, i) => (
                    <Flex key={i} style={{alignItems:"center"}} gap="s">
                      <Icon name="chevronRight" size="xs" onBackground="brand-medium" />
                      <Text variant="body-default-xs">{spec}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>

      {/* CTA */}
      <Flex
        fillWidth
        paddingX="l"
        paddingBottom="xl"
        style={{ justifyContent: "center" }}
      >
        <Flex
          fillWidth
          style={{
            maxWidth: "1100px",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "24px",
            padding: "40px",
            border: "1px solid var(--brand-border-medium)",
            background: "var(--brand-background-weak)",
          }}
        >
          <Flex direction="column" gap="xs">
            <Heading variant="heading-strong-l">Can't find your part?</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Send your datasheet or part number and we'll source it for you.
            </Text>
          </Flex>
          <Flex gap="s" style={{ flexWrap: "wrap" }}>
            <Button href="mailto:baruchglazz@gmail.com" variant="primary" size="l">
              <Icon name="mail" size="s" />
              Send Your Specs
            </Button>
            <Button href="/technical-support" variant="secondary" size="l">
              Technical Guide →
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
