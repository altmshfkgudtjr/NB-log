import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// components
import Layout from 'components/modal/project/Layout'
import Page from 'components/modal/project/Page'

const Project = ({ PreventModalOff, ModalOff, args }) => {
	const project = useSelector(state => state.project.project);
	const [off, setOff] = useState(false);
	
	const onClickBackground = (e) => {
		PreventModalOff(e);
		args.onClose();
		setTimeout(() => ModalOff(), 500);
		setOff(true);
	}

	console.log(project);
	
	return (
		<Layout onMouseDown={onClickBackground}>
			<Page onMouseDown={PreventModalOff} off={off} />
		</Layout>
	);
}

export default Project