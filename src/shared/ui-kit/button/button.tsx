import React from "react";
import styles from "./button.module.scss";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  id?: string,
  variant?: "contained" | "outlined"
  children: string | React.ReactNode
  isIcon?: boolean
}

const Button: React.FC<ButtonProps> = ({ id, variant = "contained", children, onClick, isIcon, ...rest }) => {
  const buttonClassName =
    variant === "contained" ? styles.ButtonContained : styles.ButtonOutlined;

  return (
    <button
      onClick={onClick}
      type="button"
      className={isIcon ? styles.isIcon : buttonClassName}
      id={id}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
