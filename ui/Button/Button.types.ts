import { ComponentProps, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren & {
  variant?: "primary" | "secondary" | "secondary-reverse" | "tertiary";
} & ComponentProps<"button">;
