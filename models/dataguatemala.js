const {Schema, model} = require('mongoose');

const DataGuatemalaSchema = Schema({
  codigo:{
    type: String,
    required: [true, 'El codigo es obligatorio'],
    unique: true
  },
  nombreproyecto:{
    type: String,
    required: [true, 'El nombre del proyecto es obligatorio'],
  },
  monto:{
    type: Number,
    required: [true, 'El monto es obligatorio'],
  },
  fecha:{
    type: Date,
    required: [true, 'La fecha es obligatoria'],
  },
});

DataGuatemalaSchema.methods.toJSON = function(){
  const{__v, ...dataguatemala} = this.toObject();
  return dataguatemala
}

module.exports = model( "DataGuatemala", DataGuatemalaSchema );