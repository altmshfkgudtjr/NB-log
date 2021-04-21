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

const zoomInHexaMobile = keyframes`
	0% { opacity: 0; transform: scale(.5, .5); }
	100% { opacity: 1; transform: scale(.8, .8); }
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

const hexagonalDraw = keyframes`
	0% { stroke-dashoffset: 272; }
	80% { stroke-dashoffset: 0; fill: rgba(0,0,0,0); }
	100% { stroke-dashoffset: 0; fill: rgba(0,0,0,.8); }
`;

const mouseWheel = keyframes`
  0% { opacity: 0; transform: translate(-50%, 20px); }
  30% { opacity: 1; transform: translate(-50%, 28px); }
  60% { opacity: 0; transform: translate(-50%, 36px); }
  100% { opacity: 0; transform: translate(-50%, 36px); }
`;

const blink = keyframes`
	0% { opacity: 0.3; }
	40% { opacity: 0.4; }
	100% { opacity: 0.3; }
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
	zoomInHexaMobile,
	tooltip,
	loadingOn,
	loadingOff,
	hexagonalSpin,
	hexagonalDraw,
	mouseWheel,
	blink
};

export default animations