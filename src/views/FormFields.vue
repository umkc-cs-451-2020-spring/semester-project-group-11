<template>
	<div id="formfields">
		<form>
			<input type="text" placeholder="Username">
			<input type="password" placeholder="Password">
			<div class="button-group">
				<button>CANCEL</button>
				<button type="submit">SUBMIT</button>
			</div>
		</form>
	</div>
</template>

<script>


export default {
	name: 'FormFields',
	components: {
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
