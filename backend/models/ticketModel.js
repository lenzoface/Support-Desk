const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Пожалуйста выберите продукт'],
        enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad', 'Телефон на Android', 'Домашний интернет', 'Роутер', 'Другое']
    },
    description: {
        type: String,
        required: [true, 'Пожалуйста введи описание проблемы']
    },
    status: {
        type: String,
        required: true,
        enum: ['новый', 'открыт', 'закрыт'],
        default: 'новый'
    }
},
// Will have info about actions (time, date)
{
    timestamps: true,
})

module.exports = mongoose.model('Ticket', ticketSchema)