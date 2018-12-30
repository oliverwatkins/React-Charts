import React from "react";

const size = 20;

export default function BarIcon(props) {
	let viewBox=` -${size} -${size} ${size*2} ${size*2}`
	return (
		<div>
			<div>
				<svg width={size} height={size} transform = "rotate(0 100 100)">
					{getPaths()}
				</svg>
			</div>
		</div>
	);
}
const slices = [
	{percent: 0.1, color: '#c1d138'},
	{percent: 0.7, color: '#7e97db'},
	{percent: 0.2, color: '#00ab6b'},
];

const getPaths = () => {
	let paths = [];
	let xPos = 0;
	let yPos = 0;
	let widthSlice = size/slices.length;
	let heightSlice = 0;

	slices.forEach(slice => {
		heightSlice = size*slice.percent;
		let offset = size - size*slice.percent;
		yPos = offset;
		paths.push(<rect x={xPos}  y={yPos} width={widthSlice} height={heightSlice} style={{fill:slice.color}} />)
		xPos = xPos + widthSlice;
	});
	return paths;
}