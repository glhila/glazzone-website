"use client";

import React, { useState } from "react";
import { Flex, Button, SmartLink, Icon, Text } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
        height: "68px",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(37, 42, 68, 0.92)",   /* navy, semi-transparent */
        borderBottom: "1px solid rgba(141, 153, 199, 0.18)",
      }}
    >
      {/* Logo — background matches nav so white bg is invisible */}
      <SmartLink href="/" style={{ textDecoration: "none" }}>
        <Flex
          style={{
            background: "#252a44",
            borderRadius: "6px",
            padding: "4px 8px",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/og/logo.jpg"
            alt="GLAZZONE Electronic Solutions"
            width={148}
            height={42}
            style={{ objectFit: "contain", display: "block" }}
            priority
          />
        </Flex>
      </SmartLink>

      {/* Desktop Nav */}
      <Flex gap="xs" style={{ alignItems: "center" }} className="nav-desktop">
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
        <Flex
          style={{
            width: "1px",
            height: "20px",
            background: "rgba(141, 153, 199, 0.25)",
            margin: "0 4px",
          }}
        />
        <Button href="mailto:baruchglazz@gmail.com" variant="primary" size="s">
          <Icon name="mail" size="xs" />
          Get a Quote
        </Button>
      </Flex>

      {/* Mobile toggle */}
      <Flex className="nav-mobile">
        <Button
          variant="tertiary"
          size="s"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
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
            top: "68px",
            left: 0,
            right: 0,
            padding: "16px",
            gap: "8px",
            background: "rgba(37, 42, 68, 0.97)",
            borderBottom: "1px solid rgba(141, 153, 199, 0.18)",
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
