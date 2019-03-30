import {parallel} from 'gulp';
import htmlTask from './html';
import cssTask from './css';
import copyTask from './copy';

export default parallel(htmlTask, cssTask, copyTask);
