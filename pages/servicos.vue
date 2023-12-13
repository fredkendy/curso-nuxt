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

        <pre>
            <!-- atributos: pending, error, timestamp -->
            <!-- {{ $fetchState }} -->
        </pre> 

        <div v-if="$fetchState.pending">
            Carregando...
        </div>

        <div v-else>
            <div v-for="service in services" :key="service.id" class="border-b border-grey-400 py-4">
                {{ service.username }}
            </div>
        </div>

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
            services: []
        }
    },
    
    //executado dps que o componente foi criado (tem acesso ao this, mas n tem ao context). busca apenas dps de carregar o componente
    //diferentemente do asyncData, não é mesclado com data(), precisa atribuir a sua rotina de código
    async fetch() {
        this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users?_limit=3')
    },

    //SEO
    head() {
        return {
            title: 'Serviços',
            meta: [
                //hid vai substituir a metatag declarada no nuxt.config.js, ao invés de duplicar
                { hid: 'description', name: 'description', content: 'Minha descrição do serviço' }
            ],
            //pode tb colocar atributos html
            bodyAttrs: {
                class: 'bg-grey-400'
            }
        }
    }
}
</script>
