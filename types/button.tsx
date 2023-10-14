export enum ButtonVariant {
  Normal = "Normal",
  Success = "Success",
  Danger = "Danger",
  Outlined = "Outlined",
}

export interface ButtonPropsTypes {
  children: React.ReactNode;
  onClick?: any;
  type?: "submit" | "button";
  variant: "Normal" | "Success" | "Danger" | "Outlined";
  disabled?: boolean;
}
