import Joi from "joi";

export const userValidator = Joi.object({
    // username: Joi.string()
    //     // .required()
    //     .messages({
    //         "string.pattern.base": "you dont match to pattern",
    //         "any.required": "field is required",
    //     }),
    password: Joi.string().min(3).max(6).messages({
        "string.min": "password must be at least 3 characters",
        "string.max": "password must be no longer 6 characters",
    }),
    ch_pass:Joi.ref('password'),
    age: Joi.number().min(0).max(121).messages({
        "number.min": "age must be at least 0",
        "number.max": "age must be at least 121",

    }),
    email:Joi.string().email()
});
