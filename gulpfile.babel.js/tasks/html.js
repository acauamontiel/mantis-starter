import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import {prod} from '../index';
import {html} from '../paths';
import content from '../../content.json';
import {reload} from './serve';

export default function htmlTask (done) {
	src(html.src)
		.pipe(plumber())
		.pipe(pug({
			pretty: !prod,
			locals: content
		}))
		.pipe(dest(html.dest))
		.on('end', reload);

	done();
};
