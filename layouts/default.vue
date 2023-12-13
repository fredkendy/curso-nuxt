<template>
    <div>
        <div class="bg-gray-100">
            <div class="container mx-auto space-x-4 flex items-center h-10 mb-5">
                <!-- 2 opções para fazer uma rota, objeto ou path -->
                <NuxtLink :to="{ name: 'a-empresa' }">A empresa</NuxtLink> 
                <NuxtLink to="/servicos">Serviços</NuxtLink> 
                <NuxtLink to="/produtos">Produtos</NuxtLink>
            </div>
        </div>
        <div class="container mx-auto">
            <!-- ONDE O CONTEUDO SERÁ "DINAMICO" -->
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    }
}
</script>