import db from '../config/db.js';

const filmeSchema = new db.Schema({
    nome: {
        type: String,
        require: true,
    },
    ano: {
        type: Date,
        required: true,
    },
    genero: {
        type: String,
        enum: ['TERROR', 'ROMANCE', 'COMEDIA'],
        required: true,
        default: 'COMEDIA',
    },
});

const Filme = db.model('Filme', filmeSchema);

export default Filme;
