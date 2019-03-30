import {watch, series} from 'gulp';
import * as path from '../paths';
import htmlTask from './html';

const tasks = {
	htmlTask
};

function watcher(type) {
	watch(path[type].watch, tasks[`${type}Task`]);
};

export default function watchTask(done) {
	watcher('html');
	done();
};
