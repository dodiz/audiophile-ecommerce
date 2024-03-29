import { PropsWithChildren } from "react";

export type DialogProps = PropsWithChildren & {
  show: boolean;
  onHide: () => void;
  position?: "center" | "top-right";
};
