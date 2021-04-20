export const dragScreen = (target) => {
	const SPEED = 2;
	let originX = 0, scrollLeft = 0;

	function mouseDown(e) {
		if (e.button !== 0) return;

		e.preventDefault();
		originX = e.pageX - target.offsetLeft;
		scrollLeft = target.scrollLeft;
		target.onmouseup = mouseUp;
		target.onmousemove = mouseMove;
		document.body.style.cursor = 'grabbing';
	}

	function mouseMove(e) {
		e.preventDefault();
		const x = e.pageX - target.offsetLeft;
		target.scrollLeft = scrollLeft - (x - originX) * SPEED;
	}

	function mouseUp(e) {
		e.preventDefault();
		target.onmouseup = null;
		target.onmousemove = null;
		document.body.style.cursor = '';
	}
	
	target && (target.onmousedown = mouseDown);
}