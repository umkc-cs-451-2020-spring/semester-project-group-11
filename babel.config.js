module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset'
	],
	rules: [
		{
			test: /\.scss$/,
			use: [
				'vue-style-loader',
				'css-loader',
				'sass-loader'
			]
		}
	]
}
