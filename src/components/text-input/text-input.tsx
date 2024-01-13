import React, { FC, InputHTMLAttributes } from "react";
import styles from "./text-input.module.scss";
import { classNames } from "../../utils/class-names";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  radius?: "xl" | "md" | "sm" | "xs";
  size?: "xl" | "md" | "sm" | "xs";
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

const TextInput: FC<TextInputProps> = ({
                                         radius,
                                         size = "md",
                                         placeholder,
                                         leftSection,
                                         rightSection
                                       }) => {

  const borderRadius = styles[`border-${radius}`];
  const inputStyle = classNames(styles.textInput,{}, [styles[size],borderRadius]);

  return (
    <div className={styles.inputWrapper}>
      {leftSection && <div className={styles.leftSection}>{leftSection}</div>}
      <input
        type="text"
        className={inputStyle}
        placeholder={placeholder}
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
