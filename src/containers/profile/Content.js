import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import Wrapper from 'components/profile/Wrapper'
import Introduce from 'components/profile/Introduce'
import BtnWrapper from 'components/profile/BtnWrapper'
import Btn from 'components/profile/Btn'
import InfoWrapper from 'components/profile/InfoWrapper'
import InfoTitle from 'components/profile/InfoTitle'
import InfoContent from 'components/profile/InfoContent'
import SkillContent from 'components/profile/SkillContent'
import Footer from 'components/profile/Footer'
// modules
import { getInfo } from 'modules/json'

const Content = () => {
	const dispatch = useDispatch();
	const info = useSelector(state => state.json.info);
	console.log(info);

	useEffect(() => {
		dispatch(getInfo());
	}, [dispatch]);

	const BtnList = Object.entries(info.url).map(
		data => <Btn key={data[0]}
								 message={data[0]}
								 href={data[1]} />
	);

	const ExperienceList = info.experience.map(
		(data, idx) => <InfoContent key={idx}
																time={data.date}
																management={data.place}
																content={data.content} />
	);

	const PrizeList = info.prizes.map(
		(data, idx) => <InfoContent key={idx}
																time={data.date}
																management={data.title}
																content={`${data.content} - ${data.management}`} />
	);

	const SkillList = Object.entries(info.skills).map(
		data => <SkillContent key={data[0]}
													category={data[0]}
													contentList={data[1]} />
	);

	const EducationList = info.education.map(
		(data, idx) => <InfoContent key={idx}
																time={data.date}
																management={data.management}
																content={data.content} />
	);

	return (<>
		<Wrapper>
			<Introduce message={info.introduce} />

			<BtnWrapper>
				{BtnList}
			</BtnWrapper>

			<InfoWrapper>
				<InfoTitle message="EXPERIENCE" />
				{ExperienceList}
			</InfoWrapper>

			<InfoWrapper>
				<InfoTitle message="PRIZES" />
				{PrizeList}
			</InfoWrapper>

			<InfoWrapper>
				<InfoTitle message="SKILLS" />
				{SkillList}
			</InfoWrapper>

			<InfoWrapper>
				<InfoTitle message="EDUCATION" />
				{EducationList}
			</InfoWrapper>
		</Wrapper>

		<Footer />
	</>);
}

export default Content