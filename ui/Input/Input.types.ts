import { ComponentProps } from "react";

export type InputProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
};
