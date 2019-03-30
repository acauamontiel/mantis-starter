import {src, dest} from 'gulp';
import newer from 'gulp-newer';
import {copy} from '../paths';
import {reload} from './serve';

export default function copyTask(done) {
	src(copy.src)
		.pipe(newer(copy.dest))
		.pipe(dest(copy.dest))
		.on('end', reload);

	done();
};
