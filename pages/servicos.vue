<!-- ARQUIVO ESQUELETO DO GRUPO DE ROTAS DE PRODUTOS, MESMO NOME DA PAGINA SERVICOS -->
<template>
    <div>
        <h1 class="text-lg font-bold">Serviços</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id vero aspernatur facilis fugiat error. Nemo nulla quas explicabo itaque.</p>
        <NuxtLink to="/servicos/desenvolvimento-de-sites">
            Desenvolvimento de Sites | 
        </NuxtLink>
        <NuxtLink to="/servicos/marketing-digital">
            Marketing Digital
        </NuxtLink>

        <br><br>

        <!-- AQUI VAI RENDERIZAR A ROTA FILHO -->
        <NuxtChild />
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
