import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
// containers
import Qrcode from 'containers/Qrcode'
// components
import Wrapper from 'components/header/Wrapper'
import Btn from 'components/header/Btn'
// moduels
import { openPage } from 'modules/pageloading'

const Header = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [qrcode, setQrcode] = useState(false);
	const [fullScreen, setFullScreen] = useState(0);
	/*
		0: not enabled
		1: off
		2: on
	*/

	const onClickHexagonal = (e) => {
		e.preventDefault();
		
		if (history.location.pathname === '/main') {
			return;
		} else {
			dispatch(openPage('/main'));
		}
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
			if (!!document.fullscreenElement) {
				document.exitFullscreen();
			}
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