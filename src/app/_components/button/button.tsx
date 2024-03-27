import classNames from "classnames";
import { ButtonProps, Shape } from "./button.types";
import { Size } from "../types/size.type";
const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};
const shapeClasses: Record<Shape, string> = {
  wide: "btn-wide",
  square: "btn-square",
  full: "btn-full",
  default: "",
};
export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست...",
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icone": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [sizeClasses[size]]: size },
    { [shapeClasses[shape]]: shape }
  );
  return (
    <button type={type} disabled={isDisabled} {...rest} className={classes}>
      {isLoading ? loadingText : children}
    </button>
  );
};
