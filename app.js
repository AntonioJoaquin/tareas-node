const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        console.log('Nueva tarea añadida al listado');

        break;
    case 'listar':
        let listado = porHacer.listar();

        for (let tarea of listado) {
            console.log('=====Tareas===='.green);
            console.log(colors.magenta(tarea.descripcion));
            console.log('Estado ', tarea.completado);
            console.log('==============='.green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;
    default:
        console.log("Comando no reconocido");
}