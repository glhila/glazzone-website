"use client";

import React, { useState } from "react";
import { Heading, Flex, Text, Button, Tag, Icon, Grid } from "@once-ui-system/core";
import Image from "next/image";

// ── Image Carousel ───────────────────────────────────────────────────────────
function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <Flex direction="column" style={{ borderBottom: "1px solid var(--neutral-border-weak)" }}>
      {/* Main image */}
      <Flex
        style={{
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
          background: "var(--neutral-background-strong)",
        }}
      >
        <Image
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 550px"
        />

        {/* Prev / Next buttons — only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(0,0,0,0.45)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                backdropFilter: "blur(4px)",
                fontSize: "16px",
                lineHeight: 1,
                padding: 0,
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(0,0,0,0.45)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                backdropFilter: "blur(4px)",
                fontSize: "16px",
                lineHeight: 1,
                padding: 0,
              }}
              aria-label="Next image"
            >
              ›
            </button>

            {/* Dot indicators */}
            <Flex
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                gap: "6px",
                zIndex: 2,
              }}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    border: "none",
                    background: i === current ? "#3dbfbf" : "rgba(255,255,255,0.45)",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.2s ease, background 0.2s ease",
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </Flex>
          </>
        )}

        {/* Image counter badge */}
        {images.length > 1 && (
          <Flex
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "2px 8px",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.15)",
              zIndex: 2,
            }}
          >
            <Text variant="label-default-xs" style={{ color: "rgba(255,255,255,0.85)" }}>
              {current + 1} / {images.length}
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

// ── Product data ─────────────────────────────────────────────────────────────
// Images distributed across all 6 categories.
// Categories without dedicated photos share contextually appropriate images.
const productList = [
  {
    icon: "monitor",
    category: "TFT LCD Modules",
    tag: "Most Popular",
    description:
      "Full-colour TFT LCD panels across a wide size range with RGB, LVDS, and MIPI interfaces. Suitable for industrial, medical, and consumer applications.",
    specs: ["Multiple size options", "RGB / LVDS / MIPI", "Custom brightness & viewing angle", "Wide temperature range"],
    images: [
      { src: "/images/products/tft-hdmi-module.jpg",   alt: "TFT LCD module with HDMI/VGA driver board, running live" },
      { src: "/images/products/tft-panel-bare.jpg",     alt: "Bare TFT LCD panel — rear view, MTF121XN01" },
      { src: "/images/products/tft-medical-carts.jpg",  alt: "TFT displays integrated into medical equipment carts" },
      { src: "/images/products/tft-compact-module.jpg", alt: "Compact TFT display module in enclosure" },
    ],
  },
  {
    icon: "fingerprint",
    category: "Resistive Touch Panels",
    tag: "Industrial",
    description:
      "4-wire and 5-wire resistive overlays for industrial, rugged, and stylus-operated environments. Works with gloves or any pointing object.",
    specs: ["4-wire and 5-wire", "Glove & stylus compatible", "Custom FPC cable length", "Matches all LCD sizes"],
    images: [
      { src: "/images/products/rtp-panel-packaged.jpg", alt: "Resistive touch panel with FPC ribbon in anti-static packaging" },
      // Also include the TFT+RTP combo and medical carts as real-world context
      { src: "/images/products/tft-hdmi-module.jpg",   alt: "TFT module with touch panel overlay installed" },
      { src: "/images/products/tft-medical-carts.jpg",  alt: "Medical devices using resistive touch panels" },
    ],
  },
  {
    icon: "touchpad",
    category: "Capacitive Touch Panels",
    tag: "Multi-Touch",
    description:
      "PCAP touch panels with multi-touch and gesture support. High optical clarity glass surface with optional glove-mode driver ICs.",
    specs: ["Multi-touch & gestures", "Glove-compatible options", "Custom driver IC", "Single & multi-touch"],
    images: [
      { src: "/images/products/ctp-factory-batch.jpg", alt: "Capacitive touch panels — factory production batch" },
      { src: "/images/products/ctp-small-panel.jpg",   alt: "Small rounded PCAP capacitive touch panel with FPC ribbon" },
      { src: "/images/products/ctp-medical-lab.jpg",   alt: "Capacitive touchscreen operating in medical device testing lab" },
    ],
  },
  {
    icon: "layoutTemplate",
    category: "Character LCD Modules",
    tag: "Standard",
    description:
      "16×2, 20×4, and other standard formats with parallel, SPI, or I2C interfaces. Available with and without backlight.",
    specs: ["16×2, 20×4 and more", "Parallel / SPI / I2C", "Optional backlight", "Low power consumption"],
    // Use the lab/testing context images — relevant for embedded/instrument displays
    images: [
      { src: "/images/products/ctp-medical-lab.jpg",   alt: "Display module being tested in electronics lab" },
      { src: "/images/products/tft-compact-module.jpg", alt: "Compact display module — similar form factor to character LCD" },
    ],
  },
  {
    icon: "grid",
    category: "Graphic LCD Modules",
    tag: "Embedded",
    description:
      "Monochrome and COG graphic modules for embedded and industrial systems with wide operating temperature range.",
    specs: ["Monochrome & COG types", "Wide temp range", "Low power", "SPI / parallel interface"],
    // Small panel + bare panel shots best represent the component-level nature
    images: [
      { src: "/images/products/ctp-small-panel.jpg",   alt: "Small compact display panel — graphic LCD form factor" },
      { src: "/images/products/tft-panel-bare.jpg",     alt: "Bare display module — component close-up" },
      { src: "/images/products/ctp-medical-lab.jpg",    alt: "Graphic display being tested in lab environment" },
    ],
  },
  {
    icon: "sun",
    category: "OLED Displays",
    tag: "High Contrast",
    description:
      "OLED modules with exceptional contrast ratio and fast response — ideal for instruments, wearables, and compact devices.",
    specs: ["High contrast ratio", "Fast response", "SPI / I2C interface", "Compact form factors"],
    // The compact module in housing and the small panel are the most OLED-like shots available
    images: [
      { src: "/images/products/tft-compact-module.jpg", alt: "Compact display module in housing — OLED style form factor" },
      { src: "/images/products/ctp-small-panel.jpg",    alt: "Small compact display — similar to OLED module size" },
    ],
  },
];

