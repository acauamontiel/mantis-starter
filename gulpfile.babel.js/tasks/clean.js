import rimraf from 'rimraf';
import {dest} from '../paths';

export default function cleanTask(done) {
	rimraf(dest, done);
};
