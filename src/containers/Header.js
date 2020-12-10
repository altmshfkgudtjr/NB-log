import React, { useState, useEffect } from 'react'
// components
import Wrapper from 'components/header/Wrapper'
import Btn from 'components/header/Btn'

const Header = () => {
	const [fullScreen, setFullScreen] = useState(0);
	/*
		0: not enabled
		1: off
		2: on
	*/

	const onFullScreen = () => {
		if (fullScreen === 1) {
			setFullScreen(2);
			document.exitFullscreen();
		} else {
			setFullScreen(1);
			document.body.requestFullscreen();
		}
	}

	useEffect(() => {
		if (!document.fullscreenEnabled) {
			setFullScreen(0);
		} else {
			setFullScreen(2);
		}
	}, []);

	return (
		<Wrapper>
			<div>
				<Btn />
			</div>
			<div>
				<Btn />
				{fullScreen == 1 && <Btn onClick={onFullScreen} />}
				{fullScreen == 2 && <Btn onClick={onFullScreen} />}
			</div>
		</Wrapper>
	);
}

export default Header