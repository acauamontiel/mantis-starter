import {src, dest} from 'gulp';
import {html} from '../paths.js';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import content from '../../content.json';

export default function htmlTask (done) {
	src(html.src)
		.pipe(plumber())
		.pipe(pug({
			pretty: !JSON.parse(process.env.PRODUCTION),
			locals: content
		}))
		.pipe(dest(html.dest));

	done();
};
