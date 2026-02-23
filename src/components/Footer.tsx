import React from "react";
import { Flex, Text, SmartLink, Icon } from "@once-ui-system/core";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      direction="column"
      style={{
        alignItems: "center",
        borderTop: "1px solid var(--neutral-border-weak)",
        background: "var(--neutral-background-weak)",
      }}
      paddingX="l"
      paddingY="xl"
    >
      <Flex
        fillWidth
        direction="column"
        gap="xl"
        style={{ maxWidth: "1100px" }}
      >
        {/* Top section */}
        <Flex
          fillWidth
          style={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "48px",
            alignItems: "flex-start",
          }}
        >
          {/* Brand */}
          <Flex direction="column" gap="m" style={{ maxWidth: "320px" }}>
            <Flex style={{alignItems:"center"}} gap="m">
              <Flex
                style={{
                  width: "32px",
                  height: "32px",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--brand-background-medium)",
                  border: "1px solid var(--brand-border-medium)",
                }}
              >
                <Icon name="cpu" size="s" onBackground="brand-strong" />
              </Flex>
              <Flex direction="column" style={{ gap: "1px" }}>
                <Text
                  variant="label-strong-m"
                  style={{ letterSpacing: "0.1em" }}
                >
                  GLAZZONE
                </Text>
                <Text
                  variant="label-default-xs"
                  onBackground="brand-weak"
                  style={{ letterSpacing: "0.05em" }}
                >
                  ELECTRONIC SOLUTIONS
                </Text>
              </Flex>
            </Flex>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Specialist sourcing and technical support for display technology -
              TFT LCD, resistive and capacitive touch panels, OLED, and custom
              display modules. Based in Israel, serving clients worldwide.
            </Text>
            {/* Social / contact icons */}
            <Flex gap="s">
              {[
                { href: "mailto:baruchglazz@gmail.com", icon: "mail" },
                { href: "tel:+972584485115", icon: "phone" },
              ].map((item) => (
                <SmartLink key={item.href} href={item.href}>
                  <Flex
                    padding="s"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--neutral-border-weak)",
                      background: "var(--neutral-background-weak)",
                    }}
                  >
                    <Icon name={item.icon} size="s" />
                  </Flex>
                </SmartLink>
              ))}
            </Flex>
          </Flex>

          {/* Links columns */}
          <Flex style={{ gap: "64px", flexWrap: "wrap" }}>
            <Flex direction="column" gap="m">
              <Text
                variant="label-strong-xs"
                onBackground="neutral-weak"
                style={{ letterSpacing: "0.08em" }}
              >
                NAVIGATION
              </Text>
              {[
                { href: "/", label: "Home" },
                { href: "/technical-support", label: "Technical Support" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <SmartLink key={link.href} href={link.href}>
                  <Text variant="body-default-s">{link.label}</Text>
                </SmartLink>
              ))}
            </Flex>

            <Flex direction="column" gap="m">
              <Text
                variant="label-strong-xs"
                onBackground="neutral-weak"
                style={{ letterSpacing: "0.08em" }}
              >
                PRODUCTS
              </Text>
              {[
                "TFT LCD Modules",
                "Resistive Touch (RTP)",
                "Capacitive Touch (CTP)",
                "Character LCD",
                "OLED Displays",
              ].map((item) => (
                <SmartLink key={item} href="/products">
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {item}
                  </Text>
                </SmartLink>
              ))}
            </Flex>

            <Flex direction="column" gap="m">
              <Text
                variant="label-strong-xs"
                onBackground="neutral-weak"
                style={{ letterSpacing: "0.08em" }}
              >
                CONTACT
              </Text>
              <Flex style={{alignItems:"center"}} gap="s">
                <Icon name="phone" size="s" onBackground="neutral-weak" />
                <SmartLink href="tel:+972584485115">
                  <Text variant="body-default-s">+972-58-448-5115</Text>
                </SmartLink>
              </Flex>
              <Flex style={{alignItems:"center"}} gap="s">
                <Icon name="mail" size="s" onBackground="neutral-weak" />
                <SmartLink href="mailto:baruchglazz@gmail.com">
                  <Text variant="body-default-s">baruchglazz@gmail.com</Text>
                </SmartLink>
              </Flex>
              <Flex style={{alignItems:"center"}} gap="s">
                <Icon name="mapPin" size="s" onBackground="neutral-weak" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Israel
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Bottom bar */}
        <Flex
          fillWidth
          paddingTop="m"
          style={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
            borderTop: "1px solid var(--neutral-border-weak)",
          }}
        >
          <Text variant="body-default-xs" onBackground="neutral-weak">
            © {year} GLAZZONE Electronic Solutions. All rights reserved.
          </Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Display Technology · Israel
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
