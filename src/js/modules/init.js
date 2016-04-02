export default function (callback) {
	if (document.readyState === 'complete') {
		callback.bind(this);
		return;
	}

	document.addEventListener(
		'DOMContentLoaded',
		callback.bind(this),
		false
	);
}
