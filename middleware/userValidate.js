const Joi=require('joi');

const { userModel } = require('../model/userModel');

// function emailExistsInDatabase(email) {
//     const user = userModel.findOne({ where: { email } });
//     return user !== null;  // Returns true if the email exists, false otherwise
//   }
const userSchema=Joi.object({
    firstName: Joi.string()
    .min(3)
    .max(30)
    .required(),
    lastName: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    // email: Joi.string().custom((value, helpers) => {
    //     // Check if the email already exists in the database
    //     const emailExists =  emailExistsInDatabase(value);
    //     if (emailExists) {
    //       return helpers.message('This email address is already in use.');
    //     }
    //     return value; // Return value if the email does not exist in the database
    //   }),
        
    email: Joi.string().email({ tlds: { allow: false } }).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
    password:Joi.string().min(6).required(),
    age:Joi.number().integer().min(0).required(),
    mobile:Joi.string().required(),
    isActive: Joi.boolean().default(true)
})

module.exports={userSchema}