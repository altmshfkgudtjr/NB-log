import React from 'react'
import styled from 'styled-components'

const Title = ({ message }) => {
	return <Content>{message}</Content>;
}

const Content = styled.div`
	text-align: center;
	font-size: 18px;
	font-weight: 100;
`;

export default Title