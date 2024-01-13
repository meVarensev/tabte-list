import React, { CSSProperties, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  marginTop?: number | string;
  marginBottom?: number | string;
}

const Box: React.FC<BoxProps> = ({ children, className, style, marginTop, marginBottom }) => {
  const boxStyle: CSSProperties = {
    ...style,
    marginTop: marginTop !== undefined ? marginTop : 0,
    marginBottom: marginBottom !== undefined ? marginBottom : 0
  };

  return (
    <div className={className} style={boxStyle}>
      {children}
    </div>
  );
};

export { Box };
