import { useState, useEffect } from 'react'
// components
import Wrapper from 'components/profile/liker/Wrapper'
import Button from 'components/profile/liker/Button'
import LikeCount from 'components/profile/liker/LikeCount'
// controllers
import { getLike, hitLike } from 'controllers/common'
// lib
import explode from 'lib/particle'

const Liker = () => {
	const [value, setValue] = useState(null);

	function onClick(e) {
		if (!e.target) return;
		explode(e.pageX, e.pageY);
		hitLike();
		setValue(v => v + 1);
	}

	useEffect(() => {
		async function fetchData() {
			const { value } = await getLike();
			if (!value) return;
			setValue(value);
		}
		fetchData();
	}, []);

	return (
		<Wrapper className="button">
			<Button onClick={onClick} />
			<LikeCount>{value}</LikeCount>
		</Wrapper>
	);
}

export default Liker