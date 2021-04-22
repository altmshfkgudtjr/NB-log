import { Helmet } from "react-helmet-async"
// containers
import Name from 'containers/profile/Name'
import Content from 'containers/profile/Content'
import Liker from 'containers/profile/Liker'
// components
import Layout from 'components/profile/Layout'

const ProfilePage = () => {
	return (<>
		<Helmet>
			<title>NB#log - Profile</title>
		</Helmet>

		<Name />
		
		<Layout>
			<Liker />

			<Content />
		</Layout>
	</>);
}

export default ProfilePage