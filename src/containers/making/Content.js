import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import Wrapper from 'components/profile/Wrapper'
import ContentWrapper from 'components/making/ContentWrapper'
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
			
		</ContentWrapper>
	);	

	return (
		<Wrapper>
			{MakingContent}
		</Wrapper>
	);
}

export default Content