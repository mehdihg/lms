import classNames from "classnames";
import { Size } from "../types/size.type";
import { AvatarProps } from "./avatar.type";
import Image from "next/image";
import { IconUserProfile } from "../icons/icons";

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};
export const Avatar: React.FC<AvatarProps> = ({
  variant = "primary",
  size = "normal",
  src,
  alt = "",
  className,
}) => {
  const classes = classNames(
    "avatar",
    { [sizeClasses[size]]: size },
    { [`avatar-${variant}`]: variant }
  );
  return <div className={classes} style={{width:sizeClasses[size],height:sizeClasses[size]}}>
        {
            src ?(
                <Image
                    src={src}
                    alt={alt}
                    width={sizeClasses[size]}
                    height={sizeClasses[size]}
                />
            ):(
                <IconUserProfile
                    width={sizeClasses[size]/2}
                    height={sizeClasses[size]/2}
                />
            )
        }
  </div>;
};
