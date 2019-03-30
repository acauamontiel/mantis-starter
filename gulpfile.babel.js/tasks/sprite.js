import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import svgSymbols from 'gulp-svg-symbols';
import rename from 'gulp-rename';
import {sprite} from '../paths';
import {reload} from './serve';

export default function spriteTask (done) {
	src(sprite.src)
		.pipe(plumber())
		.pipe(svgSymbols({
			templates: ['default-svg'],
			transformData: function (svg, defaultData, options) {
				return {
					id: svg.originalAttributes.id || svg.id
				}
			}
		}))
		.pipe(rename('sprite.svg'))
		.pipe(dest(sprite.dest))
		.on('end', reload);

	done();
};
