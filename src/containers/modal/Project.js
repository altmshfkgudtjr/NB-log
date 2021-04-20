import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// components
import Layout from 'components/modal/project/Layout'
import Page from 'components/modal/project/Page'
import PageTitle from 'components/modal/project/PageTitle'
import PageInfo from 'components/modal/project/PageInfo'
import ImageContent from 'components/modal/project/ImageContent'
import TextContent from 'components/modal/project/TextContent'
import PageUrl from 'components/modal/project/PageUrl'
import CloseBtn from 'components/modal/project/CloseBtn'

const Project = ({ PreventModalOff, ModalOff, args }) => {
	const project = useSelector(state => state.project.project);
	const [off, setOff] = useState(false);
	
	const onClickBackground = (e) => {
		PreventModalOff(e);
		args.onClose();
		setTimeout(() => ModalOff(), 500);
		setOff(true);
	}

	const Content = project.post.map(
		(data, idx) => data.type === 'image'
			? <ImageContent key={idx} src={data.content} size={data.size} color={project.color} />
			: <TextContent key={idx} text={data.content} />
	);
	
	return (
		<Layout onMouseDown={onClickBackground}>
			<CloseBtn off={off} onClick={onClickBackground} />
			
			<Page onMouseDown={PreventModalOff} off={off}>
				<PageTitle title={project.title} />
				<PageInfo infoList={project.position} collaborator={project.collaborator} />
				{Content}
				<PageUrl url={project.url} color={project.color} />
			</Page>
		</Layout>
	);
}

export default Project