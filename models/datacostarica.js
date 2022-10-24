const { Schema, model } = require("mongoose");

const DataCostaRicaSchema = Schema({
  codigo: {
    type: String,
    required: [true, "El codigo es obligatorio"],
    unique: true,
  },
  nombreproyecto: {
    type: String,
    required: [true, "El nombre del proyecto es obligatorio"],
  },
  paisqueejecuta: {
    type: String,
    required: true,
    emun:['El_Salvador', 'Costa_Rica', 'Guatemala', 'Nicaragua', 'Honduras']
  },
  fechacierre: {
    type: Date,
    required: [true, "La fecha de cierre es obligatoria"],
  },
});

DataCostaRicaSchema.methods.toJSON = function(){
  const{__v, ...datacostarica} = this.toObject();
  return datacostarica
}

module.exports = model("DataCostaRica", DataCostaRicaSchema);
