//tbm recebe o context, inject
export default (context, inject) => {
    //inject('name', 'Jon') //2 parametros: nome e valor da variavel
    //console.log(context)
    //Posso injetar funções
    inject('name', (name) => `Olá ${name}`)
}