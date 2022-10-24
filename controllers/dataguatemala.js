const { response, request } = require("express");

const DataGuatemala = require("../models/dataguatemala");

const dataguatemalaGet = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [nombre, carnet, total, dataguatemala] = await Promise.all([
    (this.nombre = "Nelson Gerardo Escobar López"),
    (this.carnet = "25-3884-2016"),
    DataGuatemala.countDocuments(query),
    DataGuatemala.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    nombre,
    carnet,
    total,
    dataguatemala,
  });
};

const dataguatemalaPost = async (req, res = response) => {
  const { codigo, nombreproyecto, monto } = req.body;
  let fecha = new Date();

  (nombre = "Nelson Gerardo Escobar López"), 
  (carnet = "25-3884-2016");

  const dataguatemala = new DataGuatemala({ codigo, nombreproyecto, monto, fecha });
  await dataguatemala.save();

  res.json({
    nombre,
    carnet,
    dataguatemala,
  });
};

const dataguatemalaPut = async (req, res = response) => {
  const { id } = req.params;
  const { codigo, nombreproyecto, monto } = req.body;

  (nombre = "Nelson Gerardo Escobar López"), 
  (carnet = "25-3884-2016");

  const dataguatemala = await DataGuatemala.findByIdAndUpdate(id, {
    codigo,
    nombreproyecto,
    monto,
  });

  res.json({ nombre, carnet, dataguatemala });
};

const dataguatemalaDelete = async (req, res = response) => {
  const { id } = req.params;

  (nombre = "Nelson Gerardo Escobar López"), 
  (carnet = "25-3884-2016");

  const dataguatemala = await DataGuatemala.findByIdAndDelete(id);

  res.json({ nombre, carnet, dataguatemala });
};

module.exports = {
  dataguatemalaGet,
  dataguatemalaPost,
  dataguatemalaPut,
  dataguatemalaDelete

};
