import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import pugLinter from 'gulp-pug-linter';
import pugLintStylish from 'puglint-stylish';
import {prod} from '../index';
import {html} from '../paths';
import content from '../../content.json';
import {reload} from './serve';

export default function htmlTask (done) {
	if (!prod) {
		src(html.watch)
			.pipe(pugLinter({
				reporter: pugLintStylish
			}));
	}

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
