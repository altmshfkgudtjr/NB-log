import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const InfoTitle = ({ message }) => {
	return <Content>{message}</Content>;
}

const Content = styled.h4`
	font-size: 24px;
	font-weight: 600;
	margin-top: 0;
	margin-bottom: 1rem;
	text-transform: uppercase;
	color: ${palette.orange4};
`;

export default InfoTitle