const mongoose = require('mongoose');


const medicalSchema = new mongoose.Schema(
    {
        medicalConditions:{ type: String, required: true},
        medication: { type: String, required: true},
        alergies: { type: String, required: true},
        mentalHealth: { type: String, required: true}
    }
);

const Medical = mongoose.model('Medical', medicalSchema);

exports.Medical = Medical;
exports.medicalSchema = medicalSchema;