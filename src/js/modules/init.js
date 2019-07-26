export default function (callback) {
	if (document.readyState === 'complete') {
		callback();

		return;
	}

	document.addEventListener('DOMContentLoaded', callback(), false);
}
