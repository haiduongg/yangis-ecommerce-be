const joi = require('joi')

const userValidate = (data) => {
    const userSchema = joi.object({
        username: joi.string(),
        email: joi
            .string()
            .pattern(RegExp('gmail.com'))
            .email()
            .lowercase()
            .required(),
        password: joi.string().min(6).max(32).required(),
        fullName: joi.string(),
        avatar: joi.string(),
        role: joi.string(),
    })
    return userSchema.validate(data)
}

const authValidate = (data) => {
    const userSchema = joi.object({
        username: joi.string(),
        email: joi.string().pattern(RegExp('gmail.com')).email().lowercase(),
        password: joi.string().min(6).max(32).required(),
    })
    return userSchema.validate(data)
}

module.exports = {
    userValidate,
    authValidate,
}
