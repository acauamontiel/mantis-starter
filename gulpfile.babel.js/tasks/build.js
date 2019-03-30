import {parallel} from 'gulp';
import htmlTask from './html';
import copyTask from './copy';

export default parallel(htmlTask, copyTask);
