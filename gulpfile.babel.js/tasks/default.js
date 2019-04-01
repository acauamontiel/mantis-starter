import {series} from 'gulp';
import buildTask from './build';
import {serveTask} from './serve';
import watchTask from './watch';
import readyTask from './ready';

export default series(serveTask, buildTask, watchTask, readyTask);
