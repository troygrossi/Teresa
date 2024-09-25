import { Style } from "./_style_/contact.style";
import { useSelector } from "../../redux/redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactFormActions } from "./_redux_/contactForm.slice";
//
import { TextInput } from "./Modules/TextInput";

const { ContactSC, HeaderSC, ButtonSC, ...style } = Style();
export const Contact = () => {
  const contactForm = useSelector((state) => state.contact.contactForm);
  const window = useSelector((state) => state.window.windowQuery);
  const { inputs, isValid, loading, submitted } = contactForm;
  const dispatch = useDispatch();
  const { validateForm } = contactFormActions;

  const handleSubmit = async () => {

    // for testing
    // setTimeout(()=>{
    //   dispatch(contactFormActions.setLoading(false));

    // }, (1000))
    try {
      const resJson = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputs.name.value,
          email: inputs.email.value,
          phone: inputs.phone.value,
          message: inputs.message.value,
        }),
      });
      const response = await resJson.json();
      dispatch(contactFormActions.setLoading(false));
      if (!resJson.ok) {
        throw new Error(response.error);
      }

      dispatch(contactFormActions.setSubmitted(true));
      console.log(response.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isValid && !submitted) {
      // Dispatch form submission when validated
      handleSubmit();
    }
    console.log('test valid')
  }, [isValid]);

  // set loading to false always, if fields are not valid
  useEffect(() => {
    if (loading && !isValid) {
      dispatch(contactFormActions.setLoading(false));
    }
  }, [loading]);


  // Handle form submission
  const handleValidateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      handleSubmit();
    }
    dispatch(validateForm());
    dispatch(contactFormActions.setLoading(true));
  };
  return (
    <ContactSC window={window}>
      <HeaderSC>Contact</HeaderSC>
      <form style={style.formContainer()} onSubmit={handleValidateForm}>
        <div>
          <TextInput input={inputs.name}></TextInput>
          <TextInput input={inputs.email}></TextInput>
          <TextInput input={inputs.phone}></TextInput>
          <TextInput input={inputs.message}></TextInput>
        </div>
        {submitted ? (
          <div>Your Message Was Sent!</div>
        ) : (
          <ButtonSC window={window} type="submit">Submit</ButtonSC>
        )}
      </form>
      {loading && <div style={style.loading()}>...sending</div>}
    </ContactSC>
  );
};
