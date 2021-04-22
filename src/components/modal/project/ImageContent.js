import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// icon
import { Hexagonal } from 'lib/icons'
// lib
import animations from 'lib/styles/animations'

const ImageContent = ({ src, size, color }) => {
	const ref = useRef(null);
	const [preview, setPreview] = useState(true);

	let [width, height] = size.split('×');
	height = window.innerWidth > 702 
		? `${Math.floor(height * (654 / width))}px`
		: `${Math.floor(height * ((window.innerWidth - 32) / width))}px`;
	width = window.innerWidth > 702
		? `${654}px`
		: `${window.innerWidth - 32}px`;

	/* Image Preload */
	useEffect((() => {
		const img = new Image();
		img.onload = function() {
			if (!ref.current) return;

			setPreview(false);
			ref.current.src = src;
		}
		img.src = src;
	}));

	return (
		<Container>
			<Content 
				src="" alt="" ref={ref} 
				width={width}
				height={height}
				preview={preview} 
			/>
			<Preview 
				width={width}
				height={height}
				preview={preview}
				color={color}
			>
				<Icon />
			</Preview>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 3rem;
`;

const Content = styled.img`
	display: ${props => props.preview
		? 'none'
		: 'block'
	};
	width: ${props => props.width};
	max-width: 100%;
	height: ${props => props.height};
	min-height: ${props => props.preview
		? props.height + 'px'
		: 'auto'
	};
	margin: auto;
	object-fit: contain;
`;

const Preview = styled.div`
	display: ${props => props.preview
		? 'flex'
		: 'none'
	};
	align-items: center;
	justify-content: center;
	background-color: ${props => props.color};
	opacity: .3;
	width: ${props => props.width};
	max-width: 100%;
	height: ${props => props.height};
	min-height: ${props => props.preview
		? props.height + 'px'
		: 'auto'
	};
	margin: auto;
	border-radius: 4px;
	animation: 3s ${animations.blink} ease-in-out infinite;
`;

const Icon = styled(Hexagonal)`
	width: 32px;
	height: 32px;
	opacity: 1;
	animation: 6s ${animations.hexagonalSpin} linear infinite;
`;

export default ImageContent