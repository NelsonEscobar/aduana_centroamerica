const { Schema, model } = require('mongoose');

const DataPaisSchema = Schema({
    paisqueejecuta: {
        type: String,
        required: [true, 'El pais es obligatorio']
    }
});


module.exports = model( 'Pais', DataPaisSchema );