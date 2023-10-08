export enum ButtonVariant {
  Normal = "Normal",
  Success = "Success",
  Danger = "Danger",
  Outlined = "Outlined",
}

export interface ButtonPropsTypes {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
  variant: "Normal" | "Success" | "Danger" | "Outlined";
}
