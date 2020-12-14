import React, { useEffect } from 'react'
import qrcode from 'qrcode-generator'
// components
import Wrapper from 'components/qrcode/Wrapper'
import Image from 'components/qrcode/Image'

const Qrcode = ({ show, onClose }) => {
	const url = window.location.href;
	const qr = qrcode(4, 'L');
	qr.addData(url);
	qr.make();
	const src = qr.createDataURL();

	useEffect(() => {
		document.addEventListener('click', onClose);
		return () => {
			document.removeEventListener('click', onClose);
		}
	}, [onClose]);

	return (
		<Wrapper>
			<Image src={src} />
		</Wrapper>
	);
} 

export default Qrcode