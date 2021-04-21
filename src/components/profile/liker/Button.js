import styled from 'styled-components'
// icon
import { Firecracker } from 'lib/icons'
// styles
import * as styles from 'lib/styles/styles'

const Button = ({ onClick }) => {
	return (
		<Wrapper onClick={onClick}>
			<Icon />
		</Wrapper>
	);
}

const Wrapper = styled.button`
	width: 80px;
	height: 80px;
	border-radius: 80px;

	&:hover {
		& > svg {
			opacity: .8;
			filter: invert(68%) sepia(43%) saturate(4938%) hue-rotate(1deg) brightness(104%) contrast(102%);
		}
	}
`;

const Icon = styled(Firecracker)`
	opacity: .2;
	transition: .4s ${styles.transition} ease;
`;

export default Button