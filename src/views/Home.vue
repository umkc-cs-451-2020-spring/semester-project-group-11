<template>
	<div id="page">
		<div class="head">
			<h1>Home</h1>
		</div>

		<div class="cards">
			<card width="50%">
				<h2>Use Case</h2>
				<p>
					This is an application designed for college administrators to be able to add courses and professors to a schedule and verify if the schedule has any conflicts.
					You can add professors from the professor tab.  There you can specify if the professor has any scheduling criteria.  After that, you can go to the schedule tab to add and assign courses.
					From this page, you can also verify your schedule.  The primary goals was to make this app quick and easy for anyone to make use of.
				</p>
			</card>

			<card width="50%">
				<h2>User Notes</h2>
				<ul style="color: whitesmoke">
					<li>
						This app can save your schedule from previous sessions, but if you choose to delete your browsers local storage.
					</li>
					<li>
						Additionally, this app will not load previous data if you try to load the website in a private tab.
					</li>
				</ul>
			</card>

			<card width="50%">
				<h2>Source Code</h2>
				<a href="https://github.com/umkc-cs-451-2020-spring/semester-project-group-11/tree/app">Reports</a><br>
				<a href="https://github.com/umkc-cs-451-2020-spring/semester-project-group-11/tree/app">V2 App Branch</a><br>
				<a href="https://github.com/umkc-cs-451-2020-spring/semester-project-group-11/tree/backend">V1 Backend Branch</a><br>
				<a href="https://github.com/umkc-cs-451-2020-spring/semester-project-group-11/tree/frontend">V1 Frontend Branch</a><br>
			</card>
		</div>
	</div>
</template>

<script>
import Card from "../components/Card"

export default {
	name: 'Home',
	components: {
		Card
	},
	data() {
		return {
		}
	}
}
</script>

<style lang="scss" scoped>
	.cards {
		*:first-child {
			margin: 0 auto;
		}
		* {
			margin: 1rem auto;
		}
	}
	p {
		color: whitesmoke;
	}
</style>
