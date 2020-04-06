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
$fieldHeight: 2.5rem !important;

button {
	border-radius: .75rem !important;
	border: none !important;
	background: #02c39a !important;
	height: 1 + $fieldHeight !important;
	width: 10rem !important;
	color: whitesmoke !important;
	font-size: 1.25rem !important;
	font-weight: bold !important;
	padding: .5rem !important;
	text-transform: capitalize !important;
}
button:hover {
	background-image: linear-gradient(150deg, #05668d, #02c39a) !important;
}
</style>
