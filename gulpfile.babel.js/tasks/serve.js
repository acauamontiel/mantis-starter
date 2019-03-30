import browserSync from 'browser-sync';
import {dest} from '../paths';

const server = browserSync.create();

export const reload = server.reload;

export function serveTask(done) {
	server.init({
		server: {
			baseDir: dest
		}
	});
	done();
};
