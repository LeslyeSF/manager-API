/* eslint-disable no-useless-escape */
import Joi from 'joi';

const creditCardSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required(),
  lastPaymentDay: Joi.number().required().greater(0).less(32).integer(),
  gracePeriod: Joi.number().required().greater(0).less(11).integer(),
});

export default creditCardSchema;
