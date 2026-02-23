import React from "react";
import { Heading, Flex, Text, Button, Tag, Icon } from "@once-ui-system/core";


export const metadata = {
  title: "Contact - GLAZZONE Electronic Solutions",
  description: "Get in touch with GLAZZONE Electronic Solutions for display technology sourcing and support.",
};

export default function Contact() {
  return (
    <Flex fillWidth direction="column" style={{ alignItems: "center" }} flex={1}>

      {/* Header */}
      <Flex
        fillWidth
        direction="column"
        style={{ alignItems: "center", textAlign: "center", maxWidth: "700px" }}
        paddingX="l"
        paddingTop="104"
        paddingBottom="xl"
        gap="m"
      >
        <Tag label="Contact Us" variant="brand" />
        <Heading variant="display-strong-l">Get in Touch</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Whether you need a specific display part, a bulk order, or technical
          guidance — we're ready to help.
        </Text>
      </Flex>

      <Flex
        fillWidth
        paddingX="l"
        paddingBottom="xl"
        direction="column"
        gap="l"
        style={{ maxWidth: "900px" }}
      >
        {/* Contact cards */}
        <Flex gap="m" style={{ flexWrap: "wrap" }}>
          {/* Phone */}
          <Flex
            flex={1}
            direction="column"
            gap="l"
            padding="xl"
            style={{
              minWidth: "260px",
              border: "1px solid var(--neutral-border-weak)",
              background: "var(--neutral-background-weak)",
            }}
          >
            <Flex
              style={{
                width: "48px",
                height: "48px",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--neutral-border-weak)",
                background: "var(--neutral-background-strong)",
              }}
            >
              <Icon name="phone" size="m" onBackground="neutral-medium" />
            </Flex>
            <Flex direction="column" gap="xs">
              <Text
                variant="label-strong-xs"
                onBackground="neutral-weak"
                style={{ letterSpacing: "0.08em" }}
              >
                PHONE
              </Text>
              <Heading variant="heading-strong-xl">+972-58-448-5115</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Available during business hours · Israel (UTC+2)
              </Text>
            </Flex>
            <Button href="tel:+972584485115" variant="secondary" size="m" fillWidth>
              <Icon name="phone" size="s" />
              Call Now
            </Button>
          </Flex>

          {/* Email */}
          <Flex
            flex={1}
            direction="column"
            gap="l"
            padding="xl"
            style={{
              minWidth: "260px",
              border: "1px solid var(--brand-border-medium)",
              background: "var(--brand-background-weak)",
            }}
          >
            <Flex
              style={{
                width: "48px",
                height: "48px",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--brand-border-medium)",
                background: "var(--brand-background-medium)",
              }}
            >
              <Icon name="mail" size="m" onBackground="brand-strong" />
            </Flex>
            <Flex direction="column" gap="xs">
              <Text
                variant="label-strong-xs"
                onBackground="brand-weak"
                style={{ letterSpacing: "0.08em" }}
              >
                EMAIL
              </Text>
              <Heading variant="heading-strong-l">baruchglazz@gmail.com</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                For orders, datasheets, specs, and technical questions
              </Text>
            </Flex>
            <Button href="mailto:baruchglazz@gmail.com" variant="primary" size="m" fillWidth>
              <Icon name="mail" size="s" />
              Send Email
            </Button>
          </Flex>
        </Flex>

        {/* What to include */}
        <Flex
          fillWidth
          direction="column"
          gap="l"
          padding="xl"
          style={{
            border: "1px solid var(--neutral-border-weak)",
            background: "var(--neutral-background-weak)",
          }}
        >
          <Flex direction="column" gap="xs">
            <Text
              variant="label-strong-xs"
              onBackground="neutral-weak"
              style={{ letterSpacing: "0.08em" }}
            >
              TIPS FOR FASTER RESPONSES
            </Text>
            <Heading variant="heading-strong-m">What to include in your message</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              The more detail you provide, the faster we can find exactly what you need.
            </Text>
          </Flex>

          <Flex
            style={{
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {[
              { icon: "ruler", text: "Display size - inches or mm" },
              { icon: "cpu", text: "Interface - RGB, SPI, LVDS, MIPI" },
              { icon: "grid", text: "Resolution - e.g. 800×480" },
              { icon: "fingerprint", text: "Touch type - RTP or CTP" },
              { icon: "thermometer", text: "Operating temperature range" },
              { icon: "package", text: "Quantity - single or bulk" },
              { icon: "fileText", text: "Part number or datasheet" },
            ].map((item, i) => (
              <Flex
                key={i}
                gap="s"
                padding="s"
                style={{
                  alignItems:"center",
                  border: "1px solid var(--neutral-border-weak)",
                  background: "var(--neutral-background-strong)",
                  flex: "1",
                  minWidth: "200px",
                }}
              >
                <Icon name={item.icon} size="s" onBackground="brand-medium" />
                <Text variant="body-default-s">{item.text}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        {/* Location */}
        <Flex
          fillWidth
          gap="l"
          padding="l"
          style={{
            alignItems:"center",
            border: "1px solid var(--neutral-border-weak)",
            background: "var(--neutral-background-weak)",
          }}
        >
          <Flex
            style={{
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--neutral-border-weak)",
              background: "var(--neutral-background-strong)",
              flexShrink: 0,
            }}
          >
            <Icon name="mapPin" size="s" onBackground="neutral-medium" />
          </Flex>
          <Flex direction="column" gap="xs">
            <Text
              variant="label-strong-xs"
              onBackground="neutral-weak"
              style={{ letterSpacing: "0.08em" }}
            >
              LOCATION
            </Text>
            <Text variant="body-default-m">
              Based in Israel · Serving clients worldwide
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
