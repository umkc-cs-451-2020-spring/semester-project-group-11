<template>
	<div id="page">
		<form>
			<input type="text" placeholder="Username">
			<input type="password" placeholder="Password">
			<textarea></textarea>
			<dropdown :options="dropdownOptions">
			</dropdown>
			<div class="button-group">
				<app-button>CANCEL</app-button>
				<app-button type="submit">SUBMIT</app-button>
			</div>
		</form>
	</div>
</template>

<script>
import Dropdown from '../components/Dropdown.vue'
import AppButton from '../components/AppButton.vue'

export default {
	name: 'FormFields',
	components: {
		Dropdown,
		AppButton
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

form {
	/*display: grid;*/
	/*grid-gap: 1rem;*/
	/*width: min-content;*/

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
	textarea {
		width: 30rem;
		height: 15rem;
		background: #002f3f;
		padding: .5rem 2rem;
		border-radius: .5rem;
		border-color: transparent;
		border-style: solid;
		font-size: 1.5rem;
	}
	textarea:focus {
		border: 2px solid #02c39a;
		color: whitesmoke;
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
}
</style>
