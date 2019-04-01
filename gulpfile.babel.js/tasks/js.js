import {src, dest} from 'gulp';
import eslint from 'gulp-eslint';
import bro from 'gulp-bro';
import gif from 'gulp-if';
import uglify from 'gulp-uglify';
import babelify from 'babelify';
import {prod} from '../index';
import {js} from '../paths';
import {reload} from './serve';

export default function jsTask (done) {
	if (!prod) {
		src(js.watch)
			.pipe(eslint())
			.pipe(eslint.format());
	}

	src(js.src)
		.pipe(bro({
			transform: [
				babelify.configure()
			]
		}))
		.pipe(gif(prod, uglify()))
		.pipe(dest(js.dest))
		.on('end', reload);

	done();
};
