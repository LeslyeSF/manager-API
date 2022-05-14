import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().required(),
  birthday: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string(),
  cpf: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

const userLoginSchema = Joi.object({
  user: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

export { userSchema, userLoginSchema };
