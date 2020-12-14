import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// containers
import Qrcode from 'containers/Qrcode'
// components
import Wrapper from 'components/header/Wrapper'
import Btn from 'components/header/Btn'

const Header = () => {
	const history = useHistory();
	const [qrcode, setQrcode] = useState(false);
	const [fullScreen, setFullScreen] = useState(0);
	/*
		0: not enabled
		1: off
		2: on
	*/

	const onClickHexagonal = () => {
		history.push('/main');
	}

	const onOpenQrcode = () => {
		setQrcode(true);
	}

	const onCloseQrcode = (e) => {
		const target = document.querySelector("#qrcode");
		if (!target.contains(e.target)) {
			setQrcode(false);
		}
	}

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

	return (<>
		<Wrapper>
			<div>
				<Btn icon="hexagonal" onClick={onClickHexagonal} />
			</div>
			<div>
				<Btn icon="clip" onClick={onOpenQrcode} />
				{fullScreen === 1 && <Btn icon="inner" onClick={onFullScreen} />}
				{fullScreen === 2 && <Btn icon="outer" onClick={onFullScreen} />}
			</div>
		</Wrapper>
		{qrcode && <Qrcode onClose={onCloseQrcode} />}
	</>);
}

export default Header