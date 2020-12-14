import React from 'react'
import { Helmet } from "react-helmet-async"
// components
import Lines from 'components/canvas/Lines'
import TypoWrapper from 'components/main/TypoWrapper'
import Typography from 'components/common/Typography'
import Copyright from 'components/common/Copyright'

const HomePage = () => {
	const textList = [
		"# is the connection,\nbetween developer and client.",
		"FBWE - \nFor Better Web Experience",
		"보기 좋은 떡이\n먹기도 좋은 것 같습니다.",
		"結び?",
		"NB#Log"
	]

	return (<>
		<Helmet>
			<title>NB#log</title>
		</Helmet>

		<Lines />

		<TypoWrapper>
			<Typography textList={textList} />
		</TypoWrapper>

		<Copyright />
	</>);
}

export default HomePage