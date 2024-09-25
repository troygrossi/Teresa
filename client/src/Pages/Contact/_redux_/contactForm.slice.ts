import { createSlice, PayloadAction } from "@reduxjs/toolkit";
enum AUTOCOMPLETE {
  NAME = "name",
  GIVEN_NAME = "given-name",
  FAMILY_NAME = "family-name",
  EMAIL = "email",
  USERNAME = "username",
  NEW_PASSWORD = "new-password",
  CURRENT_PASSWORD = "current-password",
  TEL = "tel",
  STREET_ADDRESS = "street-address",
  POSTAL_CODE = "postal-code",
  COUNTRY = "country",
  ORGANIZATION = "organization",
  CC_NUMBER = "cc-number",
  CC_EXP = "cc-exp",
  //
  NONE = "none",
}
export enum INPUT_TYPE {
  // Not real type, will conditionally return a react textarea rather than an input
  TEXT_AREA = "text-area",
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  NUMBER = "number",
  TEL = "tel",
  URL = "url",
  SEARCH = "search",
  DATE = "date",
  TIME = "time",
  DATETIME_LOCAL = "datetime-local",
  MONTH = "month",
  WEEK = "week",
  COLOR = "color",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  RANGE = "range",
  FILE = "file",
  HIDDEN = "hidden",
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

enum VALIDATE {
  REQUIRED = "REQUIRED",
  IS_EMAIL = "IS_EMAIL",
}
export interface IInput {
  // This will be set with the initial state setter function
  key: string;
  title: string;
  value: string;
  type: INPUT_TYPE;
  error: {
    isError: boolean;
    message: string;
  };
  autoComplete?: AUTOCOMPLETE;
  validate?: Array<VALIDATE>;
}

export interface IFormState {
  contactForm: {
    inputs: {
      //
      name: IInput;
      email: IInput;
      phone: IInput;
      message: IInput;
      //
    };
    isValid: boolean;
  };
}

const INITIAL_STATE: IFormState = {
  contactForm: {
    inputs: {
      name: {
        // title: what the label will say
        title: "Name",
        //   type: will change the type of input, modifies input 'type' attribute
        type: INPUT_TYPE.TEXT,
        //   helps browsers autocomplete, helps to know what type of autocompletion
        autoComplete: AUTOCOMPLETE.NAME,
        validate: [VALIDATE.REQUIRED],
        error: {
          // do not edit this ...
          message: "",
          isError: false,
        },
        key: "",
        value: "",
        //   ...
      },
      email: {
        title: "Email",
        type: INPUT_TYPE.EMAIL,
        autoComplete: AUTOCOMPLETE.EMAIL,
        // last element takes prescedence
        validate: [VALIDATE.IS_EMAIL, VALIDATE.REQUIRED],
        //
        error: {
          message: "",
          //
          isError: false,
        },
        key: "",
        value: "",
      },
      phone: {
        key: "",
        value: "",
        title: "Phone Number",
        type: INPUT_TYPE.TEL,
        autoComplete: AUTOCOMPLETE.TEL,
        //
        error: {
          message: "",
          isError: false,
        },
      },
      message: {
        key: "",
        value: "",
        title: "Message",
        type: INPUT_TYPE.TEXT_AREA,
        validate: [VALIDATE.REQUIRED],
        //
        error: {
          message: "",
          isError: false,
        },
        autoComplete: AUTOCOMPLETE.NONE,
      },
    },
    isValid: false,
  },
};
const getInitialState = (initialState: IFormState): IFormState => {
  // Set initial keys, keys will be a string that is the same as the input property name
  Object.keys(initialState.contactForm.inputs).forEach((key) => {
    if (key in initialState.contactForm.inputs) {
      initialState.contactForm.inputs[
        key as keyof typeof initialState.contactForm.inputs
      ].key = key;
    }
  });
  return initialState;
};

const slice = createSlice({
  name: "contactForm",
  initialState: getInitialState(INITIAL_STATE),
  reducers: {
    onChange(state, action: PayloadAction<{ value: string; key: string }>) {
      const { key, value } = action.payload;
      if (key in state.contactForm.inputs) {
        state.contactForm.inputs[
          key as keyof typeof state.contactForm.inputs
        ].value = value;
      }
    },
    validateForm(state) {
      let isValid = true;
      const validateRequired = (text: string): boolean => {
        return Boolean(text.trim());
      };
      const validateIsEmail = (text: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(text);
      };

      const validateInputField = ({
        input,
        valType,
      }: {
        input: IInput;
        valType: VALIDATE;
      }): IInput["error"] => {

        switch (valType) {
          case VALIDATE.REQUIRED:
            if (!validateRequired(input.value)) {
              isValid = false;
              input.error.isError = true;
              input.error.message = `${input.title} is required`;
            }
            break;
          case VALIDATE.IS_EMAIL:
            if (!validateIsEmail(input.value)) {
              isValid = false;
              input.error.isError = true;
              input.error.message = "Must use a valid email";
            }
            break;
        }
        return input.error;
      };

      Object.keys(state.contactForm.inputs).forEach((key) => {
        // For each input property run a validation function for each validate element in the validate array
        if (key in state.contactForm.inputs) {
          const input =
            state.contactForm.inputs[
              key as keyof typeof state.contactForm.inputs
            ];
          if (input?.validate?.length) {
            input.error.isError = false;
            input.error.message = "";
            input.validate.forEach((valType) => {
              input.error = validateInputField({ input, valType });
            });
          }
          // update input error state
          state.contactForm.inputs[
            key as keyof typeof state.contactForm.inputs
          ] = input;
        }
      });
      // Set isValid state to true or false depending on if there is an error or not
      state.contactForm.isValid = isValid;
    },
    resetFormData(state) {
      state.contactForm = INITIAL_STATE.contactForm;
    },
  },
});

// Reducer
export const contactFormReducer = slice.reducer;
export const contactFormActions = slice.actions;
