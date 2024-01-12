import {classNames} from "./class-names";

const typographyVariants = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
} as const;

export type TypographyVariant = keyof typeof typographyVariants;

const typographyEntries = Object.entries(typographyVariants);

export function createTypographyComponent(variant: TypographyVariant, baseStyle: string) {
    const style = typographyEntries.map(([key, value]) => [key, variant === value]);
    const appliedStyles = Object.fromEntries(style);

    const combinedClassNames  = classNames(baseStyle, appliedStyles, []);
    const Component = typographyVariants[variant];

    return { Component,  combinedClassNames  };
}
