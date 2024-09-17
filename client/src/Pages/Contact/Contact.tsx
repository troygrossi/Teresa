import { Style } from "./_style_/contact.style";
import { useSelector } from "../../redux/redux";
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { contactFormActions } from "./_redux_/contactForm.slice";
// 
import { TextInput } from "./modules/TextInput";



const {ContactSC} = Style();
export const Contact = () => {

    const contactForm = useSelector((state)=>state.contact.contactForm);
        const {inputs, isValid} = contactForm;
    const dispatch = useDispatch();
    const {validateForm} = contactFormActions;

    useEffect(() => {
      if (isValid) {
        console.log(inputs) // Dispatch form submission when validated
      }
    }, [isValid]);
    
      // Handle form submission
      const handleValidateForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       dispatch(validateForm())
      };
    return (
        <ContactSC>
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
    )
}