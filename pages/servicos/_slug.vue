<!-- Slug é o parametro passado na url. _ indica que no arquivo é passado parametro -->
<template>
    <div>
        Slug: {{ $route.params.slug }}
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