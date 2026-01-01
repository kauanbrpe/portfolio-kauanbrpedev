import React from "react";
import {cva, type VariantProps} from "class-variance-authority";

export const textVariants = cva("font-sans text-white", {
    variants: {
        variant: {
            "body-sm": "text-sm leading-5 font-normal",
            "body-sm-bold": "text-sm leading-5 font-semibold",
            "body-md": "text-2xl font-normal",
            "body-baseboard": "text-base leading-6 font-normal",
            "body-md-bold": "text-base leading-6 font-semibold",
            "body-stacks": "text-xl font-semibold",
            "body-bold-title": "text-7xl font-bold",
            "body-bold-title-pages": "text-2xl font-bold",
            "body-bold-subtile": "text-4xl font-bold",
            "body-bold-text": " font-bold",
            "body-small": "text-xs font-normal" 
        }
    },
    defaultVariants: {
        variant: "body-sm"
    }
});

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children: React.ReactNode;
}

export default function Text({ as = "span", variant, className, children, ...props }: TextProps){
    return React.createElement(
        as,
        {
            className: textVariants({variant, className}),
            ...props
        },
        children
    );
}