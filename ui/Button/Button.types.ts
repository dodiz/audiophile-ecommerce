import { ComponentProps, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren & {
  href?: string;
  variant?: "primary" | "secondary" | "secondary-reverse" | "tertiary";
} & ComponentProps<"button">;
