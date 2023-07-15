//Call validation library yup
const yup = require("yup");

//Validatiion rules for user registration
const registerValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

//Validatiion rules for user login
const loginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

//export validation to use then inside routes
module.exports = {
  registerValidation,
  loginValidation,
};

//custumize validations rules if required later on...
