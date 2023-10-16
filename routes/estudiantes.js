
const { Router} = require('express');
const { estudiantesGet,estudiantesPut,
    estudiantesPost,estudiantesDelete } = require('../controllers/estudiantes');

const router = Router();

router.get('/',estudiantesGet);

router.put('/:id', estudiantesPut);

router.post('/', estudiantesPost );

router.delete('/', estudiantesDelete );


module.exports = router;