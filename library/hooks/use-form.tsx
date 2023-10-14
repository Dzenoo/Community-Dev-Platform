import {
  InitialInputsTypes,
  ValidatorReducerAction,
  ValidatorState,
  ValidatorPropertiesTypes,
} from "@/types/validation";
import { useCallback, useReducer } from "react";
import { validate } from "../validators/validators";

function reducer(state: ValidatorState, action: ValidatorReducerAction) {
  switch (action.type) {
    case "on_change": {
      const updatedInputs = {
        ...state.inputs,
        [action.inputId]: {
          value: action.value,
          isValid: validate(action.value, action.validators),
        },
      };

      const formIsValid = Object.values(updatedInputs).reduce(
        (isValid, input) => isValid && input.isValid,
        true
      );

      return {
        ...state,
        inputs: updatedInputs,
        formIsValid: formIsValid,
      };
    }
    default: {
      return state;
    }
  }
}

export function useForm(
  initialInputs: { [key: string]: InitialInputsTypes },
  initialValidity: boolean
) {
  const [formState, dispatch] = useReducer(reducer, {
    inputs: initialInputs,
    formIsValid: initialValidity,
  });

  const inputChangeHandler = useCallback(
    (id: string, value: string, validators: ValidatorPropertiesTypes[]) => {
      dispatch({
        type: "on_change",
        inputId: id,
        value: value,
        validators: validators,
      });
    },
    []
  );

  return { formState, inputChangeHandler };
}
