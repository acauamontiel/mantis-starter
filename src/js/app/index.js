import init from '../modules/init';

export default class App {
	constructor() {
		this.id = Date.now();
	}

	init(callback) {
		init.call(this, callback);
	}
}
