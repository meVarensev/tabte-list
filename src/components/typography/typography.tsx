import React, {CSSProperties, ReactNode} from 'react';
import styles from './typography.module.scss';
import {createTypographyComponent, type TypographyVariant} from "../../utils/create-typography-component";

interface TypographyProps {
    variant?: TypographyVariant;
    children?: ReactNode;
    style?: CSSProperties;
    label?: string;
}

const Typography: React.FC<TypographyProps> = ({variant = 'p', children, style,label}) => {
    const {Component, combinedClassNames } = createTypographyComponent(variant, styles.typography)

    return <Component className={combinedClassNames } style={style}>
        <>
            <span className={styles.labelColor}>{label}</span>
            {children}
        </>
    </Component>;
};

export {Typography};
