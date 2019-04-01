import {src, dest} from 'gulp';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';
import {img} from '../paths';
import {reload} from './serve';

export default function imgTask (done) {
	src(img.src)
		.pipe(newer(img.dest))
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true}),
			imagemin.gifsicle({interlaced: true}),
			imagemin.svgo({
				multipass: true,
				plugins: [
					{removeUselessDefs: false},
					{removeHiddenElems: false},
					{removeViewBox: false},
					{cleanupIDs: false}
				]
			})

		]))
		.pipe(dest(img.dest))
		.on('end', reload);

	done();
};
