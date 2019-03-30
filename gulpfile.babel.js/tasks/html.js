import {src, dest} from 'gulp';
import {html} from '../paths.js';
import pug from 'gulp-pug';
import content from '../../content.json';

export default function htmlTask (done) {
	let stream = src(html.src)
		.pipe(pug({
			locals: content
		}))
		.pipe(dest(html.dest));

	done();
};
