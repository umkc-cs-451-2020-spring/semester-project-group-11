<template>
	<div id="page">
		<h1>Home</h1>
		<schedule></schedule>
	</div>
</template>

<script>

import Schedule from '@/components/Schedule.vue'

export default {
	name: 'Home',
	components: {
		Schedule
	},
	data() {
		return {
			professors: [
				{
					name: 'Hare',
				},
				{
					name: 'Bingham',
				},
				{
					name: 'Kuhail',
				},
				{
					name: 'Roa',
				}
			]
		}
	}
}
</script>

<style lang="scss">
</style>
