import { ReactNode } from "react";
import { ComponentBaseType } from "../types/base-component.type";
import { Variant } from "../types/variant.type";

export type TimeRef = {
    start: () => void;
    pause: () => void;
    resume: () => void;
    restart: (expiryTimeStamp: Date) => void
}
type BaseWithoutVariant = Omit<ComponentBaseType, 'variant' | 'isDisabled'>

export type TimerProps = BaseWithoutVariant & {
    variant?: Variant | 'gradient';
    expiryTimestamp: Date;
    showTitle?: boolean;
    showDays?: boolean;
    showHours?: boolean;
    autoStart?: boolean;
    onExpire?: () => void;
}
export type TimerProgressProps = BaseWithoutVariant & {
    variant: Variant | 'gradient';
    value: number;
    maxValue: number;
    showTitle?: boolean;
    datePart: string;
    children: ReactNode
}