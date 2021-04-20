import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'

const TopBtn = () => {
	const onClick = () => {
		document.querySelector('div > div> div').scrollTo(0,0);
	}

	return <Btn onClick={onClick}>To the top.</Btn>;
}

const Btn = styled.button`
	display: block;
	margin: 0 auto 2rem auto;
	padding: .5rem 2rem;
	font-size: 14px;
	transition: .2s ${styles.transition};
	opacity: .6;

	&:focus, &:hover {
		opacity: 1;
	}

	${media.small} {
		display: none;
	}
`;

export default TopBtn