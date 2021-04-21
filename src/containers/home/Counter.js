import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// controllers
import { getCount } from 'controllers/common'
// lib
import palette from 'lib/styles/palette'

const Counter = () => {
	const ref = useRef(null);
	const [defaultCount, setDefaultCount] = useState(0);

	const animateValue = (start=0, end=0, duration=2000) => {
		if (!ref.current) return;
		
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			if (!ref.current) return;
			ref.current.innerHTML = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}


	useEffect(() => {
		async function fetchData() {
			const { value } = await getCount();
			if (!value) return;
			setDefaultCount(value);
		}
		fetchData();
	}, []);

	useEffect(() => {
		animateValue(0, defaultCount, 2000);
	}, [defaultCount]);

	return (
		<Wrapper ref={ref}>0</Wrapper>
	);
}

const Wrapper = styled.div`
	position: absolute;
	text-align: center;
	left: 0;
	right: 0;
	margin: auto;
	bottom: 3.5rem;
	font-size: 12px;
	color: ${palette.teal4};
	font-weight: 500;
`;

export default Counter