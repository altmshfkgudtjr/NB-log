import React from 'react'
import styled from 'styled-components'

const SkillContent = ({ category, contentList }) => {
	const ContentList = contentList.map(
		(data, idx) => <Content key={idx}>{data}</Content>
	);

	return (
		<Container>
			<Category>{category}</Category>
			{ContentList}
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 1rem;
`;

const Category = styled.div`
	font-weight: 600;
	margin-bottom: .5rem;
`;

const Content = styled.div`
	margin-bottom: .5rem;
	margin-left: 1rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

export default SkillContent