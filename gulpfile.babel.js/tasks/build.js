import {parallel} from 'gulp';
import htmlTask from './html';

export default parallel(htmlTask);
