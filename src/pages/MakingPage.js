import { Helmet } from 'react-helmet-async'
// containers
import Name from 'containers/profile/Name'
import Hexagonal from 'containers/making/Hexagonal'
import HexagonalText from 'containers/making/HexagonalText'
import Content from 'containers/making/Content'
// components
import Title from 'components/making/Title'
import TopBtn from 'components/making/TopBtn'

const MakingPage = () => {
	return (<>
		<Helmet>
			<title>NB#log - Making</title>
		</Helmet>

		<Name />
		<Hexagonal />
		<Title message="FBWE - For Better Web Experience." />
		<HexagonalText />
		<Content />

		<TopBtn />
	</>);
}

export default MakingPage