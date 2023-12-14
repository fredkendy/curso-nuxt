<template>
    <div>
        <h1 class="text-lg font-bold">Produtos</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis recusandae magnam fuga temporibus deserunt exercitationem, rem impedit molestias vel autem tempora. Reprehenderit distinctio facilis laborum.</p>
        <NuxtLink to="/produtos/produto-a">Produto A | </NuxtLink>
        <NuxtLink to="/produtos/produto-b">Produto B | </NuxtLink>
        <NuxtLink to="/produtos/produto-c">Produto C</NuxtLink>

        <div v-for="product in products" :key="product.id" class="border-b border-grey py-3">
            {{ product.title }}
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    
    //asyncData: roda no lado do cliente e servidor. Executado antes do componente ser executado (sem acesso ao this)
    //fazer conexões ajax, via server-side e qdo troca de rotas
    //tudo que retornar, é mesclado com o data()
    //tbm recebe o context (como nos middlewares) e dentro tem a propriedade axios
    async asyncData({ $axios }) {
        const products = await $axios.$get('posts?_limit=3')
        return {
            products
        }
    }
}
</script>
