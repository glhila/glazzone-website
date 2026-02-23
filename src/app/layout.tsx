import type { Metadata } from "next";
import { fonts } from "@/resources/once-ui.config";
import { Providers } from "@/components/Providers";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "GLAZZONE — Electronic Solutions",
  description:
    "Engineering-grade display technology — TFT LCD, resistive and capacitive touch panels, and electronic component solutions.",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-neutral="slate"
      data-brand="cyan"
      data-accent="orange"
      data-solid="color"
      data-solid-style="flat"
      data-border="playful"       /* rounded — matches logo's friendly style */
      data-surface="filled"
      data-transition="all"
      data-scaling="100"
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
