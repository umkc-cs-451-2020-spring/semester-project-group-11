<template>
	<button>
		<slot></slot>
	</button>
</template>

<script>

export default {
	name: 'Card',
	components: {}
}
</script>

<style lang="scss">
$fieldHeight: 2.5rem;

button {
	border-radius: .75rem;
	border: none;
	background: #02c39a;
	height: 1 + $fieldHeight;
	width: 10rem;
	color: whitesmoke;
	font-size: 1.25rem;
	font-weight: bold;
	padding: .5rem;
}
button:hover {
	background-image: linear-gradient(150deg, #05668d, #02c39a);
}
</style>
