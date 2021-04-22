import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import TypoWrapper from 'components/home/TypoWrapper'
import Typo from 'components/common/Typography'
// modules
import { getSentences } from 'modules/json'

const Typography = () => {
	const dispatch = useDispatch();
	const textList = useSelector(state => state.json.sentences.concept);

	useEffect(() => {
		dispatch(getSentences());
	}, [dispatch]);

	return (
		<TypoWrapper>
			<Typo textList={textList} />
		</TypoWrapper>
	);
}

export default Typography