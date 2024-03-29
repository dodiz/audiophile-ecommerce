import { ComponentProps, FC } from "react";

export const CheckIcon: FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      {...props}
    >
      <circle fill="#D87D4A" cx="32" cy="32" r="32" />
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="4"
        d="m20.754 33.333 6.751 6.751 15.804-15.803"
      />
    </svg>
  );
};
