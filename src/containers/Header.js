import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
// containers
import Qrcode from 'containers/common/Qrcode'
// components
import Wrapper from 'components/header/Wrapper'
import Btn from 'components/header/Btn'
// moduels
import { openPage } from 'modules/pageloading'

const Header = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [qrcode, setQrcode] = useState(false);
	const [fullScreen, setFullScreen] = useState(0);
	/*
		0: not enabled
		1: off
		2: on
	*/
	const [isProfile, setIsProfile] = useState(false);

	const onClickHexagonal = (e) => {
		e.preventDefault();
		
		if (location.pathname === '/main') {
			return;
		} else {
			dispatch(openPage('/main'));
		}
	}

	const onOpenQrcode = () => setQrcode(true);

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

	const onPrint = () => {
		const windowObj = window.open('/print', "PrintWindow", "width=1000, height=600, top=100, left=500, toolbars=no, scrollbars=no, status=no, resizable=no");
		windowObj.focus();
		windowObj.print();
		setTimeout(() => windowObj.close(), 2000);
	}

	useEffect(() => {
		if (!document.fullscreenEnabled) {
			setFullScreen(0);
		} else {
			setFullScreen(2);
		}
	}, []);

	useEffect(() => {
		if (location.pathname === '/profile') {
			setIsProfile(true);
		} else {
			setIsProfile(false);
		}
	}, [location]);

	return (<>
		<Wrapper>
			<div>
				<Btn icon="hexagonal" onClick={onClickHexagonal} />
			</div>
			<div>
				{isProfile && <Btn icon="print" onClick={onPrint} />}
				<Btn icon="clip" onClick={onOpenQrcode} />
				{fullScreen === 1 && <Btn icon="inner" onClick={onFullScreen} />}
				{fullScreen === 2 && <Btn icon="outer" onClick={onFullScreen} />}
			</div>
		</Wrapper>
		{qrcode && <Qrcode onClose={onCloseQrcode} />}
	</>);
}

export default Header