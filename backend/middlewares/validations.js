const yup = require("yup");

const registerValidation = yup.object().shape({
  name: yup.string().required("Name is required."),
  userEmail: yup
    .string()
    .email("Please provide a valid email.")
    .required("Email is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long."),
});

const loginValidation = yup.object().shape({
  userEmail: yup
    .string()
    .email("Please provide a valid email.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
});

module.exports = {
  registerValidation,
  loginValidation,
};
