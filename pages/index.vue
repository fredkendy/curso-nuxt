<template>
  <div>
    <pre>
      <!-- Variável global do Vue. Já imprime o valor de variáveis publicas definidas no nuxt.config -->
      {{ $config }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  created() {
    //retorna undefined, pois é privada
    console.log(this.$config.facebook_api_key)
  }
}
</script>
