import {watch, series} from 'gulp';
import * as path from '../paths';
import htmlTask from './html';
import copyTask from './copy';

const tasks = {
	html: htmlTask,
	copy: copyTask
};

function watcher(type, task) {
	watch(path[type].watch, task);
};

export default function watchTask(done) {
	let keys = Object.keys(tasks),
		i;

	for (i = 0; i < keys.length; i++) {
		watcher(keys[i], tasks[keys[i]]);
	}

	done();
};
