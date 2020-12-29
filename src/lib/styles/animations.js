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
		transform: translateY(-40px);
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
		transform: translateY(-40px);
	}
`;

const fadeInBottom = keyframes`
	0% {
		opacity: 0;
		transform: translateY(40px);
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
		transform: translateY(40px);
	}
`;

const fadeInRight = keyframes`
	0% {
		opacity: 0;
		transform: translateX(40px);
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
		transform: translateX(40px);
	}
`;

const fadeInLeft = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-40px);
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
		transform: translateX(-40px);
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

const loadingOn = keyframes`
	0% { transform: translateY(50%); opacity: 0; }
	20% { transform: translateY(50%); opacity: 0; }
	100% { transform: translateY(0); opacity: 1; }
`;

const loadingOff = keyframes`
	0% { transform: translateY(0); opacity: 1; }
	30% { transform: translateY(5%); opacity: 1; }
	100% { transform: translateY(-50%); opacity: 0; }
`;

const hexagonalSpin = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
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
	tooltip,
	loadingOn,
	loadingOff,
	hexagonalSpin
};

export default animations