import { InputPropsTypes } from "@/types/input";

const Input: React.FC<InputPropsTypes> = ({
  type,
  id,
  placeholder,
  label,
  helperText,
}) => {
  if (type === "textarea") {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="label">
          {label}
        </label>
        <textarea
          id={id}
          placeholder={placeholder || `Enter ${label}`}
          className="textarea"
        />
        <p className="section_subtitle_smaller text-gray-400">{helperText}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder || `Enter ${label}`}
        className="input"
      />
      <p className="section_subtitle_smaller text-gray-400">{helperText}</p>
    </div>
  );
};

export default Input;
