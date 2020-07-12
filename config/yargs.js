const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    }
};

const completado = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completada o pendiente una tarea'
    }
};


const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea', descripcion)
    .command('actualizar', 'Actualiza una tarea creada', {
        descripcion,
        completado
    })
    .command('borrar', 'Boora una tarea del listado', descripcion)
    .help()
    .argv;


module.exports = {
    argv
};