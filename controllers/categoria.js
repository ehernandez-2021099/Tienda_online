const { response, request } = require('express');
const bcrypt = require('bcryptjs');
// Importacion de modelo
const Categoria = require('../models/categoria');




const getCategorias = async (req = request, res = response) => {
    //condiciones del get

    const query = { estado: true };

    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
        // .skip (Number (desde))        // .limit(Number(limite))         
    ]);

    res.json({
        msg: 'get Api - Controlador Categorias',
        listaCategoria
    });
}




const postCategorias = async (req = request, res = response) => {
    // se guarda como objeto
    // const usuario = req.body;
    //Desestructuración
    //Esto es una peticion
    const { nombre, tipo, pasillo, estado } = req.body;
    const categoriaGuardado = new Categoria({ nombre, tipo, pasillo, estado });
    // Encriptando la contrase;a del user
    //nombre, correo, password, rol
    await categoriaGuardado.save();

    res.json({
        msg: 'Post Api - Post categoria',
        nombre,
        tipo,
        pasillo,
        estado
    });
}


const putCategoria = async (req = request, res = response) => {

    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;
    const { _id, img, estado, ...fin } = req.body;
    
    //editar al usuario por el id

    const categoriaEditado = await Categoria.findByIdAndUpdate(id, fin);
    res.json({
        msg: 'PUT editar Categoria',
        id,
        categoriaEditado
    });
}

const deleteCategoria = async(req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;

    //Eliminar fisicamente de la BD
        const categoriaEliminado =await Categoria.findByIdAndDelete(id);
        // const usuarioEliminado =await usuario.findByIdAndDelete(id,{estado:false});

    

    res.json({
        msg: 'DELETE eliminar categoria',
        categoriaEliminado
    });
}

module.exports = {
    getCategorias,
    postCategorias,
    putCategoria,
    deleteCategoria
}


// CONTROLADOR