const yup = require("yup");

const registerValidation = yup.object().shape({
  name: yup.string().required("The name is mandatory."),
  userEmail: yup
    .string()
    .email("Please provide a valid email.")
    .required("The email is mandatory."),
  password: yup
    .string()
    .required("the password is mandatory.")
    .min(8, "The password must be at least 8 characters long."),
});

const loginValidation = yup.object().shape({
  userEmail: yup
    .string()
    .email("Please provide a valid email.")
    .required("The email is mandatory."),
  password: yup.string().required("The password is mandatory."),
});

module.exports = {
  registerValidation,
  loginValidation,
};
