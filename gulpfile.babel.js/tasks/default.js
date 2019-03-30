import {series} from 'gulp';
import buildTask from './build';
import watchTask from './watch';
import readyTask from './ready';

export default series(buildTask, watchTask, readyTask);
