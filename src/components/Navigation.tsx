"use client";

import React, { useState } from "react";
import { Flex, Button, SmartLink, Icon, Text, Line } from "@once-ui-system/core";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/technical-support", label: "Tech Support" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Flex
      as="header"
      fillWidth
      paddingX="l"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "64px",
        alignItems:"center",
        justifyContent: "space-between",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "var(--page-background)",
        borderBottom: "1px solid var(--neutral-border-weak)",
      }}
    >
      {/* Logo */}
      <SmartLink href="/" style={{ textDecoration: "none" }}>
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
              onBackground="neutral-strong"
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
      </SmartLink>

      {/* Desktop Nav */}
      <Flex gap="xs" style={{alignItems:"center"}} className="nav-desktop">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
          return (
            <Button
              key={link.href}
              href={link.href}
              variant={isActive ? "secondary" : "tertiary"}
              size="s"
            >
              {link.label}
            </Button>
          );
        })}
        <Flex style={{ width: "1px", height: "24px", background: "var(--neutral-border-weak)", margin: "0 4px" }} />
        <Button href="mailto:baruchglazz@gmail.com" variant="primary" size="s">
          <Icon name="mail" size="xs" />
          Get a Quote
        </Button>
      </Flex>

      {/* Mobile toggle */}
      <Flex className="nav-mobile">
        <Button variant="tertiary" size="s" onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? "close" : "menu"} size="m" />
        </Button>
      </Flex>

      {/* Mobile menu */}
      {mobileOpen && (
        <Flex
          direction="column"
          className="nav-mobile"
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            padding: "16px",
            gap: "8px",
            background: "var(--page-background)",
            borderBottom: "1px solid var(--neutral-border-weak)",
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Button
                key={link.href}
                href={link.href}
                variant={isActive ? "secondary" : "tertiary"}
                size="m"
                fillWidth
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Button>
            );
          })}
          <Button
            href="mailto:baruchglazz@gmail.com"
            variant="primary"
            size="m"
            fillWidth
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
