const mongoose = require('mongoose');
const { medicalSchema } = require('./medical');


const childSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, minLength: 5, maxLength: 50 },
        lastName: { type: String, required: true, minLength: 5, maxLength: 50 },
        DOB: {type: Date, required: true},
        weight: {type: Number, required: true},
        height: {type: Number, required: true},
        gender: {type: String, required: true, minLength: 1},
        medicalRecord: {type: [medicalSchema]}
    }
)

const Child = mongoose.model('Child', childSchema);

exports.Child = Child;
exports.childSchema = childSchema;