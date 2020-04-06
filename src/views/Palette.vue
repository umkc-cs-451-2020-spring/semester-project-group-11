<template>
	<div id="page">
		<div class="box-container">
			<div class="box" style="background: #002f3f; color: white">#002f3f</div>
			<div class="box" style="background: #05668d; color: white">#05668d</div>
			<div class="box" style="background: #02c39a; color: white">#02c39a</div>
			<div class="box" style="background: #ffd700; color: white">#ffd700</div>
		</div>


		<div class="grid-container">
			<div class="card" style="background: #002f3f">
				<h1 style="color: #02c39a">Title</h1>
				<p><span style="color: #406473">The quick brown fox </span><span style="color: #02c39a"> jumps  </span><span style="color: #406473">over the lazy dog</span></p>
			</div>
			<div class="card" style="background: #002f3f">
				<h1 style="color: #05668d">Title</h1>
				<p><span style="color: #406473">The quick brown fox </span><span style="color: #02c39a"> jumps  </span><span style="color: #406473">over the lazy dog</span></p>
			</div>

			<div class="card" style="background: #002f3f">
				<h1 style="color: #02c39a">Title</h1>
				<p><span style="color: #406473">The quick brown fox </span><span style="color: #ffd700"> jumps  </span><span style="color: #406473">over the lazy dog</span></p>
			</div>
		</div>

	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Palette',
	components: {}
}
</script>

<style lang="scss" scoped>
$blue-3: #115173;

.grid-container {
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 1rem;
	.card {
		width: 20rem;
		height: 30rem;
		background: white;
		border-radius: .75rem;
		padding: .5rem;
	}
}

.box-container {
	width: 100%;
	justify-content: flex-start;
	display: inline-flex;
	margin-bottom: 1rem;
	.box {
		width: 10rem;
		height: 10rem;
	}
}
</style>
