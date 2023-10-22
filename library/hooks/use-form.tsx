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
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: validate(action.value, action.validators),
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}

export function useForm(initialInputs: { [key: string]: InitialInputsTypes }) {
  const [formState, dispatch] = useReducer(reducer, {
    inputs: initialInputs,
  } as ValidatorState);

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
