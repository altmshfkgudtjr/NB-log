import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const ImageContent = ({ src, size, color }) => {
	const [preview, setPreview] = useState(true);
	const ref = useRef(null);
	let [width, height] = size.split('×');
	width = window.innerWidth < width ? 'auto' : width + 'px';
	height = window.innerWidth < width ? height + 'px' : 'auto';

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
			<Content src="" alt="" ref={ref} 
							 width={width}
							 height={height}
							 preview={preview} />
			<Preview width={width}
							 height={height}
							 preview={preview}
							 color={color} />
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
		? 'block'
		: 'none'
	};
	background-color: ${props => props.color};
	opacity: .2;
	width: ${props => props.width};
	max-width: 100%;
	height: ${props => props.height};
	min-height: ${props => props.preview
		? props.height + 'px'
		: 'auto'
	};
	margin: auto;
	border-radius: 4px;
`;

export default ImageContent