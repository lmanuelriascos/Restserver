const  { response, request } = require('express');

const Estudiante = require('../models/estudiante');


const estudiantesGet =(req = request, res = response)=>  {

    const query = req.query;
    const body = req.body;
    res.json({
        msg: 'Manolete get-controlador',
        query
    });

}

const estudiantesPut = (req, res = response)=> {

    const { id } = req.params;

    res.json({
        msg: 'Manolete put-controlador',
        id
    });

}

const estudiantesPost = async(req, res = response)=> {

    const body =req.body;
    const estudiante = new Estudiante (body);

    await estudiante.save();
    res.json({
        msg: 'Manolete post-controlador',
        estudiante
    });

}

const estudiantesDelete = (req, res = response)=> {
    res.json({
        msg: 'Manolete delete'
    });

}


module.exports = {
    estudiantesGet,
    estudiantesPut,
    estudiantesPost,
    estudiantesDelete,
}