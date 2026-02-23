import React from "react";
import { Heading, Flex, Text, Tag, Icon, Button, Grid } from "@once-ui-system/core";

export const metadata = {
  title: "Technical Support — GLAZZONE Electronic Solutions",
  description: "How to identify and specify the right LCD, TFT, or touch panel for your application.",
};

const categories = [
  {
    id: "panel-lcd",
    icon: "layoutTemplate",
    title: "Panel LCD",
    tag: "COG / STN / TN",
    subtitle: "Character LCD · Graphic LCD · OLED · COG Modules",
    description: "Used in embedded systems, instruments, and consumer electronics. Key parameters for identifying and ordering:",
    specs: [
      "Display type - TN, STN, HTN, FSTN",
      "O.A (Overall Dimension) - outer physical size",
      "V.A (View Area) - active display area",
      "Backlight type and colour",
      "Pin configuration - T.H., SMD, or without pins",
      "Interface - COG, Parallel, RS232, SPI",
      "Supply voltage",
      "Filter colour",
    ],
  },
  {
    id: "tft-lcd",
    icon: "monitor",
    title: "TFT LCD",
    tag: "RGB / LVDS / MIPI",
    subtitle: "Thin Film Transistor Colour Displays",
    description: "Full-colour active matrix displays for industrial, medical, and consumer applications. Parameters needed:",
    specs: [
      "Panel size (inches)",
      "Resolution - e.g. 800×480, 1024×600",
      "Pixel pitch",
      "Module size and outline dimension",
      "Active area dimensions",
      "Viewing direction",
      "Operating and storage temperature",
      "Interface - RGB, LVDS, MIPI",
      "Number of pins and pin descriptions",
      "Supply voltage",
      "Backlight - LED count and brightness (mcd)",
      "IC Driver model",
      "Colour depth and contrast ratio",
      "Weight",
    ],
  },
  {
    id: "resistive-touch",
    icon: "fingerprint",
    title: "Resistive Touch (RTP)",
    tag: "4-wire / 5-wire",
    subtitle: "Pressure-sensitive overlays - industrial & rugged",
    description: "Works with gloves, stylus, or any object. Commonly used in industrial and field equipment:",
    specs: [
      "Panel size - must match your LCD",
      "Active area dimensions",
      "Outline dimension",
      "Number of pins - 4-wire or 5-wire",
      "Pin symbol and description",
      "FPC flat cable length",
    ],
  },
  {
    id: "capacitive-touch",
    icon: "touchpad",
    title: "Capacitive Touch (CTP)",
    tag: "PCAP / Multi-Touch",
    subtitle: "Projected capacitive - single and multi-touch",
    description: "Glass-surface panels with high optical clarity and gesture support:",
    specs: [
      "Panel size - must match your LCD",
      "Active area dimensions",
      "Outline dimension",
      "Number of pins",
      "Pin symbol and description",
      "FPC flat cable length",
      "Single or multi-touch capability",
      "Glove / finger touch support",
      "Gesture recognition",
      "Driver IC model",
    ],
  },
];

export default function TechnicalSupport() {
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
        <Tag label="Technical Support" variant="brand" />
        <Heading variant="display-strong-l">How to Find Your Display</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: "600px" }}>
          Use this guide to identify the correct display module or touch panel.
          Each section lists the key parameters you'll need to specify.
        </Text>
        {/* Jump links */}
        <Flex gap="s" style={{ flexWrap: "wrap", justifyContent: "center" }}>
          {categories.map((cat) => (
            <Button key={cat.id} href={`#${cat.id}`} variant="secondary" size="s">
              <Icon name={cat.icon} size="xs" />
              {cat.title}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Categories */}
      <Flex
        fillWidth
        direction="column"
        paddingX="l"
        paddingBottom="xl"
        gap="l"
        style={{ alignItems: "center", maxWidth: "1000px" }}
      >
        {categories.map((category, index) => (
          <Flex
            key={category.id}
            id={category.id}
            fillWidth
            direction="column"
            gap="l"
            style={{
              border: "1px solid var(--neutral-border-weak)",
              background: "var(--neutral-background-weak)",
              overflow: "hidden",
            }}
          >
            {/* Category header bar */}
            <Flex
              fillWidth
              padding="l"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
                borderBottom: "1px solid var(--neutral-border-weak)",
                background: index === 0 ? "var(--brand-background-weak)" : "var(--neutral-background-strong)",
              }}
            >
              <Flex gap="m" style={{ alignItems: "center" }}>
                <Flex
                  style={{
                    width: "40px",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--brand-border-weak)",
                    background: "var(--brand-background-weak)",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={category.icon} size="s" onBackground="brand-medium" />
                </Flex>
                <Flex direction="column" gap="xs">
                  <Flex style={{alignItems:"center"}} gap="s">
                    <Heading variant="heading-strong-l">{category.title}</Heading>
                    <Tag label={category.tag} variant="brand" />
                  </Flex>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {category.subtitle}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            {/* Body */}
            <Flex direction="column" gap="l" padding="l">
              <Text variant="body-default-m" onBackground="neutral-weak">
                {category.description}
              </Text>

              {/* Specs grid */}
              <Flex
                direction="column"
                gap="s"
                padding="l"
                style={{
                  background: "var(--neutral-background-strong)",
                  border: "1px solid var(--neutral-border-weak)",
                }}
              >
                <Text
                  variant="label-strong-xs"
                  onBackground="neutral-weak"
                  style={{ letterSpacing: "0.08em" }}
                >
                  KEY PARAMETERS TO IDENTIFY
                </Text>
                <Grid columns="2" gap="xs" paddingTop="xs">
                  {category.specs.map((spec, i) => (
                    <Flex key={i} style={{alignItems:"start"}} gap="s">
                      <Icon
                        name="chevronRight"
                        size="xs"
                        onBackground="brand-medium"
                        style={{ marginTop: "3px", flexShrink: 0 }}
                      />
                      <Text variant="body-default-s">{spec}</Text>
                    </Flex>
                  ))}
                </Grid>
              </Flex>
            </Flex>
          </Flex>
        ))}

        {/* Help CTA */}
        <Flex
          fillWidth
          style={{
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
            <Heading variant="heading-strong-l">Still not sure?</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Send us a photo or datasheet and we'll identify it and find you the right match.
            </Text>
          </Flex>
          <Flex gap="s" style={{ flexWrap: "wrap" }}>
            <Button href="mailto:baruchglazz@gmail.com" variant="primary" size="l">
              <Icon name="mail" size="s" />
              Send Your Specs
            </Button>
            <Button href="tel:+972584485115" variant="secondary" size="l">
              <Icon name="phone" size="s" />
              Call Us
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
