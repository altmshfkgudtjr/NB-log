import { Helmet } from "react-helmet-async"
// containers
import Typography from 'containers/home/Typography'
import Counter from 'containers/home/Counter'
// components
import Lines from 'components/canvas/Lines'
import Copyright from 'components/common/Copyright'

const HomePage = () => {
	return (<>
		<Helmet>
			<title>NB#log</title>
		</Helmet>

		<Lines />
		<Typography />
		<Counter />
		<Copyright />
	</>);
}

export default HomePage