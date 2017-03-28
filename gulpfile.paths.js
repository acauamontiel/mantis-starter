var path = {
	src: './src/',
	dest: './public/'
};

path.html = {
	watch: `${path.src}html/**/*.pug`,
	src: `${path.src}html/*.pug`,
	dest: path.dest
};

path.css = {
	watch: `${path.src}css/**/*.styl`,
	src: `${path.src}css/style.styl`,
	dest: `${path.dest}css/`
};

path.js = {
	watch: `${path.src}js/**/*.js`,
	src: `${path.src}js/app.js`,
	dest: `${path.dest}js/`
};

path.img = {
	watch: [
		`${path.src}img/**`,
		`!${path.src}img/sprite{,/**/*}`,
	],
	src: [
		`${path.src}img/**`,
		`!${path.src}img/sprite{,/**/*}`,
	],
	dest: `${path.dest}img/`
};

path.sprite = {
	watch: `${path.src}img/sprite/*.svg`,
	src: `${path.src}img/sprite/*.svg`,
	dest: `${path.dest}img/`
};

path.copy = {
	watch: `${path.src}copy/**/*`,
	src: `${path.src}copy/**`,
	dest: path.dest
}

export default path;
