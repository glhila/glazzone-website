import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Grid,
  Icon,
  Tag,
  LetterFx,
} from "@once-ui-system/core";

export const metadata = {
  title: "GLAZZONE — Electronic Solutions",
  description:
    "Engineering-grade display technology — TFT LCD, touch panels, and electronic component solutions.",
};

const services = [
  {
    icon: "monitor",
    title: "TFT LCD Modules",
    description: "Full-colour TFT panels with RGB, LVDS, and MIPI interfaces across a wide size and resolution range.",
    href: "/products",
  },
  {
    icon: "fingerprint",
    title: "Resistive Touch (RTP)",
    description: "4-wire and 5-wire resistive overlays for industrial, rugged, and stylus-operated environments.",
    href: "/products",
  },
  {
    icon: "touchpad",
    title: "Capacitive Touch (CTP)",
    description: "PCAP touch panels with multi-touch, gesture support, and optional glove-compatible driver ICs.",
    href: "/products",
  },
  {
    icon: "layoutTemplate",
    title: "Character & Graphic LCD",
    description: "Standard and custom LCD modules — TN, STN, OLED, COG — with SPI, I2C, and parallel interfaces.",
    href: "/products",
  },
  {
    icon: "cpu",
    title: "Technical Consulting",
    description: "Specification matching, datasheet analysis, and part identification for your display project.",
    href: "/technical-support",
  },
  {
    icon: "package",
    title: "Component Sourcing",
    description: "Hard-to-find display parts sourced from trusted manufacturers and supplier networks.",
    href: "/contact",
  },
];

const stats = [
  { value: "TFT / OLED", label: "Display Technologies" },
  { value: "RTP & CTP", label: "Touch Panel Types" },
  { value: "MIPI / LVDS", label: "Interface Standards" },
  { value: "IL", label: "Based in Israel" },
];

