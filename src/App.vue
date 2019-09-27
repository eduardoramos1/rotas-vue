<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<transition
			enter-active-class="animated bounceInLeft"
			leave-active-class="animated bounceOutLeft" mode="out-in">
			<router-view name="menu"></router-view>
			<router-view></router-view>			
		</transition>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
