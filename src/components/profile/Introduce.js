import React from 'react'
import styled from 'styled-components'

const Introduce = ({ message }) => {
	return <Content>{message}</Content>;
}

const Content = styled.div`
	white-space: pre-wrap;
	word-break: keep-all;
`;

export default Introduce