const  { response, request } = require('express');


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

const estudiantesPost = (req, res = response)=> {
    res.json({
        msg: 'Manolete post-controlador'
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