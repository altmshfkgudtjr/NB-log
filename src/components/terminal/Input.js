import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const Input = ({ onKeyUp }) => {
	return (
		<Container>
			<div>
				<span>NB#log</span>
				<span>:</span>
				<span>~</span>
				<span>$</span>
			</div>
			<UserInput type="text"
								 onKeyUp={onKeyUp}
								 spellCheck="false"
								 autoFocus />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	& > div > span { font-weight: 300; margin-right: 2px; }
	& > div > span:nth-child(1) { color: ${palette.teal4}; }
	& > div > span:nth-child(3) { color: ${palette.blue2}; }
`;

const UserInput = styled.input`
	flex-grow: 1;
	font-weight: 100;
	padding: 0 0 0 4px;
	outline: none;
`;

export default Input