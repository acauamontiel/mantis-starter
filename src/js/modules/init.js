export default function (callback) {
	if (document.readyState === 'complete') {
		callback.bind(this);
	} else {
		document.addEventListener(
			'DOMContentLoaded',
			callback.bind(this),
			false
		);
	}
}
