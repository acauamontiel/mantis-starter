import {parallel} from 'gulp';
import htmlTask from './html';
import cssTask from './css';
import imgTask from './img';
import spriteTask from './sprite';
import copyTask from './copy';

export default parallel(htmlTask, cssTask, imgTask, spriteTask, copyTask);
