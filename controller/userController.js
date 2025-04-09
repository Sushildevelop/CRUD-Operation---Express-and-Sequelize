const Joi = require('joi')
const { userSchema } = require('../middleware/userValidate')
const { userModel } = require('../model/userModel')


const createUser = async (req, res) => {
    try {

        // validate req
        const { error,value} = userSchema.validate(req.body)
        console.log(req.body);
        return
        
        // const emailExists = await userModel.findOne({ where: { email: value.email } });
        // if (emailExists) {
        //     return res.status(400).json({ message: 'Email already in use' });
        // }
        if (error) return res.status(400).json({ message: error.details[0].message })
        // const newUser = await userModel.create({
        //     email: value.email,
        // });

        const user = await userModel.create(req.body)
        // res.status(201).json({ message: 'User registered successfully', user: newUser });
        return res.status(201).json(user)

    } catch (error) {
        console.error(error)

        return res.status(400).json({ error: error.message })

    }

};

const getuser = async (req, res) => {
    try {

        const user = await userModel.findAll()
        return res.status(200).json(user)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: error.message })
    }

}

const getUserById = async (req, res) => {
    try {
        const user = await userModel.findByPk(req.params.id)

        return res.status(200).json(user)

    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: error.message })
    }

}
const updateUser = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body)
        if (error) return res.status(400).json({ message: error.details[0].message })

        const user = await userModel.findByPk(req.params.id)

        if (!user) return res.status(200).json({ error: "User not found" })

        await userModel.update(req.body);
        return res.status(200).json({ msg: "User Updated" })






    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: error.message })
    }

}
const deleteuser = async (req, res) => {

    try {
        const user = await userModel.findByPk(req.params.id)
        if (!user) return res.status(200).json({ error: "User not found" })

        await user.destroy()
        return res.status(200).json({ msg: "user table deleted" })
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: error.message })

    }

}

module.exports = { createUser, getuser, getUserById, updateUser, deleteuser }