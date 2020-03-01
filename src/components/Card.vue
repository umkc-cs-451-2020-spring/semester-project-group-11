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
			default: '10rem'
		}
	},

	mounted() {
		console.log(this.width)
		console.log(this.stylish)
	},

	computed: {
		stylish() {
			return {
				width: this.width,
				height: this.height
			}
		}
	}
}
</script>

<style lang="scss">
.card {
	min-height: 1rem;
	min-width: 1rem;
	background: #002f3f;
	border-radius: .75rem;
	padding: .5rem;
}
</style>
