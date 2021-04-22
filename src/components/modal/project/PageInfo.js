import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const PageInfo = ({ infoList, collaborator }) => {
	const Position = infoList && infoList.join(" / ");
	const Collabo = collaborator && collaborator.join(' ');

	return (
		<Container>
			<strong>{Position || null}</strong>
			<span> - </span>	
			<Content>{Collabo || null}</Content>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 3rem;

	& > strong {
		font-weight: 400;
	}

	& > span {
		font-weight: 100;
	}
`;

const Content = styled.span`
	color: ${palette.gray6};
`;

export default PageInfo