import Joi from "joi";

const movieValidator = Joi.object({
    title: Joi.string().regex(/^[a-z A-Zа-яёЁіІЇї]{1,20}$/).required().messages({
        'string.pattern.base':'only letters. Min 1, max 20'
    })
});

export {movieValidator}