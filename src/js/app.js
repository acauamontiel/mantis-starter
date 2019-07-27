console.time('Initialize'); // eslint-disable-line no-console
import App from './app/index';

const app = new App();

app.init(() => {
	/* eslint no-console:0 */
	console.log('%cMantis Starter', 'color: #338656; font: 50px sans-serif;');
	console.timeEnd('Initialize');
	/* eslint no-console:0 */
});
