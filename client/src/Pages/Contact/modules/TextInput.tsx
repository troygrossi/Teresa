import { IInput, INPUT_TYPE } from "../_redux_/contactForm.slice";
import { useDispatch } from "react-redux";
import { contactFormActions } from "../_redux_/contactForm.slice";
export const TextInput = ({ input }: { input: IInput }) => {
  const dispatch = useDispatch();
  const { onChange } = contactFormActions;

  if (input.type === INPUT_TYPE.TEXT_AREA) {
    return (
      <div>
        {input.error.message}
      <textarea
        name={input.key}
        value={input.value}
        onChange={(event) => dispatch(onChange({ value: event.target.value, key: input.key }))}
      ></textarea>
      </div>
    );
  } else {
    return (<div>
      {input.error.message}
      <input
        name={input.key}
        autoComplete={input.autoComplete}
        type={input.type}
        value={input.value}
        onChange={(event) => dispatch(onChange({ value: event.target.value, key: input.key }))}
      ></input>
      </div>
    );
  }
};

// AUTOCOMPLETE attribute values for browsers
// name: Full name of the user.
// given-name: First name.
// family-name: Last name.
// email: Email address.
// username: Username for login forms.
// new-password: A new password for registration or password change forms.
// current-password: The current password for a login or password update form.
// tel: Telephone number.
// street-address: The full street address.
// postal-code: Postal/ZIP code.
// country: Country name.
// organization: Company or organization name.
// cc-number: Credit card number.
// cc-exp: Credit card expiration date.
