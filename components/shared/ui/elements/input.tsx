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
  defaultValue,
}) => {
  const element =
    elementType === "textarea" ? (
      <textarea
        id={id}
        placeholder={placeholder || `Enter ${label}`}
        className={`textarea card_animation ${
          !isValid && "border-2 border-red-400"
        }`}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    ) : (
      <input
        type={type}
        id={id}
        placeholder={placeholder || `Enter ${label}`}
        className={`input card_animation ${
          !isValid && "border-2 border-red-400"
        }`}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    );

  return (
    <div className="flex flex-col gap-2 max-md:basis-full">
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
