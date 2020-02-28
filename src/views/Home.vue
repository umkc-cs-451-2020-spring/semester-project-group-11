<template>
	<div id="home">
		<div class="card"></div>
		<div class="card"></div>
		<div class="card"></div>
		<div class="card"></div>
		<div class="card"></div>
		<div class="card"></div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {}
}
</script>

<style lang="scss">
$blue-3: #115173;

#home {
	padding: 2rem;
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 1rem;
	justify-content: space-evenly;
}
.card {
	width: 20rem;
	height: 30rem;
	background: $blue-3;
	border-radius: .75rem;
}
</style>
