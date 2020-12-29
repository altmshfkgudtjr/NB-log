import React from 'react'
import { Helmet } from 'react-helmet-async'
// containers
import Hexagonal from 'containers/making/Hexagonal'

const MakingPage = () => {
	return (<>
		<Helmet>
			<title>NB#log - Making</title>
		</Helmet>

		<Hexagonal />
	</>);
}

export default MakingPage