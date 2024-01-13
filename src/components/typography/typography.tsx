import React, {CSSProperties, ReactNode} from 'react';
import styles from './typography.module.scss';
import {createTypographyComponent, type TypographyVariant} from "../../utils/create-typography-component";

interface TypographyProps {
    variant?: TypographyVariant;
    children: ReactNode;
    style?: CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({variant = 'p', children, style}) => {
    const {Component, combinedClassNames } = createTypographyComponent(variant, styles.typography)

    return <Component className={combinedClassNames } style={style}>{children}</Component>;
};

export {Typography};
