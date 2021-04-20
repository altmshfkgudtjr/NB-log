import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// components
import HexagonalWrapper from 'components/main/HexagonalWrapper'
import Triangle from 'components/main/Triangle'
// modules
import { openPage } from 'modules/pageloading'

const Hexagonal = () => {
	const dispatch = useDispatch();
	const [pop, setPop] = useState([0,0,0,0,0,0]);

	const onClick = (type) => dispatch(openPage(type));

	const onInteractive = () => {
		return new Promise(resolve => {
			setPop([1,0,0,0,0,0]);
			setTimeout(() => resolve(), 160);
		}).then(() => new Promise(resolve => {
			setPop([0,1,0,0,0,0]);
			setTimeout(() => resolve(), 160);
		})).then(() => new Promise(resolve => {
			setPop([0,0,1,0,0,0]);
			setTimeout(() => resolve(), 160);
		})).then(() => new Promise(resolve => {
			setPop([0,0,0,1,0,0]);
			setTimeout(() => resolve(), 160);
		})).then(() => new Promise(resolve => {
			setPop([0,0,0,0,1,0]);
			setTimeout(() => resolve(), 160);
		})).then(() => new Promise(resolve => {
			setPop([0,0,0,0,0,1]);
			setTimeout(() => resolve(), 160);
		})).then(() => new Promise(resolve => {
			setPop([1,0,0,0,0,0]);
			setTimeout(() => resolve(), 160);
		})).then(() => {
			setPop([0,0,0,0,0,0]);
		})
	}

	return (
		<HexagonalWrapper>
			<Triangle message="" onClick={onInteractive} pop={pop[0]} />
			<Triangle message="PROJECT" onClick={() => onClick('/project')} pop={pop[1]} />
			<Triangle message="TERMINAL" onClick={() => onClick('/terminal')} pop={pop[2]} />
			<Triangle message="CONCEPT" onClick={() => onClick('/')} pop={pop[3]} />
			<Triangle message="MAKING" onClick={() => onClick('/making')} pop={pop[4]} />
			<Triangle message="PROFILE" onClick={() => onClick('/profile')} pop={pop[5]} />
		</HexagonalWrapper>
	);
}

export default Hexagonal