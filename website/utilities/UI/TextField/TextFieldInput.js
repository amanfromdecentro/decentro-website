import React from "react";
import styles from "../../../styles/components-styles/text-field/text-field.module.scss";

const TextFieldInput = ({
  id,
  name,
  onChange,
  onBlur,
  value,
  touched,
  error,
  placeholder,
  label,
  required,
  disabled,
  maxLength,
  isToolTip,
  tooltipLink,
  type = "text" // New prop for input type
}) => (
  <div className={`${styles['ui-form-input-section']} ${styles['ui-form-content-input']}`}>
    <input
      id={id}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      className={`${styles['ui-form-input-box']} ${touched && error ? styles['input-error'] : ""}`}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      maxLength={maxLength}
      type={type === "Date" ? "date" : "text"} // Set input type based on 'type' prop
    />
    <label className={styles['ui-label']} htmlFor={id}>
      {label}
      {/* ToolTip component commented out as in original code */}
    </label>
    {type !== "Date" && touched && error && (
      <img
        src="/images/invalid-input.svg"
        alt="Invalid Input"
        className={styles['ui-invalid-field-icon']}
      />
    )}
  </div>
);

export default TextFieldInput;