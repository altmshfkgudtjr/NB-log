import { Helmet } from "react-helmet-async";
// containers
import Name from "containers/profile/Name";
import Content from "containers/profile/Content";
import Liker from "containers/profile/Liker";
// components
import Layout from "components/profile/Layout";

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>프론트엔드 개발자 김형석입니다.</title>
      </Helmet>

      <Name />

      <Layout>
        <Liker />

        <Content />
      </Layout>
    </>
  );
};

export default ProfilePage;
