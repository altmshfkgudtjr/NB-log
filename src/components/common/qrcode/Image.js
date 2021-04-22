import styled from 'styled-components'

const Image = ({ src }) => {
	return <Content alt="Qrcode" src={src} />;
}

const Content = styled.img`
	width: 140px;
	height: 140px;
	border-radius: 12px;
`;

export default Image