import React, { useState } from 'react'
import useInterval from 'lib/hooks/useInterval'
// components
import Wrapper from 'components/profile/Wrapper'
import NameContent from 'components/profile/Name'

const Name = () => {
	const name_list = ['Hyungseok Kim', '金亨錫', '김형석', 'NB'];
	const [target, setTarget] = useState(0);
	const [anime, setAinme] = useState(true);
	
	const changingName = () => {
		setAinme(false);
		setTimeout(() => {
			setAinme(true);
			setTarget(
				target + 1 === name_list.length
					? 0
					: target + 1
			);
		}, 350);
	}

	useInterval(() => {
		changingName();
	}, 4000);

	return (
		<Wrapper>
			<NameContent message={name_list[target]} show={anime} />
		</Wrapper>
	);
}

export default Name