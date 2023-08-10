// ******** Import validation library *********$
const yup = require("yup");

// ===>  Valid schema for registration
const registerValidation = yup.object().shape({
  name: yup.string().required("Name is required."),
  userEmail: yup
    .string()
    .email("Please provide a valid email.")
    .required("Email is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters long.")
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number."
    ),
});

// ===> Valid schema for login
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
