import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const PageUrl = ({ url, color }) => {
	return <Content href={url} 
									target="_blank_"
									color={color}>{url}</Content>;
}

const Content = styled.a`
		color: ${props => props.color};
		word-break: break-all;

		&:visited {
			color: ${props => props.color};
		}

		&:hover {
			text-decoration: underline;
			text-underline-position: under;
		}

		${media.small} {
			font-size: 14px;
		}
`;

export default PageUrl