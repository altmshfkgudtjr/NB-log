import { useState, useEffect } from 'react';

function useWebAccessibility() {
	const [isMouseDown, setIsMouseDown] = useState(false);

	useEffect(() => {
		document.addEventListener('mousedown', () => setIsMouseDown(true));
		document.addEventListener('keydown', () => setIsMouseDown(false));
	}, []);

	return [isMouseDown];
}

export default useWebAccessibility