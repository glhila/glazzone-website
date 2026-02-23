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
import Image from "next/image";

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
    accent: false,
  },
  {
    icon: "fingerprint",
    title: "Resistive Touch (RTP)",
    description: "4-wire and 5-wire resistive overlays for industrial, rugged, and stylus-operated environments.",
    href: "/products",
    accent: false,
  },
  {
    icon: "touchpad",
    title: "Capacitive Touch (CTP)",
    description: "PCAP touch panels with multi-touch, gesture support, and optional glove-compatible driver ICs.",
    href: "/products",
    accent: false,
  },
  {
    icon: "layoutTemplate",
    title: "Character & Graphic LCD",
    description: "Standard and custom LCD modules — TN, STN, OLED, COG — with SPI, I2C, and parallel interfaces.",
    href: "/products",
    accent: false,
  },
  {
    icon: "cpu",
    title: "Technical Consulting",
    description: "Specification matching, datasheet analysis, and part identification for your display project.",
    href: "/technical-support",
    accent: true,
  },
  {
    icon: "package",
    title: "Component Sourcing",
    description: "Hard-to-find display parts sourced from trusted manufacturers and supplier networks.",
    href: "/contact",
    accent: true,
  },
];

const stats = [
  { value: "TFT · OLED", label: "Display Technologies" },
  { value: "RTP & CTP", label: "Touch Panel Types" },
  { value: "RGB · LVDS · MIPI", label: "Interface Standards" },
  { value: "Israel", label: "Based In" },
];

const steps = [
  {
    step: "01",
    icon: "fileText",
    title: "Send Your Specs",
    desc: "Share a datasheet, part number, or describe your requirements — size, interface, resolution, operating conditions.",
  },
  {
    step: "02",
    icon: "search",
    title: "We Find a Match",
    desc: "We identify the correct panel from our supplier network and send you compatible options with pricing.",
  },
  {
    step: "03",
    icon: "package",
    title: "Order & Deliver",
    desc: "Confirm your selection and we handle sourcing and delivery directly to your location.",
  },
];

