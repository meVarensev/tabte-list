import {classNames} from "./class-names";
/**
 * Функция для создания компонента типографии и соответствующих ему стилей.
 * @param {TypographyVariant} variant - Вариант типографии.
 * @param {string} baseStyle - Базовый стиль.
 * @returns {Object} - Объект с компонентом и комбинированными классами.
 */

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
