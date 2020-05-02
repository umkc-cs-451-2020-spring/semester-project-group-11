<template>
	<div class="custom-select-wrapper">
		<div class="custom-select">
			<div class="custom-select__trigger">
				<span class="placeholder">{{placeholder}}</span>
				<div class="arrow">
			</div>
		</div>
		<div class="custom-options">
			<span v-for="(option, index) in options" :key="index" :data-value="option.code" class="custom-option">
				{{option.name}}
			</span>
		</div>
	</div>
	</div>
</template>

<script>

export default {
	name: 'Dropdown',
	components: {},
	props: {
		options: {
			required: true
		},
		placeholder: {
			default: 'Select...'
		},
		value: {
			default: null
		}
	},

	mounted() {
		let self = this

		document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
			this.querySelector('.custom-select').classList.toggle('open')
		})

		for (const option of document.querySelectorAll(".custom-option")) {
			option.addEventListener('click', function() {
				if (option.parentNode.querySelector('.custom-option.selected'))
					option.parentNode.querySelector('.custom-option.selected').classList.remove('selected')

				// Select element option
				option.classList.add('selected');
				option.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent
				option.closest('.custom-select').querySelector('.custom-select__trigger span').classList.remove('placeholder')

				self.updateCode(option.getAttribute('data-value'))
			})
		}

		window.addEventListener('click', function(e) {
			const select = document.querySelector('.custom-select')
			if (!select.contains(e.target)) {
				select.classList.remove('open');
			}
		});
	},

	methods: {
		updateCode(code) {
			const option = this.options.filter((option) => {
				console.log(option.code, code, option)
				return option.code === parseInt(code)
			})[0]

			this.$emit("input", option)
		}
	}
}
</script>

<style lang="scss" scoped>
.placeholder {
	color: rgb(64, 100, 115)
}
.custom-select-wrapper {
	position: relative;
	user-select: none;
	width: 34.25rem;
}
 .custom-select {
	position: relative;
	display: flex;
	flex-direction: column;
	border: none;
    width: 88%;
}
 .custom-select__trigger {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 22px;
	font-size: 20px;
	font-weight: 300;
	color: #3b3b3b;
	height: 60px;
	line-height: 60px;
	background: #002f3f;
	cursor: pointer;
	border-radius: .5rem;
	padding: 0 2rem;
	font-size: 1.5rem;
	color: whitesmoke;
}
 .custom-options {
	position: absolute;
	display: block;
	top: 100%;
	left: 0;
	right: 0;
	border: 2px solid #02c39a;
	border-top: 0;
	background: #002f3f;
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	z-index: 2;
}
.custom-select.open {
	margin-top: -2px;
	.custom-select__trigger {
		border-width: 2px 2px 0 2px;
		border-style: solid;
		border-color: #02c39a;
		border-radius: .5rem .5rem 0 0;
		padding: 0 30px;
	}
}
.custom-select.open .custom-options {
	opacity: 1;
	visibility: visible;
	pointer-events: all;
}
 .custom-option {
	position: relative;
	display: block;
	padding: 0 22px 0 22px;
	font-size: 22px;
	font-weight: 300;
	color: #3b3b3b;
	line-height: 60px;
	cursor: pointer;
	transition: all 0.5s;
	padding: 0 2rem;
	font-size: 1.5rem;
	color: whitesmoke;
}
 .custom-option:hover {
	cursor: pointer;
	color: #ffd700;
}
 .custom-option.selected {
	color: #02c39a;
}
// ARROW
.arrow {
	position: relative;
	height: 15px;
	width: 15px;
}
 .arrow::before, .arrow::after {
	content: "";
	position: absolute;
	bottom: 0px;
	width: 0.15rem;
	height: 100%;
	transition: all 0.5s;
}
 .arrow::before {
	left: -5px;
	transform: rotate(45deg);
	background: #02c39a
}
 .arrow::after {
	left: 5px;
	transform: rotate(-45deg);
	background: #02c39a
}
 .open .arrow::before {
	left: -5px;
	transform: rotate(-45deg);
}
 .open .arrow::after {
	left: 5px;
	transform: rotate(45deg);
}

</style>
