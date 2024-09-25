import { Style } from "./_style_/contact.style";
import { useSelector } from "../../redux/redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactFormActions } from "./_redux_/contactForm.slice";
//
import { TextInput } from "./Modules/TextInput";

const { ContactSC } = Style();
export const Contact = () => {
  const contactForm = useSelector((state) => state.contact.contactForm);
  const window = useSelector((state) => state.window.windowQuery);
  const { inputs, isValid } = contactForm;
  const dispatch = useDispatch();
  const { validateForm } = contactFormActions;

  const handleSubmit = async () => {
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
      if (!resJson.ok) {
        throw new Error(response.error);
      }

      dispatch(contactFormActions.resetFormData())
      console.log(response.message)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isValid) { // Dispatch form submission when validated
      handleSubmit();
    }
  }, [isValid]);

  // Handle form submission
  const handleValidateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isValid){
      handleSubmit()
    }
    dispatch(validateForm());
  };
  return (
    <ContactSC window={window}>
      <h1>Contact</h1>
      <form onSubmit={handleValidateForm}>
        <div>
          <TextInput input={inputs.name}></TextInput>
          <TextInput input={inputs.email}></TextInput>
          <TextInput input={inputs.phone}></TextInput>
          <TextInput input={inputs.message}></TextInput>
        </div>

        <button type="submit">Submit</button>
      </form>
    </ContactSC>
  );
};
