import { ButtonPropsTypes, ButtonVariant } from "@/types/button";

const variantClassNames = {
  [ButtonVariant.Normal]: "button_normal",
  [ButtonVariant.Success]: "button_success",
  [ButtonVariant.Danger]: "button_danger",
  [ButtonVariant.Outlined]: "button_outlined",
};

const Button: React.FC<ButtonPropsTypes> = ({
  children,
  type,
  variant,
  onClick,
}) => {
  const variantClassName = variantClassNames[variant];

  return (
    <button onClick={onClick} type={type} className={variantClassName}>
      {children}
    </button>
  );
};

export default Button;
