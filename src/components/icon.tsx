import React from 'react';
import {cva, type VariantProps} from "class-variance-authority";

export const iconVariants = cva("", {
    variants: {
        animate: {
            false: "",
            true: "animate-spin"
        },
        size: {
            small: "w-3 h-3",
            md: "w-5 h-5",
            big: "w-10 h-10",
            giant: "w-16 h-16"
        }
    },
    defaultVariants: {
        animate: false,
        size: "big"
    }
})

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>

}

export default function Icon({svg: SvgComponent, animate, size, className, ...props}: IconProps){
    return <SvgComponent className={iconVariants({animate, size, className})} {...props} />
}