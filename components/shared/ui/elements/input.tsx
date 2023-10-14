import { InputPropsTypes } from "@/types/input";

const Input: React.FC<InputPropsTypes> = ({
  type,
  elementType,
  id,
  placeholder,
  label,
  onChange,
  isValid,
  helperText,
  errorText,
}) => {
  const element =
    elementType === "textarea" ? (
      <textarea
        id={id}
        placeholder={placeholder || `Enter ${label}`}
        className={`textarea ${!isValid && "border-2 border-red-400"}`}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        id={id}
        placeholder={placeholder || `Enter ${label}`}
        className={`input  ${!isValid && "border-2 border-red-400"}`}
        onChange={onChange}
      />
    );

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label">
        {label}
      </label>
      {element}
      {helperText && (
        <p className="section_subtitle_smaller text-gray-400">{helperText}</p>
      )}
      {!isValid && (
        <p className="section_subtitle_smaller text-red-400">{errorText}</p>
      )}
    </div>
  );
};

export default Input;
