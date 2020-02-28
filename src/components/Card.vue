<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: 'Card',
	components: {}
}
</script>

<style lang="scss">
.card {
	height: 20rem;
	width: 75%;
	background: #002f3f;
	border-radius: .75rem;
	padding: .5rem;
}
</style>
