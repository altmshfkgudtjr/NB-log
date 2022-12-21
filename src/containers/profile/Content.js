import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import Wrapper from "components/profile/Wrapper";
import Introduce from "components/profile/Introduce";
import Email from "components/profile/Email";
import BtnWrapper from "components/profile/BtnWrapper";
import Btn from "components/profile/Btn";
import InfoWrapper from "components/profile/InfoWrapper";
import InfoTitle from "components/profile/InfoTitle";
import InfoContent from "components/profile/InfoContent";
import ExperienceContent from "components/profile/ExperienceContent";
import OtherExperienceContent from "components/profile/OtherExperienceContent";
import SkillContent from "components/profile/SkillContent";
import KeywordWrapper from "components/profile/KeywordWrapper";
import Keyword from "components/profile/Keyword";
import Footer from "components/profile/Footer";
// modules
import { getInfo } from "modules/json";

const Content = ({ isPrint = false }) => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.json.info);

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);

  const KeywordList = info.keyword.map((data, idx) => (
    <Keyword key={idx} message={data} />
  ));

  const BtnList = Object.entries(info.url).map((data) => (
    <Btn key={data[0]} message={data[0]} href={data[1]} isPrint={isPrint} />
  ));

  const ExperienceList = info.experience.map((data, idx) => (
    <ExperienceContent
      key={idx}
      time={data.date}
      place={data.place}
      link={data.href}
      content={data.content}
      role={data.role}
    />
  ));

  const OtherExperienceList = info.otherExperience.map((data, idx) => (
    <OtherExperienceContent
      key={idx}
      time={data.date}
      place={data.place}
      link={data.href}
      content={data.content}
      role={data.role}
    />
  ));

  const PrizeList = info.prizes.map((data, idx) => (
    <InfoContent
      key={idx}
      time={data.date}
      management={data.title}
      content={`${data.content} - ${data.management}`}
    />
  ));

  const SkillList = Object.entries(info.skills).map((data) => (
    <SkillContent key={data[0]} category={data[0]} contentList={data[1]} />
  ));

  const EducationList = info.education.map((data, idx) => (
    <InfoContent
      key={idx}
      time={data.date}
      management={data.management}
      content={data.content}
    />
  ));

  return (
    <>
      <Wrapper>
        <Introduce message={info.introduce} />

        <KeywordWrapper>{KeywordList}</KeywordWrapper>

        <Email />

        <BtnWrapper>{BtnList}</BtnWrapper>

        <InfoWrapper>
          <InfoTitle message="EDUCATION" />
          {EducationList}
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle message="WORK EXPERIENCE" />
          {ExperienceList}
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle message="OTHER EXPERIENCE" />
          {OtherExperienceList}
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle message="PRIZES" />
          {PrizeList}
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle message="SKILLS" />
          {SkillList}
        </InfoWrapper>

        <Footer />
      </Wrapper>
    </>
  );
};

export default Content;
