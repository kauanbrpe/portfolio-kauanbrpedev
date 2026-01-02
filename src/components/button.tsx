import React from "react";
import Icon from "./icon";
import Text from "./text";
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import {cva, type VariantProps} from 'class-variance-authority';

export const buttonVariants = cva("flex items-center justify-center cursor-pointer transition rounded-lg group gap-2", {
    variants: {
        variant: {
            none: "",
            primary: "bg-black hover:bg-white border border-white",
            secondary: "bg-black-initial hover:bg-white border border-white",
            tertiary: "bg-transparent hover:bg-white border border-white text-white",
            quarternary: "bg-gray-extremities text-black hover:bg-white hover:text-black transition-colors"
        },
        size: {
            small: "h-10 py-2 px-4",
            md: "h-14 py-4 px-5",
            big: "h-56 py-6 px-8 text-2xl",
            medium: "h-20 py-5 px-6 text-2xl"
        },
        disabled: {
            true: "opacity-50 pointer-events-none"
        },
        handling : {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "none",
        size: "md",
        disabled: false,
        handling: false,
    }
});

export const buttonTextVariants = cva("", {
    variants: {
        variant: {
            primary:  "text-white group-hover:text-gray-extremities"
        }, 
        size: {
            small: "text-sm",
            md: "text-md",
            big: "text-2xl",
            medium: "text-2xl"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "small"
    }
})

export const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-white group-hover:fill-black",
            secondary: "fill-white group-hover:fill-black-initial"
        },
        size: {
            md: "w-5 h-5",
            big: "w-10 h-10"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
});

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"];
    handling?: boolean;
}

export default function Button({
    variant,
    size,
    disabled,
    className,
    children,
    handling,
    icon,
    ...props
}: ButtonProps) {
    return <button className={buttonVariants({variant, size, disabled, handling, className})} {...props}>
        {icon && <Icon svg={handling ? SpinnerIcon : icon} animate={handling} className={buttonIconVariants()} /> }
        <Text variant="body-md-bold" className={buttonTextVariants()}>{children}</Text>
    </button>;
}