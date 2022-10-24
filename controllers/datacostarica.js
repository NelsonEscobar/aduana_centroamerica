const { response, request } = require("express");

const DataCostaRica = require("../models/datacostarica");

const datacostaricaGet = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [nombre, carnet, total, datacostaRica] = await Promise.all([
    (this.nombre = "Nelson Gerardo Escobar López"),
    (this.carnet = "25-3884-2016"),
    DataCostaRica.countDocuments(query),
    DataCostaRica.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    nombre,
    carnet,
    total,
    datacostaRica,
  });
};

const datacostaricaPost = async (req, res = response) => {
  const { codigo, nombreproyecto, paisqueejecuta } = req.body;
  let fechacierre = new Date();

  (nombre = "Nelson Gerardo Escobar López"), (carnet = "25-3884-2016");

  const datacostarica = new DataCostaRica({
    codigo,
    nombreproyecto,
    paisqueejecuta,
    fechacierre,
  });
  await datacostarica.save();

  res.json({
    nombre,
    carnet,
    datacostarica,
  });
};

const datacostaricaPut = async (req, res = response) => {
  const { id } = req.params;
  const { codigo, nombreproyecto, paisqueejecuta } = req.body;

  (nombre = "Nelson Gerardo Escobar López"), (carnet = "25-3884-2016");

  const datacostarica = await DataCostaRica.findByIdAndUpdate(id, {
    codigo,
    nombreproyecto,
    paisqueejecuta,
  });

  res.json({ nombre, carnet, datacostarica });
};

const datacostaricaDelete = async (req, res = response) => {
  const { id } = req.params;

  (nombre = "Nelson Gerardo Escobar Lópe"), (carnet = "25-3884-2016");

  const datacostarica = await DataCostaRica.findByIdAndDelete(id);

  res.json({ nombre, carnet, datacostarica });
};

module.exports = {
  datacostaricaGet,
  datacostaricaPost,
  datacostaricaPut,
  datacostaricaDelete,
};
