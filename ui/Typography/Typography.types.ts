import { PropsWithChildren } from "react";

export type TypographyProps = PropsWithChildren & {
  variant:
    | "title-h1"
    | "title-h2"
    | "title-h3"
    | "title-h4"
    | "title-h5"
    | "title-h6"
    | "overline"
    | "sub-title"
    | "body";
  className?: string;
};
