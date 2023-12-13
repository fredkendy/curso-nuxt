//Middleware nomeado, no componente vue, colocar no script -> middleware: 'auth'
//Nesse exemplo, checar se user está logado ou não

//context: tem uma SÉRIE de propriedades, entre eles o 'redirect'
export default ({ redirect }) => {
    //console.log(context)

    //simulando um usuario logado. se nao estiver, manda pra raiz 
    const loggedIn = true;
    if (!loggedIn) {
        return redirect('/');
    }

    console.log('auth middleware');
}