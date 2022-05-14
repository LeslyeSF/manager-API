/* eslint-disable no-useless-escape */
import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().required(),
  birthday: Joi.string().isoDate().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .length(14)
    .pattern(/\([0-9]{2}\)[0-9]{5}\-[0-9]{4}/),
  cpf: Joi.string()
    .length(14)
    .pattern(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/)
    .required(),
  password: Joi.string().min(8).required(),
});

const userLoginSchema = Joi.object({
  userData: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

export { userSchema, userLoginSchema };
