import { ComponentProps, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren & {
  variant?: "primary" | "secondary" | "tertiary";
} & ComponentProps<"button">;
