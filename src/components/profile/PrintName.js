import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const PrintName = ({ message }) => {
	return <Content>{message}</Content>;;
}

const Content = styled.div`
	font-size: 48px;
	padding-top: 16px;

	${media.small} {
		font-size: 32px;
		padding-top: 16px;
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		font-size: 32px;
		padding-top: 16px;
	}
`;

export default PrintName