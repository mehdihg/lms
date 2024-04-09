import classNames from "classnames";
import { ProgressProps } from "./progress.types";
import { Size } from "../types/size.type";
const sizeClass: Record<Size, string> = {
  tiny: 'progress-xs',
  small: 'progress-sm',
  normal: 'progress-md',
  large: 'progress-lg',
};
export const Progress: React.FC<ProgressProps> = ({
  size = "normal",
  value,
  className,
  variant = "neutral",
}) => {
  const classes = classNames(
    "progress",
    className,
    { [sizeClass[size]]: size },
    { [`progress-${variant}`]: variant }
  );
  return <progress value={value} max={100} className={classes} />;
};
