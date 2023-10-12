import { InputPropsTypes } from "@/types/input";

const Input: React.FC<InputPropsTypes> = ({ type, id, placeholder, label }) => {
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
        placeholder={placeholder || "Enter Correct Value"}
        className="input"
      />
    </div>
  );
};

export default Input;
