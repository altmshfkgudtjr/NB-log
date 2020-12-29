import React from 'react'
import styled from 'styled-components'

const PageUrl = ({ url, color }) => {
	return <Content href={url} 
									target="_blank_"
									color={color}>{url}</Content>;
}

const Content = styled.a`
		color: ${props => props.color};

		&:visited {
			color: ${props => props.color};
		}

		&:hover {
			text-decoration: underline;
			text-underline-position: under;
		}
`;

export default PageUrl