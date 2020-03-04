<template>
	<div style="display: inline-flex; overflow: auto; justify-content: space-between; width: 100%">
		<card  v-for="(time, index) in times" :key="index" width="10rem" height="80vh">
			<h1>{{ time.name }}</h1>
			<div v-for="(course, index) in timeCourses(time)" :key="index">
				{{ course.professor }} | {{ course.room }}
			</div>
		</card>
	</div>
</template>

<script>

class Course
{
	constructor(professor, room, time)
	{
		this.professor = professor
		this.room = room
		this.time = time
	}

}

class Time
{
	constructor(name)
	{
		this.name = name
	}
}

import Card from '@/components/Card.vue'


export default {
	components: {
		Card
	},

	data() {
		return {
			courses: [
				new Course('Hare', 'Hagg 206', '1P'),
				new Course('Bingham', 'Royal 305', '4P'),
				new Course('Hare', 'Flarshiem 110', '3P')
			],
			times: [
				new Time('10A'),
				new Time('11A'),
				new Time('12P'),
				new Time('1P'),
				new Time('2P'),
				new Time('3P'),
				new Time('4P'),
				new Time('5P'),
				new Time('6P')
			]
		}
	},

	methods: {
		timeCourses(time)
		{
			return this.courses.filter(course => course.time === time.name)
		}
	}
}
</script>

<style lang="scss" scoped>
</style>