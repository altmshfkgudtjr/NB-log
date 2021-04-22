import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import Wrapper from 'components/profile/Wrapper'
import ContentWrapper from 'components/making/ContentWrapper'
import ImageContent from 'components/making/ImageContent'
import TextContent from 'components/making/TextContent'
// modules
import { getMaking } from 'modules/json'

const Content = () => {
	const dispatch = useDispatch();
	const making = useSelector(state => state.json.making);

	useEffect(() => {
		dispatch(getMaking());
	}, [dispatch]);

	const MakingContent = making.map(
		(data, idx) => <ContentWrapper key={idx}>
			{data.map(
				(d, i) => d.type === 'image'
					? <ImageContent key={i} src={d.content} alt={d.alt} />
					: <TextContent key={i} keyword={d.keyword} text={d.content} />
			)}
		</ContentWrapper>
	);	

	return (
		<Wrapper>
			{MakingContent}
		</Wrapper>
	);
}

export default Content