export default function Home() {
  return (
    <Flex fillWidth direction="column" style={{ alignItems: "center" }} flex={1}>

      {/* ── HERO ── */}
      <Flex
        fillWidth
        paddingX="l"
        paddingBottom="xl"
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "96px",
          minHeight: "88vh",
        }}
      >
        <Flex
          fillWidth
          style={{ maxWidth: "1100px", gap: "64px", alignItems: "center", flexWrap: "wrap" }}
        >
          {/* Left: text */}
          <Flex direction="column" gap="l" style={{ flex: "1", minWidth: "300px" }}>
            <Flex direction="column" gap="m">
              {/* Orange accent tag matching logo dot */}
              <span className="tag-accent">Electronic Solutions · Israel</span>
              <Heading variant="display-strong-xl" wrap="balance">
                <LetterFx trigger="instant">Display Technology</LetterFx>
                <br />
                <Text as="span" variant="display-strong-xl" onBackground="brand-medium">
                  <LetterFx trigger="instant" speed="slow">Specialists</LetterFx>
                </Text>
              </Heading>
            </Flex>
            <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: "480px" }}>
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
            {/* Contact inline */}
            <Flex gap="l" style={{ flexWrap: "wrap" }}>
              <Flex style={{ alignItems: "center", gap: "8px" }}>
                <Icon name="phone" size="xs" onBackground="neutral-weak" />
                <Text variant="body-default-s" onBackground="neutral-weak">+972-58-448-5115</Text>
              </Flex>
              <Flex style={{ alignItems: "center", gap: "8px" }}>
                <Icon name="mail" size="xs" onBackground="neutral-weak" />
                <Text variant="body-default-s" onBackground="neutral-weak">baruchglazz@gmail.com</Text>
              </Flex>
            </Flex>
          </Flex>

          {/* Right: hero image placeholder */}
          <Flex
            className="img-placeholder"
            style={{
              flex: "1",
              minWidth: "280px",
              maxWidth: "480px",
              aspectRatio: "4/3",
              borderRadius: "16px",
              border: "1px solid var(--brand-border-weak)",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Teal dot grid overlay */}
            <Flex
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(61,191,191,0.15) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Corner marks in teal */}
            {(["tl", "tr", "bl", "br"] as const).map((pos) => (
              <Flex
                key={pos}
                style={{
                  position: "absolute",
                  width: "18px",
                  height: "18px",
                  borderColor: "#3dbfbf",
                  borderStyle: "solid",
                  borderWidth: 0,
                  ...(pos === "tl" ? { top: 14, left: 14, borderTopWidth: 2, borderLeftWidth: 2, borderTopLeftRadius: 4 } : {}),
                  ...(pos === "tr" ? { top: 14, right: 14, borderTopWidth: 2, borderRightWidth: 2, borderTopRightRadius: 4 } : {}),
                  ...(pos === "bl" ? { bottom: 14, left: 14, borderBottomWidth: 2, borderLeftWidth: 2, borderBottomLeftRadius: 4 } : {}),
                  ...(pos === "br" ? { bottom: 14, right: 14, borderBottomWidth: 2, borderRightWidth: 2, borderBottomRightRadius: 4 } : {}),
                }}
              />
            ))}
            {/* Orange accent dot — like the logo */}
            <Flex
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#e8703a",
                boxShadow: "0 0 8px rgba(232,112,58,0.6)",
              }}
            />
            <Flex direction="column" gap="s" style={{ alignItems: "center", position: "relative", zIndex: 1 }}>
              <Icon name="image" size="xl" onBackground="neutral-weak" />
              <Text variant="label-default-s" onBackground="neutral-weak">Product image coming soon</Text>
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
        <Flex style={{ maxWidth: "1100px", width: "100%", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          {stats.map((stat, i) => (
            <Flex key={stat.label} direction="column" gap="xs" style={{ alignItems: "center" }}>
              <Text
                variant="heading-strong-m"
                style={{ color: "#3dbfbf", letterSpacing: "0.02em" }}
              >
                {stat.value}
              </Text>
              <Text variant="label-default-xs" onBackground="neutral-weak" style={{ letterSpacing: "0.08em" }}>
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
          <span className="tag-accent">What We Offer</span>
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
              radius="l"
              className="service-card"
              style={{
                border: `1px solid ${service.accent ? "var(--accent-border-weak)" : "var(--neutral-border-medium)"}`,
                background: service.accent ? "var(--accent-background-weak)" : "var(--neutral-background-weak)",
              }}
            >
              <Flex style={{ alignItems: "center", gap: "12px" }}>
                <Flex
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${service.accent ? "var(--accent-border-medium)" : "var(--brand-border-weak)"}`,
                    background: service.accent ? "var(--accent-background-medium)" : "var(--brand-background-medium)",
                  }}
                >
                  <Icon
                    name={service.icon}
                    size="s"
                    onBackground={service.accent ? "accent-medium" : "brand-medium"}
                  />
                </Flex>
                <Heading variant="heading-strong-s">{service.title}</Heading>
              </Flex>
              <Text variant="body-default-s" onBackground="neutral-weak" style={{ flex: 1 }}>
                {service.description}
              </Text>
              <Button href={service.href} variant="tertiary" size="s">
                Learn more →
              </Button>
            </Flex>
          ))}
        </Grid>
      </Flex>

      {/* ── FEATURED PRODUCTS ── */}
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
        <Flex fillWidth direction="column" gap="xl" style={{ maxWidth: "1100px" }}>
          <Flex style={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <Flex direction="column" gap="xs">
              <span className="tag-accent">Product Gallery</span>
              <Heading variant="heading-strong-xl">Featured Components</Heading>
            </Flex>
            <Button href="/products" variant="secondary" size="m">
              View All Products →
            </Button>
          </Flex>

          <Grid columns="3" gap="m" fillWidth>
            {[
              {
                label: "TFT LCD Module",
                sub: 'e.g. 10" with HDMI/VGA driver board',
                src: "/images/products/tft-hdmi-module.jpg",
                alt: "TFT LCD module with HDMI driver board",
              },
              {
                label: "Capacitive Touch Panel",
                sub: "PCAP Multi-Touch — factory supply",
                src: "/images/products/ctp-factory-batch.jpg",
                alt: "Capacitive touch panels in production batch",
              },
              {
                label: "Resistive Touch Panel",
                sub: "4-wire / 5-wire RTP with FPC",
                src: "/images/products/rtp-panel-packaged.jpg",
                alt: "Resistive touch panel in anti-static packaging",
              },
            ].map((item) => (
              <Flex
                key={item.label}
                direction="column"
                radius="l"
                className="service-card"
                style={{
                  border: "1px solid var(--neutral-border-medium)",
                  background: "var(--neutral-background-medium)",
                  overflow: "hidden",
                }}
              >
                <Flex
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    borderBottom: "1px solid var(--neutral-border-weak)",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </Flex>
                <Flex direction="column" gap="xs" padding="m">
                  <Text variant="label-strong-s">{item.label}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">{item.sub}</Text>
                </Flex>
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Flex>

      {/* ── HOW IT WORKS ── */}
      <Flex fillWidth paddingX="l" paddingTop="xl" paddingBottom="xl" style={{ justifyContent: "center" }}>
        <Flex fillWidth direction="column" gap="xl" style={{ maxWidth: "1100px", alignItems: "center" }}>
          <Flex direction="column" gap="s" style={{ alignItems: "center", textAlign: "center" }}>
            <span className="tag-accent">Our Process</span>
            <Heading variant="heading-strong-xl">How It Works</Heading>
          </Flex>

          <Flex fillWidth style={{ justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
            {steps.map((item) => (
              <Flex
                key={item.step}
                direction="column"
                gap="m"
                style={{
                  flex: "1",
                  minWidth: "220px",
                  borderTop: "3px solid #3dbfbf",
                  paddingTop: "24px",
                }}
              >
                <Flex style={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Text
                    variant="label-strong-xs"
                    style={{ color: "#3dbfbf", letterSpacing: "0.12em" }}
                  >
                    STEP {item.step}
                  </Text>
                  <Flex
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "8px",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--neutral-border-medium)",
                      background: "var(--neutral-background-medium)",
                    }}
                  >
                    <Icon name={item.icon} size="xs" onBackground="neutral-medium" />
                  </Flex>
                </Flex>
                <Heading variant="heading-strong-m">{item.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">{item.desc}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>

      {/* ── CTA BANNER ── */}
      <Flex fillWidth paddingX="l" paddingBottom="xl" style={{ justifyContent: "center" }}>
        <Flex
          fillWidth
          radius="xl"
          style={{
            maxWidth: "1100px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "32px",
            padding: "48px",
            border: "1px solid var(--brand-border-medium)",
            background: "var(--brand-background-weak)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Teal radial glow */}
          <Flex
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(61,191,191,0.15), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          {/* Orange accent dot — nod to the logo */}
          <Flex
            style={{
              position: "absolute",
              bottom: "24px",
              left: "48px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#e8703a",
              boxShadow: "0 0 10px rgba(232,112,58,0.5)",
            }}
          />
          <Flex direction="column" gap="s" style={{ maxWidth: "500px", position: "relative" }}>
            <Heading variant="heading-strong-xl">Need a display component?</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Send us your specifications and we'll source the right part. We
              support both single-unit and bulk orders.
            </Text>
          </Flex>
          <Flex gap="m" style={{ flexWrap: "wrap", position: "relative" }}>
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
