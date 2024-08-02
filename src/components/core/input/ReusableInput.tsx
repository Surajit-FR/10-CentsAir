import { ReusableInputProps } from "../../../types/common";

const ReusableInput = ({
    name,
    type,
    value,
    placeholder,
    onChange,
    onBlur,
    touched,
    error,
    className,
}: ReusableInputProps) => {
    return (
        <div>
            <input
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                style={{ border: touched && error ? "1px solid red" : "" }}
            />
            {touched && error && <div style={{ marginLeft: "10px", color: "red", fontSize: "14px" }}>{error}</div>}
        </div>
    );
};

export default ReusableInput;