import { IInput, INPUT_TYPE } from "../_redux_/contactForm.slice";
import { useDispatch } from "react-redux";
import { contactFormActions } from "../_redux_/contactForm.slice";
import { Style } from "../_style_/contact.style"; // Assuming you import your styled components here
import { useState } from "react";


const { InputSC, LabelSC, inputContainer } = Style();
export const TextInput = ({ input }: { input: IInput }) => {
  const dispatch = useDispatch();
  const { onChange } = contactFormActions;
 
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(!!input.value); // Keep label floating if there's a value

  if (input.type === INPUT_TYPE.TEXT_AREA) {
    return (
      <div style={inputContainer()}>
        {input.error.message}
        <textarea
          name={input.key}
          value={input.value}
          onChange={(event) => dispatch(onChange({ value: event.target.value, key: input.key }))}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div style={inputContainer()}>
        {input.error.message}
        <InputSC
          id={input.key}
          autoComplete={input.autoComplete}
          type={input.type}
          value={input.value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(onChange({ value: event.target.value, key: input.key }))}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <LabelSC htmlFor={input.key} isFocused={isFocused || !!input.value}>
          {input.title}
        </LabelSC>
      </div>
    );
  }
};
