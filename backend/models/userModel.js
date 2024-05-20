const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Пожалуйста введите имя']
    },
    email: {
        type: String,
        required: [true, 'Пожалуйста введите email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Пожалуйста добавьте пароль']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
// Will have info about actions (time, date)
{
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)