//Importaciones
const { Router } = require('express');
const { getCategorias,  postCategorias, putCategoria, deleteCategoria } = require('../controllers/categoria');

const router = Router();


router.get('/mostrar', getCategorias);

router.post('/agregar',postCategorias);

router.put('/editar/:id',putCategoria);

router.delete('/eliminar/:id', deleteCategoria);


module.exports = router;


// ROUTES