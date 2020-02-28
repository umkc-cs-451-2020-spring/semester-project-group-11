<template>
	<div id="home">
		<card></card>
	</div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
	name: 'Home',
	components: {
		Card
	}
}
</script>

<style lang="scss">
#home {
	padding: 2rem;
}
</style>
