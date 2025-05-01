// import Select from "react-select";

//component-import
// import ToolTip from "../ToolTip/ToolTip";

//styles-import
// import "./TextField.scss"
import ReactSelect from "react-select";
import styles from "../../../styles/components-styles/text-field/text-field.module.scss";


const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #cbcbcb",
    borderRadius: "10px",
    padding: "4px",
    transition: "border-color 0.2s ease-in-out",
  }),

};

const formatOptionLabel = ({ label, value }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span style={{ wordWrap: 'break-word', marginRight: '10px' }}>{label}</span>
  </div>
);

const TextFieldSelect = ({ id, name, onChange, onBlur, isLoading, value, options, placeholder, label, noOptionsMessage, required, isToolTip, isformatOptionLabel, isDisabled }) => (
  <div className={`${styles['form-input-section']} ${styles['ui-form-content-input']}`}>
    <ReactSelect
      id={id}
      className={styles["ui-form-select-box"]}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      value={value}
      options={options}
      styles={customStyles}
      noOptionsMessage={noOptionsMessage}
      isSearchable
      isClearable
      isLoading={isLoading}
      formatOptionLabel={isformatOptionLabel ? formatOptionLabel : null}
      isDisabled={isDisabled ? isDisabled : false}
    />
    <label className={styles["ui-label"]} htmlFor={id}>
      {label}{" "}
      {/* <ToolTip text={isToolTip} requiredField={required} isToolTip={isToolTip}>
        {(isToolTip && <div className="info-icon">
          <img
            src="/images/info-icon.svg"
            alt=""
          />
        </div>)}
      </ToolTip> */}
    </label>
  </div>
);

export default TextFieldSelect;
