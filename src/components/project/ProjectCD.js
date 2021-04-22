import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const ProjectCD = ({ img }) => {
	return (
		<Container id="cd" img={img}>
			<Hole />
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	width: 50%;
	height: 100%;
	border-radius: 100%;
	background-image: ${props => `url(${props.img})`};
	background-position: center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateX(60%) rotate(0deg);
	transition: 5s ${styles.transition};
	box-sizing: border-box;
	border: 8px solid white;

	&::before {
		content: '';
		position: absolute;
		top: -8px;
		left: -8px;
		width: calc(100% + 16px);
		height: calc(100% + 16px);
		border-radius: 100%;
		box-shadow: ${styles.boxShadow.regular};
		transition: 5s ${styles.transition};
	}

	${media.small} {
		display: none;
	}

	@media screen and (max-height: 600px) and (orientation: landscape) {
		display: flex;
	}
`;

const Hole = styled.div`
	position: relative;
	width: 16%;
	height: 16%;
	max-width: 60px;
	max-height: 60px;
	background-color: #FFF;
	border-radius: 100%;
	border: 12px solid ${palette.gray0};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		box-shadow: ${styles.boxShadow.regular} inset;
		transition: 5s ${styles.transition};
		border: 8px solid ${palette.gray1};
		box-sizing: border-box;
	}
`;

export default ProjectCD