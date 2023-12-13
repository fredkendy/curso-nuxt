<template>
    <div>
        <h1 class="text-lg font-bold">A empresa</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim qui eveniet adipisci aperiam quidem esse facere ullam exercitationem? Harum itaque incidunt maiores molestiae, magnam nostrum sapiente non facilis praesentium vero.</p>
    </div>
</template>

<script>
export default {
    name: '',

    //Middleware geral: aplicado a todos. definir no nuxt.config.tools

    //Middleware nomeado: declarar uma pasta na raiz do projeto
    middleware: 'auth',
    
    //Middleware anonima: Função que sempre será executada toda vez que entrar nesse rota
    // middleware() {
    //     console.log('middleware empresa')
    // },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
