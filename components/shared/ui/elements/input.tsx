import { InputPropsTypes } from "@/types/input";

const Input: React.FC<InputPropsTypes> = ({
  type,
  id,
  placeholder,
  label,
  onChange,
  isValid,
  helperText,
  errorText,
}) => {
  const element =
    type === "textarea" ? (
      <textarea
        id={id}
        placeholder={placeholder || `Enter ${label}`}
        className={`textarea ${!isValid && "border-red-400"}`}
        onChange={onChange}
      />
    ) : (
      <input
        id={id}
        placeholder={placeholder || `Enter ${label}`}
        className={`input  ${!isValid && "border-red-400"}`}
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
