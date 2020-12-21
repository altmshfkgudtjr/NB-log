import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Hexagonal from 'containers/main/Hexagonal'
// components
import Barcode from 'components/main/Barcode'
import LargeText from 'components/main/LargeText'

const MainPage = () => {
	return (<>
		<Helmet>
			<title>NB#log - Main</title>
		</Helmet>

		<Hexagonal />
		<Barcode />
		<LargeText message="SELECT" />
	</>);
}

export default MainPage