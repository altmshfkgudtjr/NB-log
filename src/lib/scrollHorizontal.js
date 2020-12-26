export const scrollHorizontal = (e) => {
	document.querySelector('#dragging').scrollLeft += e.deltaY;
}