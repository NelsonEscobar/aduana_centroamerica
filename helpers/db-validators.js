const DataPais = require('../models/datapais');
const DataGuatemala = require('../models/dataguatemala');
const DataCostaRica = require('../models/datacostarica')

const esDataPaisValido = async(paisqueejecuta = '') => {

    const existeDataPais = await DataPais.findOne({paisqueejecuta});
    if ( !existeDataPais ) {
        throw new Error(`El pais ${ paisqueejecuta } no está registrado en la BD`);
    }
}


const existeDataGuatemalaPorId = async( id ) => {

    // Verificar si el correo existe
    const existeDataGuatemala = await DataGuatemala.findById(id);
    if ( !existeDataGuatemala ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existeDataCostaRicaPorId = async( id ) => {

    const existeDataCostaRica = await DataCostaRica.findById(id);
    if ( !existeDataCostaRica ) {
        throw new Error(`El id no existe ${ id }`);
    }
}


module.exports = {
    esDataPaisValido,
    existeDataGuatemalaPorId,
    existeDataCostaRicaPorId
}

