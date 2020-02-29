<template>
	<div id="formfields">
		<form>
			<input type="text" placeholder="Username">
			<input type="password" placeholder="Password">
			<dropdown :options="dropdownOptions">
			</dropdown>
			<div class="button-group">
				<button>CANCEL</button>
				<button type="submit">SUBMIT</button>
			</div>
		</form>
	</div>
</template>

<script>
import Dropdown from '../components/Dropdown.vue'

export default {
	name: 'FormFields',
	components: {
		Dropdown
	},
	data() {
		return {
			dropdownOptions: [
				{
					name: 'Hello',
					code: 1
				},
				{
					name: 'World',
					code: 2
				}
			]
		}
	}
}
</script>

<style lang="scss">
$fieldHeight: 2.5rem;

#formfields {
	padding: 2rem;
	margin: auto;
	form {
		display: grid;
		grid-gap: 1rem;
		width: min-content;

		input {
			color: whitesmoke;
			border-radius: .5rem;
			border-color: transparent;
			border-style: solid;
			background: #002f3f;
			width: 30rem;
			height: $fieldHeight;
			padding: .5rem 2rem;
			font-size: 1.5rem;
		}
		input:focus {
			outline-offset: 0;
			border-color: #02c39a;
			border-radius: .5rem;
		}
		select {
			color: whitesmoke;
			border-radius: .5rem;
			border-color: transparent;
			border-style: solid;
			background: #002f3f;
			width: 30rem;
			height: 1 + $fieldHeight;
			padding: .5rem 2rem;
			font-size: 1.5rem;
		}
		select:focus {
		}
		.button-group {
			display: flex;
			justify-content: space-between;
		}
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
	}
}
</style>
