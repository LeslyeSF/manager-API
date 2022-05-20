/* eslint-disable no-useless-escape */
import Joi from 'joi';

const transactionSchema = Joi.object({
  description: Joi.string().required(),
  amount: Joi.number().required(),
  type: Joi.string().valid(['input', 'output']).required(),
  categoryId: Joi.number().required().greater(0),
  creditCardId: Joi.number().greater(0),
  bankAccountId: Joi.number().greater(0),
});

export default transactionSchema;
