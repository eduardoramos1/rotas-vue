<template>
    <div class="usuario-editar">
        <h3>Usuario Editar</h3>
        <p><strong>Código:  {{ id }}</strong></p>
        <p><strong>Completo:  {{ $route.query.completo }}</strong></p>
        <p><strong>Lingua:  {{ $route.query.lingua }}</strong></p>
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>

<style>

</style>