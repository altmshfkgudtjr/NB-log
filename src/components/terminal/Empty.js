import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const Empty = ({ command }) => {
	return (
		<Container>
			<span>NB#log</span>
			<span>:</span>
			<span>~</span>
			<span>$</span>
			<Command>{command}</Command>
		</Container>
	);
}

const Container = styled.div`
	& > span { font-weight: 300; margin-right: 2px; }
	& > span:nth-child(1) { color: ${palette.teal4}; }
	& > span:nth-child(3) { color: ${palette.blue2}; }
`;

const Command = styled.span`
	font-weight: 100 !important;
	padding: 0 0 0 4px;
`;

export default Empty