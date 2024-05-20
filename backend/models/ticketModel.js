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
        enum: ['iPhone', 'Телефон на Android', 'Домашний интернет', 'Macbook Pro', 'Роутер', 'iMac', 'iPad',  'Другое']
    },
    description: {
        type: String,
        required: [true, 'Пожалуйста введите описание проблемы']
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    }
},
// Will have info about actions (time, date)
{
    timestamps: true,
})

module.exports = mongoose.model('Ticket', ticketSchema)