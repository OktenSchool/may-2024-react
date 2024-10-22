import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi.string()
        .pattern(/\w{3,}/)
        .messages(
            {"string.pattern.base": "you dont match to pattern"}
        ),
    body: Joi.string().min(3).messages(
        {"string.min": "password must be at least 3 characters"}
    ),
    userId: Joi.number().min(1).messages(
        {"number.min": "age must be at least 0",}),
});
