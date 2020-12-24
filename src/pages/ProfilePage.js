import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Name from 'containers/profile/Name'
import Content from 'containers/profile/Content'

const ProfilePage = () => {
	return (<>
		<Helmet>
			<title>NB#log - Profile</title>
		</Helmet>

		<Name />
		<Content />
	</>);
}

export default ProfilePage