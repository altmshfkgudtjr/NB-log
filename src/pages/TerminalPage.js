import { Helmet } from "react-helmet-async"
// containers
import Terminal from 'containers/terminal/Terminal'
// components
import LargeText from 'components/main/LargeText'

const TerminalPage = () => {
	return (<>
		<Helmet>
			<title>NB#log - Terminal</title>
		</Helmet>

		<Terminal />
		<LargeText message="WHO AM I" />
	</>);
}

export default TerminalPage