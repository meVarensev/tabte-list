import React, { FC, InputHTMLAttributes } from "react";
import styles from "./text-input.module.scss";
import { classNames } from "../../utils/class-names";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  radius?: "xl" | "md" | "sm" | "xs";
  customSize?: "xl" | "md" | "sm" | "xs";
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

const TextInput: FC<TextInputProps> = ({
                                         radius,
                                         customSize = "md",
                                         placeholder,
                                         leftSection,
                                         rightSection,
                                         ...rest
                                       }) => {

  const borderRadius = styles[`border-${radius}`];
  const inputStyle = classNames(styles.textInput, {}, [styles[customSize], borderRadius]);

  return (
    <div className={styles.inputWrapper}>
      {leftSection && <div className={styles.leftSection}>{leftSection}</div>}
      <input
        type="text"
        className={inputStyle}
        placeholder={placeholder}
        {...rest}
      />
      {rightSection && (
        <button type="submit" className={styles.rightSection}>
          {rightSection}
        </button>
      )}
    </div>
  );
};

export { TextInput };
