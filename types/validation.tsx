export type ValidatorPropertiesTypes = {
  type: string;
  password?: string;
  val?: number;
};

export type InitialInputsTypes = {
  value: string;
  isValid: boolean;
};

export type ValidatorState = {
  inputs: { [key: string]: InitialInputsTypes };
  formIsValid: boolean;
};

export type ValidatorReducerAction = {
  type: "on_change";
  inputId: string;
  value: string;
  validators: ValidatorPropertiesTypes[];
};
