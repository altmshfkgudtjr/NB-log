import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const PageUrl = ({ url, color }) => {
	return <Content href={url} 
									target="_blank_"
									color={color}>{url}</Content>;
}

const Content = styled.a`
	display: block;
	color: ${props => props.color};
	word-break: break-all;
	margin-bottom: 1rem;

	&:visited {
		color: ${props => props.color};
	}

	&:focus, &:hover {
		text-decoration: underline;
		text-underline-position: under;
	}

	${media.small} {
		font-size: 14px;
	}
`;

export default PageUrl