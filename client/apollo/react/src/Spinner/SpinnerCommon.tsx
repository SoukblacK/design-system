import { ComponentPropsWithoutRef } from "react";

export const spinnerVariants = {
  blue: "blue",
  gray: "gray",
  white: "white",
} as const;

export type SpinnerVariants = keyof typeof spinnerVariants;

const DEFAULT_CLASSNAME = "af-spinner";

type SpinnerProps = {
  size?: 24 | 32 | 40;
  variant?: SpinnerVariants;
  text?: string;
} & ComponentPropsWithoutRef<"div">;

const Spinner = ({
  size = 40,
  variant = "blue",
  text = "Chargement en cours",
  className,
  ...props
}: SpinnerProps) => (
  <div
    role="alert"
    {...props}
    aria-busy
    aria-label={text}
    aria-live="assertive"
    className={[
      DEFAULT_CLASSNAME,
      `${DEFAULT_CLASSNAME}--${variant}`,
      `${DEFAULT_CLASSNAME}--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    style={
      {
        "--spinner-size": size,
      } as React.CSSProperties
    }
  />
);

Spinner.displayName = "Spinner";

export { Spinner };
