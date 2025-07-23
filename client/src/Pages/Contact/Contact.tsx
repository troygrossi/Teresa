import { useSelector } from "../../redux/redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactFormActions } from "./_redux_/contactForm.slice";
import { Section } from "../../Components/UI/Section";
import { palette } from "../../palette/palette";
import { resizeRatio } from "../../modules/resizeRatio";
import { TextInput } from "./Modules/TextInput";
export const Contact = () => {
  const contactForm = useSelector((state) => state.contact.contactForm);
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
    <Section
      className="contact-page"
      column
      center
      width="100%"
      minHeight="100vh"
      padding="140px 5px 20px 5px"
      mobile={{ padding: "20px 10px 20px 10px" }}
    >
      {/* Contact Container */}
      <Section
        className="contact-container"
        column
        center
        width="50%"
        maxWidth="600px"
        bg="primary"
        bgAlpha="0.1"
        border
        borderColor="tertiary"
        borderAlpha="0.7"
        borderRadius="15px"
        style={{
          borderWidth: resizeRatio('12px'),
        }}
        padding="60px 40px"
        backdropFilter="blur(10px) saturate(1.2)"
        mobile={{
          width: "100%",
          maxWidth: "100%",
          padding: "20px 15px 20px 10px"
        }}
      >
        {/* Header */}
        <Section
          className="contact-header"
          as="h1"
          color="tertiary"
          marginBottom="40px"
          fontSize={50}
          mobile={{ fontSize: 42 }}
          fontWeight="bold"
          textAlign="center"
          paddingBottom="15px"
          filter={`drop-shadow(0px 2px 4px ${palette.primary('.3')})`}
          style={{
            borderBottom: `2px solid ${palette.tertiary()}`,
          }}
        >
          Contact
        </Section>

        {/* Form */}
        <Section
          as="form"
          className="contact-form"
          column
          width="100%"
          gap="40px"
          onSubmit={handleValidateForm}
          mobile={{ width: "100%", height: "500px", gap: "35px" }}
        >
          <Section className="form-fields" column width="100%" height="100%" gap="40px" mobile={{ width: "100%", height: "100%", gap: "35px" }}>
            <TextInput input={inputs.name} />
            <TextInput input={inputs.email} />
            <TextInput input={inputs.phone} />
            <TextInput input={inputs.message} />
          </Section>

          {/* Submit Section */}
          <Section className="submit-section" center marginTop="20px">
            {submitted ? (
              <Section
                className="success-message"
                color="tertiary"
                fontSize={32}
                mobile={{ fontSize: 28 }}
                fontWeight="bold"
                textAlign="center"
                filter={`drop-shadow(0px 2px 4px ${palette.primary('.3')})`}
              >
                Your Message Was Sent!
              </Section>
            ) : (
              <Section
                as="button"
                type="submit"
                className="submit-button"
                bg="tertiary"
                bgAlpha="0.8"
                width="200px"
                center
                color="black"
                padding="12px 24px"
                borderRadius="8px"
                border={false}
                transition
                fontSize={20}
                mobile={{ fontSize: 18, bottomPos: 20 }}
                fontWeight="bold"
                style={{
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  outline: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0px 0px 20px 5px rgb(255, 255, 255, .2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
                }}
              >
                Submit
              </Section>
            )}
          </Section>
        </Section>

        {/* Loading Indicator */}
        {loading && (
          <Section
            className="loading-indicator"
            position="absolute"
            bottomPos={20}
            color="tertiary"
            fontSize={20}
            textAlign="center"
            filter={`drop-shadow(0px 2px 4px ${palette.primary('.3')})`}
          >
            ...sending
          </Section>
        )}
      </Section>
    </Section>
  );
};
