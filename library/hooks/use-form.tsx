// Importing types from a custom module
import {
  InitialInputsTypes,
  ValidatorReducerAction,
  ValidatorState,
  ValidatorPropertiesTypes,
} from "@/types/validation";

// Importing hooks from React
import { useCallback, useReducer } from "react";

// Importing a custom validator function
import { validate } from "../validators/validators";

// Reducer function that handles state changes
function reducer(state: ValidatorState, action: ValidatorReducerAction) {
  switch (action.type) {
    case "on_change": {
      // Loop through all inputs in the state
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
      }
      // Update the state with the new input value and validation result
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

// Custom hook that manages form state and input change handling
export function useForm(initialInputs: { [key: string]: InitialInputsTypes }) {
  // Use the reducer function to manage state
  const [formState, dispatch] = useReducer(reducer, {
    inputs: initialInputs,
  } as ValidatorState);

  // Callback function that handles input changes
  const inputChangeHandler = useCallback(
    (id: string, value: string, validators: ValidatorPropertiesTypes[]) => {
      // Dispatch an action to update the state with the new input value and validation result
      dispatch({
        type: "on_change",
        inputId: id,
        value: value,
        validators: validators,
      });
    },
    []
  );

  // Return the form state and input change handler
  return { formState, inputChangeHandler };
}
