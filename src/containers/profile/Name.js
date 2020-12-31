import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useInterval from 'lib/hooks/useInterval'
// components
import Wrapper from 'components/profile/Wrapper'
import NameContent from 'components/profile/Name'
import PrintNameContent from 'components/profile/PrintName'
// modules
import { getInfo } from 'modules/json'

const Name = ({ isPrint=false }) => {
	const dispatch = useDispatch();
	const name_list = useSelector(state => state.json.info.name);
	const [target, setTarget] = useState(0);
	const [anime, setAinme] = useState(true);
	let e = null;

	const changingName = () => {
		setAinme(false);
		e = setTimeout(() => {
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

	useEffect(() => {
		dispatch(getInfo());
	}, [dispatch]);

	useEffect(() => {
		return () => clearTimeout(e);
	}, [e]);

	return (
		<Wrapper>
			{!isPrint && <NameContent message={name_list[target]} show={anime} />}
			{isPrint && <PrintNameContent message="김형석 (Hyungseok Kim) 프로필" />}
		</Wrapper>
	);
}

export default Name