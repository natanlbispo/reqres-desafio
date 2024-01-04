import Joi from 'joi';

const createSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    job: Joi.string().required(),
    createdAt: Joi.string().required(),
});

export default createSchema;