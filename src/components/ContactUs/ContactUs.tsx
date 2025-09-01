import { ContactUs_component, Title_ContactUs } from "./styles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LOGIN_FORM_VALUES } from "./types";

function ContactUs() {
  const validationSchema = Yup.object().shape({
    [LOGIN_FORM_VALUES.FULLNAME]: Yup.string()
      .required("Full name field is required")
      .min(3, "Full name field should contain minimum 3 characters")
      .max(50, "Full name field should contain maximum 50 characters"),
    [LOGIN_FORM_VALUES.PHONE]: Yup.string()
      .required("Phone field is required")
      .min(4, "Phone field should contain minimum 4 characters")
      .max(20, "Phone field should contain maximum 20 characters"),
    [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
      .email("This field should be in email format")
      .min(6, "Email field should contain minimum 6 characters")
      .max(60, "Email field should contain maximum 60 characters"),
  });

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_VALUES.FULLNAME]: "",
      [LOGIN_FORM_VALUES.PHONE]: "",
      [LOGIN_FORM_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log(values);
      console.log(helpers);
    },
  });

  return (
    <ContactUs_component onSubmit={formik.handleSubmit}>
      <Title_ContactUs>Contact us</Title_ContactUs>
      <Input
        label="Full name*"
        name={LOGIN_FORM_VALUES.FULLNAME}
        placeholder="Your full name"
        id="fullName-id"
        value={formik.values[LOGIN_FORM_VALUES.FULLNAME]}
        onChange={formik.handleChange}
        error={formik.errors[LOGIN_FORM_VALUES.FULLNAME]}
      />

      <Input
        label="Phone*"
        name={LOGIN_FORM_VALUES.PHONE}
        type="password"
        placeholder="Your phone number"
        id="password-id"
        value={formik.values[LOGIN_FORM_VALUES.PHONE]}
        onChange={formik.handleChange}
        error={formik.errors[LOGIN_FORM_VALUES.PHONE]}
      />

      <Input
        label="Email"
        name={LOGIN_FORM_VALUES.EMAIL}
        placeholder="Your email"
        id="email-id"
        value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
        onChange={formik.handleChange}
        error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
      />

      <Button buttonName="SEND REQUEST" type="submit" />
    </ContactUs_component>
  );
}
export default ContactUs;
