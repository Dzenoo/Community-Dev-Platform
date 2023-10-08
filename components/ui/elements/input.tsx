import { InputPropsTypes } from "@/types/input";

const Input: React.FC<InputPropsTypes> = ({ id, placeholder, label }) => {
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
