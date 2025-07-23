import { IInput, INPUT_TYPE } from "../_redux_/contactForm.slice";
import { useDispatch } from "react-redux";
import { contactFormActions } from "../_redux_/contactForm.slice";
import { useState } from "react";
import { useSelector } from "../../../redux/redux";
import { Section } from "../../../Components/UI/Section";
import { palette } from "../../../palette/palette";
import { resizeRatio } from "../../../modules/resizeRatio";
export const TextInput = ({ input }: { input: IInput }) => {
  const dispatch = useDispatch();
  const { onChange } = contactFormActions;
  const { submitted } = useSelector((state) => state.contact.contactForm);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(!!input.value); // Keep label floating if there's a value
  };

  if (input.type === INPUT_TYPE.TEXT_AREA) {
    return (
      <Section className="input-container" position="relative" width="100%">
        {/* Error Message */}
        {input.error.message && (
          <Section
            className="error-message"
            position="absolute"
            color="white"
            topPos={-25}
            leftPos="40%"
            fontSize={14}
            filter={`drop-shadow(0px 1px 2px ${palette.primary('.5')})`}
          >
            {input.error.message}
          </Section>
        )}

        {/* Textarea */}
        <Section
          as="textarea"
          className="form-textarea"
          readOnly={submitted}
          id={input.key}
          value={input.value}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(onChange({ value: event.target.value, key: input.key }));
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          width="100%"
          height={180}
          mobile={{ height: 140,fontSize: 15  }}
          padding={12}
          borderRadius={8}
          border={isFocused ? `2px solid ${palette.tertiary()}` : `2px solid #ccc`}
          bg={isFocused ? '#fff' : '#f9f9f9'}
          fontSize={20}
          transition
          style={{
            boxSizing: 'border-box',
            boxShadow: isFocused ? `0 0 ${resizeRatio('8px')} rgba(90, 103, 216, 0.5)` : `inset 0 ${resizeRatio('2px')} ${resizeRatio('4px')} rgba(0, 0, 0, 0.1)`,
            outline: 'none',
            resize: 'vertical',
          }}
        />

        {/* Floating Label */}
        <Section
          as="label"
          className="floating-label"
          position="absolute"
          htmlFor={input.key}
          color={isFocused || !!input.value ? palette.tertiary() : palette.black('.5')}
          leftPos={12}
          topPos={isFocused || !!input.value ? '0px' : '10%'}
          transform={isFocused || !!input.value ? 'translateY(-100%)' : 'translateY(0)'}
          padding={`0 ${resizeRatio('4px')}`}
          fontWeight="bold"
          fontSize={isFocused || !!input.value ? 16 : 22}
          mobile={{ fontSize: isFocused || !!input.value ? 18 : 26 }}
          zIndex={1}
          style={{
            pointerEvents: 'none',
            transition: 'all 0.3s ease',
            backgroundColor: 'transparent',
          }}
        >
          {input.title}
        </Section>
      </Section>
    );
  } else {
    return (
      <Section className="input-container" position="relative" width="100%">
        {/* Error Message */}
        {input.error.message && (
          <Section
            className="error-message"
            position="absolute"
            color="white"
            topPos={-25}
            leftPos="40%"
            fontSize={14}
            filter={`drop-shadow(0px 1px 2px ${palette.primary('.5')})`}
          >
            {input.error.message}
          </Section>
        )}

        {/* Input */}
        <Section
          as="input"
          className="form-input"
          readOnly={submitted}
          id={input.key}
          autoComplete={input.autoComplete}
          type={input.type}
          value={input.value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(onChange({ value: event.target.value, key: input.key }));
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          width="100%"
          height={50}
          mobile={{ height: 65, fontSize: 23  }}
          padding={12}
          borderRadius={8}
          border={isFocused ? `2px solid ${palette.tertiary()}` : `2px solid #ccc`}
          bg={isFocused ? '#fff' : '#f9f9f9'}
          fontSize={20}
      
          transition
          style={{
            boxSizing: 'border-box',
            boxShadow: isFocused ? `0 0 ${resizeRatio('8px')} rgba(90, 103, 216, 0.5)` : `inset 0 ${resizeRatio('2px')} ${resizeRatio('4px')} rgba(0, 0, 0, 0.1)`,
            outline: 'none',
          }}
        />

        {/* Floating Label */}
        <Section
          as="label"
          className="floating-label"
          position="absolute"
          htmlFor={input.key}
          color={isFocused || !!input.value ? palette.tertiary() : palette.black('.5')}
          leftPos={12}
          topPos={isFocused || !!input.value ? '0px' : '50%'}
          transform={isFocused || !!input.value ? 'translateY(-100%)' : 'translateY(-50%)'}
          padding={`0 ${resizeRatio('4px')}`}
          fontWeight="bold"
          fontSize={isFocused || !!input.value ? 16 : 22}
          mobile={{ fontSize: isFocused || !!input.value ? 18 : 26 }}
          zIndex={1}
          style={{
            pointerEvents: 'none',
            transition: 'all 0.3s ease',
            backgroundColor: 'transparent',
          }}
        >
          {input.title}
        </Section>
      </Section>
    );
  }
};
