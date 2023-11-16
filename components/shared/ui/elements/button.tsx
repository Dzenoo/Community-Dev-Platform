// Importing the ButtonPropsTypes and ButtonVariant types from the button module
import { type ButtonPropsTypes, ButtonVariant } from "@/types/button";

// An object that maps each ButtonVariant to a corresponding CSS class name
const variantClassNames = {
  [ButtonVariant.Normal]: "button_normal",
  [ButtonVariant.Success]: "button_success",
  [ButtonVariant.Danger]: "button_danger",
  [ButtonVariant.Outlined]: "button_outlined",
};

// A functional component that renders a button element with the specified props
const Button: React.FC<ButtonPropsTypes> = ({
  children,
  type,
  variant,
  onClick,
  disabled,
}) => {
  // Get the CSS class name for the specified variant
  const variantClassName: string = variantClassNames[variant];

  // Render the button element with the specified props and variant class name
  return (
    <button
      onClick={onClick}
      type={type}
      className={variantClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Export the Button component as the default export of this module
export default Button;
