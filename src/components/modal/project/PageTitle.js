import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const PageTitle = ({ title }) => {
	return <Content>{title || null}</Content>;
}

const Content = styled.div`
	font-size: 54px;
	font-weight: 100;

	${media.small} {
		font-size: 32px;
	}
`

export default PageTitle