import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const InfoContent = ({ time, management='', content='' }) => {
	return (
		<Container role="listitem">
			<Header>
				{management.length !== 0 && <strong>{management}</strong>}
				<span>({time})</span>
			</Header>
			<p>{content}</p>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 1rem;
`;

const Header = styled.div`
	display: flex;
	align-items: center;

	& > strong {
		font-weight: 500;
		margin-right: .5rem;
	}

	${media.small} {
		display: block;

		& > strong {
			display: block;
		}
	}
`;

export default InfoContent