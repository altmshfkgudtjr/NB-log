import React from 'react'
import { Helmet } from "react-helmet-async"
// components
import Copyright from 'components/common/Copyright'

const HomePage = () => {
	return (<>
		<Helmet>
			<title>NB#log</title>
		</Helmet>

		<Copyright />
	</>);
}

export default HomePage