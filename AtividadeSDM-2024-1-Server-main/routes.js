import frutas from "./controllers/frutas.js"
import filmes from"./controllersfilmes.js"
// Criar todas as rotas e cruds para as entidades
function addRoutes(app) {
    frutas(app)
    filmes(app)
}

export default addRoutes;