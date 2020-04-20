<template>
	<div class="card" :style="stylish">
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: 'Card',
	components: {},
	props: {
		width: {
			default: '100%'
		},
		height: {
			default: 'auto'
		},
		background: {
			default: '#011f2b'
		}
	},

	mounted() {
	},

	computed: {
		stylish() {
			return {
				width: this.width,
				height: this.height,
				background: this.background
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	min-height: 1rem;
	min-width: 1rem;
	border-radius: .75rem;
	padding: .5rem;
}
</style>