// ── Page ────────────────────────────────────────────────────────────────────
export default function Products() {
  return (
    <Flex fillWidth direction="column" style={{ alignItems: "center" }} flex={1}>

      {/* Header */}
      <Flex
        fillWidth
        direction="column"
        paddingX="l"
        paddingBottom="xl"
        gap="m"
        style={{
          alignItems: "center",
          textAlign: "center",
          maxWidth: "800px",
          paddingTop: "96px",
        }}
      >
        <span className="tag-accent">Product Range</span>
        <Heading variant="display-strong-l">Display Modules & Touch Panels</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: "560px" }}>
          Engineering-grade display components sourced from trusted manufacturers.
          Contact us for datasheets and pricing.
        </Text>
      </Flex>

      {/* Product grid */}
      <Flex fillWidth paddingX="l" paddingBottom="xl" style={{ justifyContent: "center" }}>
        <Grid columns="2" gap="m" style={{ maxWidth: "1100px", width: "100%" }}>
          {productList.map((product) => (
            <Flex
              key={product.category}
              fillWidth
              direction="column"
              radius="l"
              className="service-card"
              style={{
                border: "1px solid var(--neutral-border-medium)",
                background: "var(--neutral-background-weak)",
                overflow: "hidden",
              }}
            >
              <ImageCarousel images={product.images} />

              <Flex direction="column" gap="m" padding="l">
                <Flex style={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <Flex style={{ alignItems: "center", gap: "10px" }}>
                    <Flex
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        flexShrink: 0,
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid var(--brand-border-weak)",
                        background: "var(--brand-background-weak)",
                      }}
                    >
                      <Icon name={product.icon} size="xs" onBackground="brand-medium" />
                    </Flex>
                    <Heading variant="heading-strong-m">{product.category}</Heading>
                  </Flex>
                  <Tag label={product.tag} variant="neutral" />
                </Flex>

                <Text variant="body-default-s" onBackground="neutral-weak">
                  {product.description}
                </Text>

                <Flex
                  direction="column"
                  gap="xs"
                  padding="m"
                  radius="m"
                  style={{
                    background: "var(--neutral-background-strong)",
                    border: "1px solid var(--neutral-border-weak)",
                  }}
                >
                  {product.specs.map((spec, i) => (
                    <Flex key={i} style={{ alignItems: "center" }} gap="s">
                      <Icon name="chevronRight" size="xs" onBackground="brand-medium" />
                      <Text variant="body-default-xs">{spec}</Text>
                    </Flex>
                  ))}
                </Flex>

                <Button href="/contact" variant="tertiary" size="s">
                  Request pricing & datasheet →
                </Button>
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>

      {/* CTA */}
      <Flex fillWidth paddingX="l" paddingBottom="xl" style={{ justifyContent: "center" }}>
        <Flex
          fillWidth
          radius="xl"
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
