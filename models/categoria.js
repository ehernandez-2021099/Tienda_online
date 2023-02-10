const{Schema,model } = require('mongoose');

const CategoriaSchema = Schema({
    // formato json
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    tipo:{
        type: String,
        required: [true, 'La categoria es obligatoria'],
        
    },
    pasillo:{
        type: String,
        required: [true, 'El password es obligatorio']
    },
    img:{
        type: String,

    },   
    estado:{
        type: Boolean,
        default: true, 
    }
    

})

module.exports = model('Categoria',CategoriaSchema);