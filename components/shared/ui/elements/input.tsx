// Importing the InputPropsTypes interface from the input file in the types folder
import { type InputPropsTypes } from "@/types/input";

// Defining the Input component as a functional component that takes in the InputPropsTypes interface as props
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
  val,
}) => {
  // Defining the element variable as a JSX.Element that is either an input or a textarea depending on the elementType prop
  const element: JSX.Element =
    elementType === "textarea" ? (
      <textarea
        id={id}
        placeholder={placeholder || `Enter ${label}`}
        className={`textarea card_animation ${
          !isValid && "border-2 border-red-400"
        }`}
        onChange={onChange}
        defaultValue={defaultValue}
        value={val}
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
        value={val}
      />
    );

  // Returning the JSX for the Input component
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

// Exporting the Input component as the default export of the module
export default Input;
