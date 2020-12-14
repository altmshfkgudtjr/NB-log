import { keyframes } from 'styled-components';

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const fadeOut = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

const fadeInCenter = keyframes`
	0% {
		opacity: 0;
		transform: scale(.5, .5);
	}
	100% {
		opacity: 1;
		transform: scale(1, 1);
	}
`;

const fadeOutCenter = keyframes`
	0% {
		opacity: 1;
		transform: scale(1, 1);
	}
	100% {
		opacity: 0;
		transform: scale(.5, .5);
	}
`;

const fadeInTop = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeOutTop = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(-20px);
	}
`;

const fadeInBottom = keyframes`
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeOutBottom = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(20px);
	}
`;

const fadeInRight = keyframes`
	0% {
		opacity: 0;
		transform: translateX(20px);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const fadeOutRight = keyframes`
	0% {
		opacity: 1;
		transform: translateX(0);
	}
	100% {
		opacity: 0;
		transform: translateX(20px);
	}
`;

const fadeInLeft = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-20px);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const fadeOutLeft = keyframes`
	0% {
		opacity: 1;
		transform: translateX(0);
	}
	100% {
		opacity: 0;
		transform: translateX(-20px);
	}
`;
const zoomIn = keyframes`
	0% { opacity: 0; transform: scale(.5, .5); }
	100% { opacity: 1; transform: scale(1, 1); }
`;
const zoomOut = keyframes`
	0% { opacity: 1; transform: scale(1, 1); }
	100% { opacity: 0; transform: scale(.5, .5); }
`;
const tooltip = keyframes`
	0% { opacity: 0; }
	40% { opacity: 0; }
	50% { opacity: 1; } 
	100% { opacity: 1; }
`;
const animations = {
	fadeIn,
	fadeOut,
	fadeInCenter,
	fadeOutCenter,
	fadeInLeft,
	fadeOutLeft,
	fadeInRight,
	fadeOutRight,
	fadeInTop,
	fadeOutTop,
	fadeInBottom,
	fadeOutBottom,
	zoomIn,
	zoomOut,
	tooltip
};

export default animations