export default function Home() {
  return (
    <Flex fillWidth direction="column" style={{ alignItems: "center" }} flex={1}>

      {/* ── HERO ── */}
      <Flex
        fillWidth
        paddingX="l"
        paddingTop="104"
        paddingBottom="xl"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Flex
          fillWidth
          style={{ maxWidth: "1100px", gap: "64px", alignItems: "center", flexWrap: "wrap" }}
        >
          {/* Left: text */}
          <Flex direction="column" gap="l" style={{ flex: "1", minWidth: "300px" }}>
            <Flex direction="column" gap="s">
              <Tag label="Electronic Solutions · Israel" variant="brand" />
              <Heading variant="display-strong-xl" wrap="balance">
                <LetterFx trigger="instant">
                  Display Technology
                </LetterFx>
                <br />
                <Text
                  as="span"
                  variant="display-strong-xl"
                  onBackground="brand-medium"
                >
                  <LetterFx trigger="instant" speed="slow">
                    Specialists
                  </LetterFx>
                </Text>
              </Heading>
            </Flex>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              style={{ maxWidth: "480px" }}
            >
              GLAZZONE Electronic Solutions provides engineering-grade sourcing
              and technical support for TFT LCD modules, resistive and
              capacitive touch panels, and custom display components.
            </Text>
            <Flex gap="m" style={{ flexWrap: "wrap" }}>
              <Button href="/contact" variant="primary" size="l">
                <Icon name="mail" size="s" />
                Request a Quote
              </Button>
              <Button href="/products" variant="secondary" size="l">
                <Icon name="layers" size="s" />
                Browse Products
              </Button>
            </Flex>
            {/* Inline contact */}
            <Flex gap="m" style={{ flexWrap: "wrap" }}>
              <Flex style={{alignItems:"center"}} gap="xs">
                <Icon name="phone" size="xs" onBackground="neutral-weak" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  +972-58-448-5115
                </Text>
              </Flex>
              <Flex style={{alignItems:"center"}} gap="xs">
                <Icon name="mail" size="xs" onBackground="neutral-weak" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  baruchglazz@gmail.com
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/* Right: hero image placeholder */}
          <Flex
            style={{
              flex: "1",
              minWidth: "280px",
              maxWidth: "480px",
              aspectRatio: "4/3",
              border: "1px solid var(--brand-border-weak)",
              background: "var(--neutral-background-weak)",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Grid overlay effect */}
            <Flex
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(var(--brand-border-weak) 1px, transparent 1px), linear-gradient(90deg, var(--brand-border-weak) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                opacity: 0.4,
              }}
            />
            <Flex direction="column" gap="s" style={{ alignItems: "center", position: "relative", zIndex: 1 }}>
              <Icon name="image" size="xl" onBackground="neutral-weak" />
              <Text variant="label-default-s" onBackground="neutral-weak">
                Product image coming soon
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* ── STATS BAR ── */}
      <Flex
        fillWidth
        paddingX="l"
        paddingY="l"
        style={{
          borderTop: "1px solid var(--neutral-border-weak)",
          borderBottom: "1px solid var(--neutral-border-weak)",
          background: "var(--neutral-background-weak)",
          justifyContent: "center",
        }}
      >
        <Flex
          style={{
            maxWidth: "1100px",
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          {stats.map((stat) => (
            <Flex key={stat.label} direction="column" gap="xs" style={{ alignItems: "center" }}>
              <Text
                variant="heading-strong-l"
                onBackground="brand-medium"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {stat.value}
              </Text>
              <Text variant="label-default-xs" onBackground="neutral-weak" style={{ letterSpacing: "0.06em" }}>
                {stat.label.toUpperCase()}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* ── SERVICES ── */}
      <Flex
        fillWidth
        direction="column"
        paddingX="l"
        paddingTop="xl"
        paddingBottom="xl"
        gap="xl"
        style={{ alignItems: "center" }}
      >
        <Flex direction="column" gap="s" style={{ alignItems: "center", textAlign: "center", maxWidth: "600px" }}>
          <Tag label="What We Offer" variant="neutral" />
          <Heading variant="heading-strong-xl">Products & Services</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            End-to-end display technology support — from specification to delivery.
          </Text>
        </Flex>

        <Grid columns="3" gap="m" style={{ maxWidth: "1100px", width: "100%" }}>
          {services.map((service) => (
            <Flex
              key={service.title}
              fillWidth
              direction="column"
              gap="m"
              padding="l"
              style={{
                border: "1px solid var(--neutral-border-weak)",
                background: "var(--neutral-background-weak)",
                transition: "border-color 0.2s ease",
              }}
            >
              <Flex
                style={{
                  width: "40px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--brand-border-weak)",
                  background: "var(--brand-background-weak)",
                }}
              >
                <Icon name={service.icon} size="s" onBackground="brand-medium" />
              </Flex>
              <Flex direction="column" gap="xs" style={{ flex: 1 }}>
                <Heading variant="heading-strong-s">{service.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {service.description}
                </Text>
              </Flex>
              <Button href={service.href} variant="tertiary" size="s">
                Learn more →
              </Button>
            </Flex>
          ))}
        </Grid>
      </Flex>

      {/* ── FEATURED PRODUCTS (image placeholders) ── */}
      <Flex
        fillWidth
        paddingX="l"
        paddingTop="xl"
        paddingBottom="xl"
        style={{
          background: "var(--neutral-background-weak)",
          borderTop: "1px solid var(--neutral-border-weak)",
          borderBottom: "1px solid var(--neutral-border-weak)",
          justifyContent: "center",
        }}
      >
        <Flex
          fillWidth
          direction="column"
          gap="xl"
          style={{ maxWidth: "1100px" }}
        >
          <Flex style={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <Flex direction="column" gap="xs">
              <Tag label="Product Gallery" variant="brand" />
              <Heading variant="heading-strong-xl">Featured Components</Heading>
            </Flex>
            <Button href="/products" variant="secondary" size="m">
              View All Products →
            </Button>
          </Flex>

          <Grid columns="3" gap="m" fillWidth>
            {[
              { label: "TFT LCD Module", sub: "e.g. 7\" 800×480 RGB" },
              { label: "Resistive Touch Panel", sub: "4-wire / 5-wire RTP" },
              { label: "Capacitive Touch Panel", sub: "PCAP Multi-Touch CTP" },
            ].map((item) => (
              <Flex
                key={item.label}
                direction="column"
                style={{
                  border: "1px solid var(--neutral-border-weak)",
                  background: "var(--page-background)",
                  overflow: "hidden",
                }}
              >
                {/* Image placeholder */}
                <Flex
                  style={{
                    aspectRatio: "4/3",
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
                      opacity: 0.5,
                    }}
                  />
                  <Flex direction="column" gap="xs" style={{ alignItems: "center", position: "relative", zIndex: 1 }}>
                    <Icon name="image" size="l" onBackground="neutral-weak" />
                    <Text variant="label-default-xs" onBackground="neutral-weak">
                      Photo coming soon
                    </Text>
                  </Flex>
                </Flex>
                {/* Label */}
                <Flex direction="column" gap="xs" padding="m">
                  <Text variant="label-strong-s">{item.label}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {item.sub}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Flex>

      {/* ── HOW IT WORKS ── */}
      <Flex
        fillWidth
        paddingX="l"
        paddingTop="xl"
        paddingBottom="xl"
        style={{ justifyContent: "center" }}
      >
        <Flex
          fillWidth
          direction="column"
          gap="xl"
          style={{ maxWidth: "1100px", alignItems: "center" }}
        >
          <Flex direction="column" gap="s" style={{ alignItems: "center", textAlign: "center" }}>
            <Tag label="Our Process" variant="neutral" />
            <Heading variant="heading-strong-xl">How It Works</Heading>
          </Flex>
          <Flex
            fillWidth
            style={{ justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}
          >
            {[
              { step: "01", icon: "fileText", title: "Send Your Specs", desc: "Share a datasheet, part number, or describe your display requirements — size, interface, resolution, operating conditions." },
              { step: "02", icon: "search", title: "We Find a Match", desc: "We identify the correct panel from our supplier network and provide you with compatible options and pricing." },
              { step: "03", icon: "package", title: "Order & Deliver", desc: "Confirm your selection and we handle sourcing and delivery directly to your location." },
            ].map((item, i) => (
              <Flex
                key={item.step}
                direction="column"
                gap="m"
                style={{
                  flex: "1",
                  minWidth: "220px",
                  borderTop: i === 0 ? "2px solid var(--brand-border-strong)" : "2px solid var(--neutral-border-weak)",
                  paddingTop: "var(--static-space-16)",
                }}
              >
                <Flex style={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Text
                    variant="label-strong-xs"
                    onBackground="brand-weak"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    STEP {item.step}
                  </Text>
                  <Icon name={item.icon} size="s" onBackground="neutral-weak" />
                </Flex>
                <Heading variant="heading-strong-m">{item.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.desc}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>

      {/* ── CTA BANNER ── */}
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
            alignItems: "center",
            flexWrap: "wrap",
            gap: "32px",
            padding: "40px",
            border: "1px solid var(--brand-border-medium)",
            background: "var(--brand-background-weak)",
          }}
        >
          <Flex direction="column" gap="s" style={{ maxWidth: "500px" }}>
            <Heading variant="heading-strong-xl">
              Need a display component?
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Send us your specifications and we'll source the right part. We
              support both single-unit and bulk orders.
            </Text>
          </Flex>
          <Flex gap="m" style={{ flexWrap: "wrap" }}>
            <Button href="mailto:baruchglazz@gmail.com" variant="primary" size="l">
              <Icon name="mail" size="s" />
              baruchglazz@gmail.com
            </Button>
            <Button href="tel:+972584485115" variant="secondary" size="l">
              <Icon name="phone" size="s" />
              +972-58-448-5115
            </Button>
          </Flex>
        </Flex>
      </Flex>

    </Flex>
  );
}
