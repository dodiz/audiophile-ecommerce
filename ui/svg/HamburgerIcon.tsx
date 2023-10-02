import { ComponentProps, FC } from "react";

export const HamburgerIcon: FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFF"
      fillRule="evenodd"
      viewBox="0 0 16 15"
      {...props}
    >
      <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
    </svg>
  );
};
