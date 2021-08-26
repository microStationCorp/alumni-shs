import Joi from "joi";

const RegisterAlumniSchema = Joi.object({
  full_name: Joi.array().items(
    Joi.string()
      .min(3)
      .max(15)
      .pattern(new RegExp("^[a-zA-z]{3,15}$"))
      .required()
      .label("Full Name")
      .messages({
        "string.pattern.base": "Invalid {{#label}}",
        "string.min": "{{#label}} must contain minimum 3 characters",
        "string.max": "{{#label}} must contain maximum 15 characters",
        "string.empty": "{{#label}} Cannot be empty",
        "string.trim": "{{#label}} has an extra whitespace before or after",
      })
  ),
  phone_number: Joi.string()
    .length(10)
    .required()
    .label("Phone Number")
    .pattern(new RegExp("^[0-9]{10}"))
    .messages({
      "string.pattern.base": "Invalid {{#label}}",
      "string.empty": "{{#label}} Cannot be empty",
      "string.length": "{{#label}} must contain 10 digits",
    }),
  email: Joi.string()
    .required()
    .label("Email Id")
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .messages({
      "string.email": "Invalid {{#label}}",
      "string.empty": "{{#label}} Cannot be empty",
    }),
  gender: Joi.string().required().label("Gender").messages({
    "string.empty": "please select {{#label}}",
  }),
  pass_out_year: Joi.string().required().label("Passout Year").messages({
    "string.empty": "please select {{#label}}",
  }),
});

export const RegisterAlumniValidation = (data) =>
  RegisterAlumniSchema.validate(data);
