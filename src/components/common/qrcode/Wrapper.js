import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import animations from 'lib/styles/animations'
import media from 'lib/styles/media'
import zIndex from 'lib/styles/zIndex'

const Wrapper = ({ children }) => {
	return <Container id="qrcode">{children}</Container>;
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 64px;
	right: 144px;
	width: 140px;
	height: 140px;
	border-radius: 4px;
	box-shadow: ${styles.boxShadow.bold};
	animation: ${animations.fadeIn} .2s cubic-bezier(.25,.75,.5,1.25);
	z-index: ${zIndex.modal};

	${media.small} {
		right: 16px;
	}
`;

export default Wrapper