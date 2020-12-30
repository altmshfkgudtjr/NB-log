import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const Folder = ({ all=false, folders }) => {
	const Folders = folders.map(
		(data, idx) => <Content key={idx} 
														type={data.type} 
														show={all}>{data.content}/</Content>
	);

	return (
		<Container>
			{Folders}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Content = styled.div`
	display: ${props => props.type === 'FORLDER' || props.show
		? 'block'
		: 'none'
	};
	color: ${palette.blue4};
	margin-right: 2rem;
`;

export default Folder