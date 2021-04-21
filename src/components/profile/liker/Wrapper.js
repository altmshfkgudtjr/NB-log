import styled from 'styled-components'
// lib
import { mediaQuery } from 'lib/styles/media'

const Wrapper = styled.aside`
	position: sticky;
	top: 278px;
	width: 80px;
	margin-left: 100px;

	${mediaQuery(1000)} {
		display: none;
	}
`;

export default Wrapper