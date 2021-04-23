import { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'

// - Wave
//
// - adapted from "Wavy Header" by Charles Ojukwu
// - https://codepen.io/cojdev/details/PjYPKv

const Lines = () => {
	const nodes = 3;
	const waves = [];
	const waveHeight = 120;
	const colors = ["#f80000", "#00f800", "#0000f8"];

	let cvs, ctx;
	let canvasRef = useRef(null);

	function wave(color, nodes) {
		this.color = color;
		this.nodes = [];

		for (let i = 0; i <= nodes+3; i++) {
			let temp = [(i-1) * cvs.width / nodes, 0, Math.random()*200, .3];
			this.nodes.push(temp);
		}
	}

	/* eslint-disable */
	const init = useCallback(() => {
		if (!canvasRef) return;
		cvs = canvasRef.current;
		if (!cvs) return;
		ctx = cvs.getContext("2d");

		for (let i = 0; i < 3; i++) {
			waves.push(new wave(colors[i], nodes));
		}

		cvs.height = window.innerHeight;
		update();
	}, [canvasRef, canvasRef.current]);
	/* eslint-enable */

	function update() {
		ctx.fillStyle = "#f8f8f8";
		ctx.globalCompositeOperation = "source-over";
		ctx.fillRect(0, 0, cvs.width, cvs.height);
		ctx.globalCompositeOperation = "overlay";
		
		for (let i = 0; i < waves.length; i++) {
			for (let j = 0; j < waves[i].nodes.length; j++) {
				bounce(waves[i].nodes[j]);
			}
			drawWave(waves[i]);
		}
		
		requestAnimationFrame(update);
	}

	function bounce(nodeArr) {
		nodeArr[1] = waveHeight/2*Math.sin(nodeArr[2]/10)+cvs.height/2;
		nodeArr[2] = nodeArr[2] + nodeArr[3];
	}

	function drawWave (obj) {
		let diff = function(a, b) {
			return (b - a)/2 + a;
		}

		ctx.fillStyle = obj.color;
		ctx.beginPath();
		ctx.moveTo(0,cvs.height);
		ctx.lineTo(obj.nodes[0][0],obj.nodes[0][1]);

		for (let i = 0; i < obj.nodes.length; i++) {
			if (obj.nodes[i+1]) {
				ctx.quadraticCurveTo(
					obj.nodes[i][0], obj.nodes[i][1],
					diff(obj.nodes[i][0], obj.nodes[i+1][0]),
					diff(obj.nodes[i][1], obj.nodes[i+1][1])
				);
			} else {
				ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1]);
				ctx.lineTo(cvs.width, cvs.height);
			}
		}
		ctx.closePath();
		ctx.fill();
	}

	useEffect(() => {
		init();
	}, [init]);

	return <Canvas ref={canvasRef} />;
}

const Canvas = styled.canvas`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	width: 100%;
	height: 100vh;
	z-index: 0;
`;

export default Lines