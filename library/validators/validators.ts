import { ValidatorPropertiesTypes } from "@/types/validation";

enum ValidatorTypes {
  REQUIRE = "REQUIRE",
  FIRST_NAME = "FIRST_NAME",
  MINLENGTH = "MINLENGTH",
  MAXLENGTH = "MAXLENGTH",
  MIN = "MIN",
  MAX = "MAX",
  EMAIL = "EMAIL",
  FILE = "FILE",
  PASSWORD_MATCH = "PASSWORD_MATCH",
}

export const VALIDATOR_REQUIRE = () => ({ type: ValidatorTypes.REQUIRE });
export const VALIDATOR_FIRSTNAME = () => ({ type: ValidatorTypes.FIRST_NAME });
export const VALIDATOR_FILE = () => ({ type: ValidatorTypes.FILE });
export const VALIDATOR_MINLENGTH = (val: number) => ({
  type: ValidatorTypes.MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val: number) => ({
  type: ValidatorTypes.MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = (val: number) => ({
  type: ValidatorTypes.MIN,
  val: val,
});
export const VALIDATOR_MAX = (val: number) => ({
  type: ValidatorTypes.MAX,
  val: val,
});
export const VALIDATOR_EMAIL = () => ({ type: ValidatorTypes.EMAIL });
export const VALIDATOR_PASSWORD_MATCH = (password: string) => ({
  type: ValidatorTypes.PASSWORD_MATCH,
  password: password,
});

export const validate = (
  value: string,
  validators: ValidatorPropertiesTypes[]
) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === ValidatorTypes.REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === ValidatorTypes.FIRST_NAME) {
      isValid = isValid && /^[A-Z][a-z]+$/.test(value);
    }
    if (validator.type === ValidatorTypes.MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val!;
    }
    if (validator.type === ValidatorTypes.MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val!;
    }
    if (validator.type === ValidatorTypes.MIN) {
      isValid = isValid && +value >= validator.val!;
    }
    if (validator.type === ValidatorTypes.MAX) {
      isValid = isValid && +value <= validator.val!;
    }
    if (validator.type === ValidatorTypes.EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === ValidatorTypes.PASSWORD_MATCH) {
      isValid = isValid && value === validator.password;
    }
  }
  return isValid;
};
