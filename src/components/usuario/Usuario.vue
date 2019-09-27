<template>
	<div class="usuario">
		<h2>Usuarios</h2>
		<router-view></router-view>
		<button sucesso @click="irParaInicio">Voltar</button>
	</div>
</template>

<script>
export default {

	methods: {
		irParaInicio() {
			// Quando essa função é usada, o browser irá para a rota "/"
			this.$router.push("/")
		}
	}
}
</script>

<style>

</style>