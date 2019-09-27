<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe:</h3>
        <hr>
        <p><strong>Código:  {{ id }}</strong></p>
		<router-link tag="button" primario :to="{ name : 'editarUsuario', params: { id },
			query: { completo: true, lingua: 'pt' } }">
			Editar
		</router-link>
    </div>
</template>

<script>
export default {
	props: ["id"], 
	data() {
		return {
			// para pegar o parâmetro passado na url
			// id: this.$route.params.id
		}
	}, 
	// watch: {
	// 	// para monitorar alterações na rota
	// 	$route(to, from) {
	// 		this.id = to.params.id
	// 	}
	// },
}
</script>

<style>

</style>