/* eslint-disable no-useless-escape */
import Joi from 'joi';

const bankAccountSchema = Joi.object({
  bankName: Joi.string().required(),
  accountNumber: Joi.string().required(),
  amount: Joi.number().required(),
});

export default bankAccountSchema;
