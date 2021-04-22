import styled from 'styled-components'

const Copyright = () => {
	return <Content>© 2021-present NB. All Rights Reserved.</Content>;
}

const Content = styled.div`
	position: absolute;
	text-align: center;
	left: 0;
	right: 0;
	margin: auto;
	bottom: 2rem;
	font-size: 12px;
`;

export default Copyright